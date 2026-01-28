import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <div className={styles.heroShape}></div>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Mudanzas y Portes en Minutos, Directamente a tu Puerta.
            </h1>
            <p className={styles.heroDescription}>
              ¡Portesillo revoluciona el transporte de tus muebles y objetos! Solicita un conductor
              en segundos, rastrea tu mudanza en tiempo real y paga de forma segura. Ya sea para
              mover un sofá o una mudanza completa, tenemos el vehículo perfecto para ti.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Descarga la App</button>
              <button className={styles.btnSecondary}>Sé Conductor</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.appPreview}>
                  <div className={styles.appHeader}>
                    <div className={styles.statusBar}></div>
                    <h3>🚚 Portesillo</h3>
                  </div>
                  <div className={styles.appContent}>
                    <div className={styles.featureCardMini}>
                      <div className={styles.featureIconMini}>📦</div>
                      <span>Solicita tu Porte</span>
                    </div>
                    <div className={styles.featureCardMini}>
                      <div className={styles.featureIconMini}>🚚</div>
                      <span>Seguimiento en Vivo</span>
                    </div>
                    <div className={styles.featureCardMini}>
                      <div className={styles.featureIconMini}>💳</div>
                      <span>Pago Seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.floatingElements}>
              <div className={`${styles.floatingElement} ${styles.element1}`}>📦</div>
              <div className={`${styles.floatingElement} ${styles.element2}`}>🚚</div>
              <div className={`${styles.floatingElement} ${styles.element3}`}>⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
