import styles from './Services.module.css';

export default function Services() {
  const features = [
    {
      icon: '⚡',
      title: 'Solicitud Rápida',
      description:
        'Solicita un porte en menos de 1 minuto. Selecciona el tipo de vehículo y confirma tu dirección.',
    },
    {
      icon: '🚚',
      title: 'Seguimiento en Tiempo Real',
      description:
        'Ve la ubicación de tu conductor en vivo y recibe actualizaciones del estado de tu mudanza.',
    },
    {
      icon: '💳',
      title: 'Pago Seguro',
      description:
        'Paga directamente en la app con tarjeta o efectivo. Precios transparentes sin sorpresas.',
    },
    {
      icon: '⭐',
      title: 'Calificaciones',
      description:
        'Lee reseñas de otros usuarios y califica a tu conductor al finalizar el servicio.',
    },
    {
      icon: '📱',
      title: 'Chat en Vivo',
      description:
        'Comunícate con tu conductor directamente desde la aplicación para coordinar detalles.',
    },
    {
      icon: '🚐',
      title: 'Múltiples Vehículos',
      description:
        'Elige entre furgonetas pequeñas, medianas o grandes según tus necesidades.',
    },
  ];

  const vehicleTypes = [
    {
      type: 'Furgoneta Pequeña',
      icon: '🚙',
      capacity: 'Hasta 3m³',
      ideal: 'Ideal para objetos pequeños, compras grandes o electrodomésticos',
      price: 'Desde 25€',
    },
    {
      type: 'Furgoneta Mediana',
      icon: '🚚',
      capacity: 'Hasta 10m³',
      ideal: 'Perfecta para mudanzas de habitación o muebles medianos',
      price: 'Desde 45€',
    },
    {
      type: 'Furgoneta Grande',
      icon: '🚛',
      capacity: 'Hasta 20m³',
      ideal: 'Para mudanzas completas de pisos o grandes volúmenes',
      price: 'Desde 75€',
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué elegir Portesillo?</h2>
          <p className="section-subtitle">
            La forma más fácil y segura de transportar tus cosas
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.vehiclesSection}>
          <h3 className={styles.vehiclesTitle}>Elige el Vehículo Perfecto</h3>
          <p className={styles.vehiclesSubtitle}>
            Tenemos el tamaño ideal para cada necesidad
          </p>

          <div className={styles.vehiclesGrid}>
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className={styles.vehicleCard}>
                <div className={styles.vehicleIcon}>{vehicle.icon}</div>
                <h4 className={styles.vehicleType}>{vehicle.type}</h4>
                <div className={styles.vehicleCapacity}>{vehicle.capacity}</div>
                <p className={styles.vehicleIdeal}>{vehicle.ideal}</p>
                <div className={styles.vehiclePrice}>{vehicle.price}</div>
                <button className={styles.vehicleBtn}>Seleccionar</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Usuarios Activos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5K+</div>
              <div className={styles.statLabel}>Conductores</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Portes Completados</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>4.8★</div>
              <div className={styles.statLabel}>Calificación Promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
