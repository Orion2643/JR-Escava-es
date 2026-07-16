import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full animate-pulse-neon btn-whatsapp btn-whatsapp-hover"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
