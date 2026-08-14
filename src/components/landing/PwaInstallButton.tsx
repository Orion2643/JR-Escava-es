import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

type Props = {
  compact?: boolean;
  className?: string;
};

export function PwaInstallButton({ compact = false, className = "" }: Props) {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    const iosStandalone = Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);
    setInstalled(standalone || iosStandalone);

    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPromptEvent(null);
      toast.success("App da JR Escavações instalado com sucesso.");
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  async function handleInstall() {
    if (installed) {
      toast.success("O app da JR Escavações já está instalado neste dispositivo.");
      return;
    }

    if (promptEvent) {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice.outcome === "accepted") {
        toast.success("Instalação iniciada.");
        setPromptEvent(null);
      } else {
        toast.info("Instalação cancelada. Você pode instalar depois pelo navegador.");
      }
      return;
    }

    const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    toast.info(
      isIOS
        ? "No Safari, toque em Compartilhar e depois em Adicionar à Tela de Início."
        : "Abra o menu do navegador e escolha Instalar app ou Adicionar à tela inicial.",
    );
  }

  return (
    <button
      type="button"
      onClick={handleInstall}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] font-semibold text-white transition hover:border-primary/40 hover:bg-white/[0.08] ${
        compact ? "px-3 py-2.5 text-sm" : "px-4 py-3 text-sm"
      } ${className}`}
      aria-label="Instalar JR Escavações como aplicativo"
    >
      <Download className="h-4 w-4 text-primary" />
      {installed ? "App instalado" : "Instalar app"}
    </button>
  );
}
