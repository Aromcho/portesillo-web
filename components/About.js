import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="section-subtitle">
            Somos más que una app de transporte, somos tu aliado en cada mudanza
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.storySection}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>🚚</span>
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.contentTitle}>Nuestra Historia</h3>
              <p className={styles.contentText}>
                Portesillo nació de una necesidad real: hacer que mover tus cosas sea tan fácil
                como pedir un taxi. Fundada en 2025, hemos revolucionado el sector del transporte
                de mercancías en España, conectando a miles de usuarios con conductores profesionales
                de confianza.
              </p>
              <p className={styles.contentText}>
                Nuestra misión es simple pero poderosa: democratizar el acceso a servicios de
                mudanza y transporte, haciéndolos accesibles, rápidos y seguros para todos.
              </p>
            </div>
          </div>

          <div className={styles.valuesSection}>
            <h3 className={styles.valuesTitle}>Nuestros Valores</h3>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h4 className={styles.valueTitle}>Compromiso</h4>
                <p className={styles.valueText}>
                  Nos comprometemos a ofrecer el mejor servicio en cada mudanza, garantizando
                  la satisfacción de nuestros usuarios.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔒</div>
                <h4 className={styles.valueTitle}>Seguridad</h4>
                <p className={styles.valueText}>
                  La seguridad de tus pertenencias es nuestra prioridad. Todos nuestros conductores
                  están verificados y asegurados.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <h4 className={styles.valueTitle}>Innovación</h4>
                <p className={styles.valueText}>
                  Utilizamos la última tecnología para ofrecerte una experiencia de usuario
                  excepcional y seguimiento en tiempo real.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h4 className={styles.valueTitle}>Confianza</h4>
                <p className={styles.valueText}>
                  Construimos relaciones de confianza con nuestros usuarios y conductores,
                  basadas en transparencia y profesionalidad.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamSection}>
            <h3 className={styles.teamTitle}>Nuestro Equipo</h3>
            <p className={styles.teamDescription}>
              Un equipo diverso y apasionado trabajando cada día para mejorar tu experiencia de mudanza.
              Desde desarrolladores hasta expertos en logística, todos compartimos la visión de
              hacer las mudanzas más fáciles para ti.
            </p>
            <div className={styles.statsWrapper}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Profesionales</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Soporte</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Ciudades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
