import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contacta con Nosotros</h2>
          <p className="section-subtitle">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>info@portesillo.com</p>
              <p className={styles.infoText}>soporte@portesillo.com</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3 className={styles.infoTitle}>Teléfono</h3>
              <p className={styles.infoText}>+34 XXX XXX XXX</p>
              <p className={styles.infoSubtext}>Lun - Vie, 9:00 - 18:00</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3 className={styles.infoTitle}>Oficina</h3>
              <p className={styles.infoText}>Calle Principal, 123</p>
              <p className={styles.infoText}>28001 Madrid, España</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⏰</div>
              <h3 className={styles.infoTitle}>Horario de Atención</h3>
              <p className={styles.infoText}>Lunes a Viernes</p>
              <p className={styles.infoText}>9:00 - 18:00</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  rows="5"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
                </div>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h3 className={styles.faqTitle}>Preguntas Frecuentes</h3>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h4 className={styles.faqQuestion}>¿Cómo funciona Portesillo?</h4>
              <p className={styles.faqAnswer}>
                Simplemente descarga la app, crea tu cuenta, selecciona el tipo de vehículo que
                necesitas, indica tu dirección y confirma. Un conductor llegará en minutos.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h4 className={styles.faqQuestion}>¿Cuánto cuesta el servicio?</h4>
              <p className={styles.faqAnswer}>
                Los precios varían según el tipo de vehículo y la distancia. Siempre verás el
                precio estimado antes de confirmar tu pedido. Sin costos ocultos.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h4 className={styles.faqQuestion}>¿Los conductores están asegurados?</h4>
              <p className={styles.faqAnswer}>
                Sí, todos nuestros conductores están verificados, tienen seguro completo y han
                pasado controles de calidad rigurosos.
              </p>
            </div>
            <div className={styles.faqCard}>
              <h4 className={styles.faqQuestion}>¿Puedo programar un porte para más tarde?</h4>
              <p className={styles.faqAnswer}>
                ¡Por supuesto! Puedes solicitar un conductor inmediato o programar tu porte con
                hasta 7 días de anticipación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
