import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full animate-pulse-neon btn-whatsapp btn-whatsapp-hover sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
    </a>
  );
}
