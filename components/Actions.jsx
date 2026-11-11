import { whatsapp } from '../lib/business';

export function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.7 11.8a8.7 8.7 0 0 1-12.9 7.7L3 21l1.5-4.7a8.7 8.7 0 1 1 16.2-4.5Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8.3 8.2c-.8 1.2 0 3 1.5 4.6s3.6 2.6 4.8 1.7l.9-1-2-1-1 .7a6 6 0 0 1-2.5-2.6l.6-.9-1-2Z"/></svg>;
}

export function WhatsApp({ children, message, className = '', label }) {
  return <a className={className} href={whatsapp(message)} aria-label={label}><WhatsAppIcon />{children}</a>;
}
