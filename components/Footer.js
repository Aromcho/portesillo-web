import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Portesillo</h3>
            <p className={styles.footerText}>
              La forma más rápida y segura de transportar tus cosas.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                📷
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Enlaces Rápidos</h4>
            <a href="#home" className={styles.footerLink}>
              Home
            </a>
            <a href="#about" className={styles.footerLink}>
              Sobre Nosotros
            </a>
            <a href="#services" className={styles.footerLink}>
              Servicios
            </a>
            <a href="#contact" className={styles.footerLink}>
              Contacto
            </a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Legal</h4>
            <Link href="/terms" className={styles.footerLink}>
              Términos y Condiciones
            </Link>
            <Link href="/privacy" className={styles.footerLink}>
              Política de Privacidad
            </Link>
            <Link href="/cookies" className={styles.footerLink}>
              Política de Cookies
            </Link>
            <Link href="/legal" className={styles.footerLink}>
              Aviso Legal
            </Link>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contacto</h4>
            <p className={styles.footerText}>
              <span className={styles.contactIcon}>📧</span>
              info@portesillo.com
            </p>
            <p className={styles.footerText}>
              <span className={styles.contactIcon}>📞</span>
              +34 XXX XXX XXX
            </p>
            <p className={styles.footerText}>
              <span className={styles.contactIcon}>📍</span>
              Madrid, España
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Portesillo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
