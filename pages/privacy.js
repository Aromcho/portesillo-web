import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Legal.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Portesillo</title>
        <meta
          name="description"
          content="Política de privacidad y protección de datos de Portesillo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.legalPage}>
        <Header />

        <div className={styles.legalHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.legalIcon}>🔒</div>
              <h1 className={styles.legalTitle}>Política de Privacidad</h1>
              <p className={styles.legalSubtitle}>
                Tu privacidad es importante para nosotros. Conoce cómo protegemos tus datos
              </p>
              <div className={styles.lastUpdate}>
                Última actualización: Enero 2026
              </div>
            </div>
          </div>
        </div>

        <section className={styles.legalContent}>
          <div className="container">
            <div className={styles.contentWrapper}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Introducción</h2>
                <p className={styles.text}>
                  En Portesillo, nos tomamos muy en serio la privacidad de nuestros usuarios.
                  Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y
                  protegemos tu información personal cuando utilizas nuestra aplicación y servicios.
                </p>
                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>Cumplimiento RGPD:</strong> Esta política cumple con el Reglamento
                    General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica
                    de Protección de Datos (LOPD) de España.
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Información que Recopilamos</h2>

                <h3 className={styles.sectionSubtitle}>2.1. Información que Proporcionas</h3>
                <p className={styles.text}>
                  Cuando te registras y utilizas Portesillo, recopilamos:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Datos de identificación:</strong> Nombre, apellidos, fecha de nacimiento
                  </li>
                  <li className={styles.listItem}>
                    <strong>Información de contacto:</strong> Correo electrónico, número de teléfono
                  </li>
                  <li className={styles.listItem}>
                    <strong>Información de pago:</strong> Datos de tarjeta de crédito/débito (encriptados)
                  </li>
                  <li className={styles.listItem}>
                    <strong>Documento de identidad:</strong> Para conductores y verificación
                  </li>
                  <li className={styles.listItem}>
                    <strong>Fotografía de perfil:</strong> Opcional pero recomendada
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>2.2. Información que Recopilamos Automáticamente</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Datos de ubicación:</strong> GPS en tiempo real durante los servicios
                  </li>
                  <li className={styles.listItem}>
                    <strong>Información del dispositivo:</strong> Modelo, sistema operativo, versión de la app
                  </li>
                  <li className={styles.listItem}>
                    <strong>Datos de uso:</strong> Servicios solicitados, rutas, horarios, interacciones en la app
                  </li>
                  <li className={styles.listItem}>
                    <strong>Cookies y tecnologías similares:</strong> Ver nuestra Política de Cookies
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>2.3. Información de Terceros</h3>
                <p className={styles.text}>
                  Podemos recibir información sobre ti de:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Proveedores de servicios de pago</li>
                  <li className={styles.listItem}>Servicios de verificación de identidad</li>
                  <li className={styles.listItem}>Redes sociales (si conectas tu cuenta)</li>
                  <li className={styles.listItem}>Otros usuarios (calificaciones y comentarios)</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Cómo Utilizamos tu Información</h2>
                <p className={styles.text}>
                  Utilizamos tu información personal para:
                </p>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Finalidad</th>
                      <th>Base Legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Proporcionar y mejorar nuestros servicios</td>
                      <td>Ejecución del contrato</td>
                    </tr>
                    <tr>
                      <td>Procesar pagos y transacciones</td>
                      <td>Ejecución del contrato</td>
                    </tr>
                    <tr>
                      <td>Verificar tu identidad y prevenir fraudes</td>
                      <td>Obligación legal / Interés legítimo</td>
                    </tr>
                    <tr>
                      <td>Comunicaciones sobre el servicio</td>
                      <td>Ejecución del contrato</td>
                    </tr>
                    <tr>
                      <td>Marketing y promociones</td>
                      <td>Consentimiento (puedes darte de baja)</td>
                    </tr>
                    <tr>
                      <td>Análisis y mejora de la app</td>
                      <td>Interés legítimo</td>
                    </tr>
                    <tr>
                      <td>Cumplimiento de obligaciones legales</td>
                      <td>Obligación legal</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className={styles.sectionSubtitle}>3.1. Seguimiento de Ubicación</h3>
                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>¡Importante sobre la ubicación!</strong> Solo rastreamos tu ubicación
                    cuando tienes un servicio activo. Puedes desactivar el acceso a la ubicación
                    en cualquier momento, pero esto limitará tu capacidad de usar nuestros servicios.
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Compartir tu Información</h2>

                <h3 className={styles.sectionSubtitle}>4.1. Con Quién Compartimos</h3>
                <p className={styles.text}>
                  Compartimos tu información únicamente cuando es necesario:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Con conductores:</strong> Compartimos tu nombre, foto, ubicación de
                    recogida/entrega y número de teléfono durante servicios activos
                  </li>
                  <li className={styles.listItem}>
                    <strong>Proveedores de servicios:</strong> Procesadores de pago, servicios de
                    hosting, análisis y soporte técnico
                  </li>
                  <li className={styles.listItem}>
                    <strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger
                    derechos, propiedad o seguridad
                  </li>
                  <li className={styles.listItem}>
                    <strong>Socios comerciales:</strong> Con tu consentimiento explícito para ofertas
                    especiales
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>4.2. Lo que NO Hacemos</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    ❌ NO vendemos tu información personal a terceros
                  </li>
                  <li className={styles.listItem}>
                    ❌ NO compartimos tu información para marketing sin tu consentimiento
                  </li>
                  <li className={styles.listItem}>
                    ❌ NO rastreamos tu ubicación cuando no estás usando la app
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Seguridad de los Datos</h2>
                <p className={styles.text}>
                  Implementamos múltiples medidas de seguridad para proteger tu información:
                </p>

                <h3 className={styles.sectionSubtitle}>5.1. Medidas Técnicas</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Encriptación SSL/TLS para todas las transmisiones de datos
                  </li>
                  <li className={styles.listItem}>
                    Encriptación de extremo a extremo para datos sensibles
                  </li>
                  <li className={styles.listItem}>
                    Firewalls y sistemas de detección de intrusiones
                  </li>
                  <li className={styles.listItem}>
                    Auditorías de seguridad periódicas
                  </li>
                  <li className={styles.listItem}>
                    Autenticación de dos factores disponible
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>5.2. Medidas Organizativas</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Acceso limitado solo al personal autorizado
                  </li>
                  <li className={styles.listItem}>
                    Formación continua en seguridad y privacidad
                  </li>
                  <li className={styles.listItem}>
                    Acuerdos de confidencialidad con empleados y proveedores
                  </li>
                  <li className={styles.listItem}>
                    Plan de respuesta a incidentes de seguridad
                  </li>
                </ul>

                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    A pesar de nuestros esfuerzos, ningún sistema es 100% seguro. Te recomendamos
                    usar contraseñas fuertes y no compartir tus credenciales con nadie.
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Tus Derechos (RGPD)</h2>
                <p className={styles.text}>
                  Como usuario en la Unión Europea, tienes los siguientes derechos:
                </p>

                <h3 className={styles.sectionSubtitle}>6.1. Derechos Fundamentales</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Derecho de acceso:</strong> Solicitar una copia de tus datos personales
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho de supresión:</strong> Solicitar la eliminación de tus datos
                    ("derecho al olvido")
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho de limitación:</strong> Restringir el procesamiento de tus datos
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho de portabilidad:</strong> Recibir tus datos en formato estructurado
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho de oposición:</strong> Oponerte al procesamiento de tus datos
                  </li>
                  <li className={styles.listItem}>
                    <strong>Derecho a no ser objeto de decisiones automatizadas:</strong> Incluido
                    el perfilado
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>6.2. Cómo Ejercer tus Derechos</h3>
                <p className={styles.text}>
                  Para ejercer cualquiera de estos derechos:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Envía un correo a <strong>privacidad@portesillo.com</strong>
                  </li>
                  <li className={styles.listItem}>
                    Accede a la configuración de privacidad en la app
                  </li>
                  <li className={styles.listItem}>
                    Contacta con nuestro Delegado de Protección de Datos
                  </li>
                </ul>
                <p className={styles.text}>
                  Responderemos a tu solicitud en un plazo máximo de 30 días. También tienes
                  derecho a presentar una reclamación ante la Agencia Española de Protección
                  de Datos (AEPD).
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Retención de Datos</h2>
                <p className={styles.text}>
                  Conservamos tu información personal durante el tiempo necesario para:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Proporcionarte nuestros servicios (mientras tu cuenta esté activa)
                  </li>
                  <li className={styles.listItem}>
                    Cumplir con obligaciones legales y fiscales (generalmente 6 años)
                  </li>
                  <li className={styles.listItem}>
                    Resolver disputas y hacer cumplir nuestros acuerdos
                  </li>
                </ul>
                <p className={styles.text}>
                  Cuando elimines tu cuenta, eliminaremos o anonimizaremos tu información personal,
                  excepto cuando debamos conservarla por obligaciones legales.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Transferencias Internacionales</h2>
                <p className={styles.text}>
                  Tus datos pueden ser transferidos y procesados en países fuera de la Unión Europea.
                  En estos casos, nos aseguramos de que existan garantías adecuadas, como:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Cláusulas contractuales tipo aprobadas por la Comisión Europea
                  </li>
                  <li className={styles.listItem}>
                    Proveedores certificados bajo el Marco de Privacidad UE-EE.UU.
                  </li>
                  <li className={styles.listItem}>
                    Decisiones de adecuación de la Comisión Europea
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Privacidad de Menores</h2>
                <p className={styles.text}>
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos
                  intencionalmente información personal de menores. Si descubrimos que hemos
                  recopilado información de un menor, la eliminaremos inmediatamente.
                </p>
                <p className={styles.text}>
                  Si eres padre o tutor y crees que tu hijo nos ha proporcionado información
                  personal, contáctanos de inmediato.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Cambios en esta Política</h2>
                <p className={styles.text}>
                  Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos
                  sobre cambios significativos mediante:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Notificación en la aplicación</li>
                  <li className={styles.listItem}>Correo electrónico a tu dirección registrada</li>
                  <li className={styles.listItem}>Banner destacado en nuestra web</li>
                </ul>
                <p className={styles.text}>
                  Te recomendamos revisar esta política periódicamente para estar informado sobre
                  cómo protegemos tu información.
                </p>
              </div>

              <div className={styles.contactBox}>
                <h3>Contacto sobre Privacidad</h3>
                <p>Para consultas sobre privacidad y protección de datos:</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacidad@portesillo.com">privacidad@portesillo.com</a>
                </p>
                <p>
                  <strong>Delegado de Protección de Datos:</strong>{' '}
                  <a href="mailto:dpo@portesillo.com">dpo@portesillo.com</a>
                </p>
                <p>
                  <strong>Dirección postal:</strong> Calle Principal, 123 - 28001 Madrid, España
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
