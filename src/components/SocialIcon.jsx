import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const icons = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

export default function SocialIcon({ platform, className = "w-4 h-4" }) {
  const Icon = icons[platform];
  return Icon ? <Icon className={className} aria-hidden="true" focusable="false" /> : null;
}
