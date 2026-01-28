import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🏪</span>
            <span className={styles.logoText}>PORTESILLO</span>
          </Link>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <a href="#home" className={styles.navLink} onClick={(e) => scrollToSection(e, 'home')}>
              Home
            </a>
            <a href="#about" className={styles.navLink} onClick={(e) => scrollToSection(e, 'about')}>
              Sobre nosotros
            </a>
            <a href="#services" className={styles.navLink} onClick={(e) => scrollToSection(e, 'services')}>
              Servicios
            </a>
            <a href="#contact" className={styles.navLink} onClick={(e) => scrollToSection(e, 'contact')}>
              Contacto
            </a>
          </nav>

          <button className={styles.notifyBtn}>Notificarme</button>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
