import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Legal.module.css';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies - Portesillo</title>
        <meta
          name="description"
          content="Información sobre el uso de cookies en Portesillo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.legalPage}>
        <Header />

        <div className={styles.legalHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.legalIcon}>🍪</div>
              <h1 className={styles.legalTitle}>Política de Cookies</h1>
              <p className={styles.legalSubtitle}>
                Descubre cómo utilizamos cookies para mejorar tu experiencia
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
                <h2 className={styles.sectionTitle}>1. ¿Qué son las Cookies?</h2>
                <p className={styles.text}>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                  (ordenador, tablet o móvil) cuando visitas nuestro sitio web o utilizas nuestra
                  aplicación. Las cookies nos permiten reconocerte, recordar tus preferencias y
                  mejorar tu experiencia de usuario.
                </p>
                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>Nota importante:</strong> Las cookies no pueden acceder a otros archivos
                    de tu dispositivo ni contener virus. Son completamente seguras y solo almacenan
                    información que tú proporcionas o sobre cómo interactúas con nuestros servicios.
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Tipos de Cookies que Utilizamos</h2>

                <h3 className={styles.sectionSubtitle}>2.1. Según su Duración</h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Descripción</th>
                      <th>Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cookies de Sesión</strong></td>
                      <td>
                        Se eliminan automáticamente cuando cierras tu navegador. Nos permiten
                        gestionar tu sesión mientras navegas.
                      </td>
                      <td>Temporal</td>
                    </tr>
                    <tr>
                      <td><strong>Cookies Persistentes</strong></td>
                      <td>
                        Permanecen en tu dispositivo durante un período específico o hasta que
                        las elimines manualmente. Nos ayudan a recordar tus preferencias.
                      </td>
                      <td>Hasta 2 años</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className={styles.sectionSubtitle}>2.2. Según su Finalidad</h3>

                <p className={styles.text}>
                  <strong>🔧 Cookies Estrictamente Necesarias (Obligatorias)</strong>
                </p>
                <p className={styles.text}>
                  Estas cookies son esenciales para que puedas navegar por nuestro sitio web y
                  utilizar sus funciones básicas. Sin estas cookies, algunos servicios no pueden
                  proporcionarse.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Gestión de tu sesión de usuario</li>
                  <li className={styles.listItem}>Autenticación y seguridad</li>
                  <li className={styles.listItem}>Procesamiento de pagos</li>
                  <li className={styles.listItem}>Balanceo de carga del servidor</li>
                </ul>

                <p className={styles.text}>
                  <strong>⚙️ Cookies de Funcionalidad (Opcionales)</strong>
                </p>
                <p className={styles.text}>
                  Permiten recordar tus preferencias y elecciones (como tu idioma, región o nombre
                  de usuario) para ofrecerte una experiencia más personalizada.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Recordar tu idioma preferido</li>
                  <li className={styles.listItem}>Guardar configuraciones de accesibilidad</li>
                  <li className={styles.listItem}>Recordar ubicaciones frecuentes</li>
                  <li className={styles.listItem}>Preferencias de visualización</li>
                </ul>

                <p className={styles.text}>
                  <strong>📊 Cookies Analíticas (Opcionales)</strong>
                </p>
                <p className={styles.text}>
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web,
                  recopilando información de forma anónima para mejorar nuestros servicios.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Número de visitantes y páginas vistas</li>
                  <li className={styles.listItem}>Tiempo de permanencia en el sitio</li>
                  <li className={styles.listItem}>Rutas de navegación más comunes</li>
                  <li className={styles.listItem}>Detección de errores técnicos</li>
                </ul>

                <p className={styles.text}>
                  <strong>🎯 Cookies de Marketing (Opcionales)</strong>
                </p>
                <p className={styles.text}>
                  Se utilizan para rastrear tu actividad a través de diferentes sitios web y
                  mostrarte publicidad relevante basada en tus intereses.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Publicidad personalizada</li>
                  <li className={styles.listItem}>Medición de efectividad de campañas</li>
                  <li className={styles.listItem}>Retargeting y remarketing</li>
                  <li className={styles.listItem}>Análisis de conversiones</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Cookies Específicas que Utilizamos</h2>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Finalidad</th>
                      <th>Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>session_id</td>
                      <td>Necesaria</td>
                      <td>Mantener tu sesión activa</td>
                      <td>Sesión</td>
                    </tr>
                    <tr>
                      <td>auth_token</td>
                      <td>Necesaria</td>
                      <td>Autenticación de usuario</td>
                      <td>30 días</td>
                    </tr>
                    <tr>
                      <td>csrf_token</td>
                      <td>Necesaria</td>
                      <td>Protección contra ataques CSRF</td>
                      <td>Sesión</td>
                    </tr>
                    <tr>
                      <td>language_pref</td>
                      <td>Funcionalidad</td>
                      <td>Recordar tu idioma preferido</td>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <td>cookie_consent</td>
                      <td>Funcionalidad</td>
                      <td>Guardar tus preferencias de cookies</td>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <td>_ga</td>
                      <td>Analítica</td>
                      <td>Google Analytics - identificador único</td>
                      <td>2 años</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Analítica</td>
                      <td>Google Analytics - sesión</td>
                      <td>24 horas</td>
                    </tr>
                    <tr>
                      <td>_fbp</td>
                      <td>Marketing</td>
                      <td>Facebook Pixel</td>
                      <td>3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Cookies de Terceros</h2>
                <p className={styles.text}>
                  Además de nuestras propias cookies, utilizamos cookies de terceros para
                  proporcionar funcionalidades adicionales:
                </p>

                <h3 className={styles.sectionSubtitle}>4.1. Servicios de Análisis</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Google Analytics:</strong> Análisis de tráfico y comportamiento de usuarios
                  </li>
                  <li className={styles.listItem}>
                    <strong>Hotjar:</strong> Mapas de calor y grabaciones de sesiones (anonimizadas)
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>4.2. Redes Sociales</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Facebook Pixel:</strong> Medir efectividad de publicidad
                  </li>
                  <li className={styles.listItem}>
                    <strong>LinkedIn Insight Tag:</strong> Análisis de visitantes profesionales
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>4.3. Procesadores de Pago</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Stripe:</strong> Procesamiento seguro de pagos
                  </li>
                  <li className={styles.listItem}>
                    <strong>PayPal:</strong> Gestión de transacciones
                  </li>
                </ul>

                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>Nota:</strong> Estos terceros tienen sus propias políticas de privacidad
                    y cookies. Te recomendamos revisarlas en sus respectivos sitios web.
                  </p>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Gestión de Cookies</h2>

                <h3 className={styles.sectionSubtitle}>5.1. Panel de Configuración</h3>
                <p className={styles.text}>
                  Puedes gestionar tus preferencias de cookies en cualquier momento a través de:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    El banner de cookies que aparece en tu primera visita
                  </li>
                  <li className={styles.listItem}>
                    La sección "Configuración de Cookies" en el pie de página
                  </li>
                  <li className={styles.listItem}>
                    La configuración de privacidad en tu perfil de la app
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>5.2. Configuración del Navegador</h3>
                <p className={styles.text}>
                  También puedes controlar y/o eliminar cookies a través de la configuración de
                  tu navegador:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Chrome:</strong> Configuración {'>'} Privacidad y seguridad {'>'} Cookies
                  </li>
                  <li className={styles.listItem}>
                    <strong>Firefox:</strong> Opciones {'>'} Privacidad y seguridad {'>'} Cookies y datos del sitio
                  </li>
                  <li className={styles.listItem}>
                    <strong>Safari:</strong> Preferencias {'>'} Privacidad {'>'} Gestionar datos de sitios web
                  </li>
                  <li className={styles.listItem}>
                    <strong>Edge:</strong> Configuración {'>'} Cookies y permisos del sitio
                  </li>
                </ul>

                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>¡Atención!</strong> Deshabilitar todas las cookies puede afectar la
                    funcionalidad de nuestro sitio web. Algunas características pueden no estar
                    disponibles si bloqueas las cookies necesarias.
                  </p>
                </div>

                <h3 className={styles.sectionSubtitle}>5.3. Herramientas Adicionales</h3>
                <p className={styles.text}>
                  Para mayor control sobre las cookies de terceros, puedes utilizar:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Google Analytics Opt-out:</strong>{' '}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#ff6b35' }}
                    >
                      Descargar extensión
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <strong>Your Online Choices:</strong> Gestión de publicidad personalizada
                  </li>
                  <li className={styles.listItem}>
                    <strong>Network Advertising Initiative:</strong> Opt-out de cookies publicitarias
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Consentimiento</h2>
                <p className={styles.text}>
                  Al utilizar nuestro sitio web o aplicación, aceptas el uso de cookies
                  estrictamente necesarias. Para cookies opcionales (funcionalidad, analíticas
                  y marketing), solicitamos tu consentimiento explícito a través de nuestro
                  banner de cookies.
                </p>
                <p className={styles.text}>
                  Puedes:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Aceptar todas:</strong> Consientes el uso de todos los tipos de cookies
                  </li>
                  <li className={styles.listItem}>
                    <strong>Rechazar opcionales:</strong> Solo se utilizarán cookies necesarias
                  </li>
                  <li className={styles.listItem}>
                    <strong>Personalizar:</strong> Seleccionar qué categorías de cookies aceptas
                  </li>
                </ul>
                <p className={styles.text}>
                  Puedes cambiar tus preferencias en cualquier momento.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Cookies en la Aplicación Móvil</h2>
                <p className={styles.text}>
                  Nuestra aplicación móvil utiliza tecnologías similares a las cookies para
                  almacenar información localmente en tu dispositivo:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Local Storage:</strong> Almacenamiento de preferencias y configuración
                  </li>
                  <li className={styles.listItem}>
                    <strong>Session Storage:</strong> Datos temporales de sesión
                  </li>
                  <li className={styles.listItem}>
                    <strong>App Cache:</strong> Caché de recursos para mejorar el rendimiento
                  </li>
                  <li className={styles.listItem}>
                    <strong>Device IDs:</strong> Identificadores únicos del dispositivo
                  </li>
                </ul>
                <p className={styles.text}>
                  Puedes gestionar estos datos desde la configuración de privacidad en la aplicación.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Actualizaciones de esta Política</h2>
                <p className={styles.text}>
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios
                  en nuestra tecnología, legislación o prácticas comerciales. Te notificaremos
                  sobre cambios significativos y te pediremos que revises y aceptes la política
                  actualizada si es necesario.
                </p>
                <p className={styles.text}>
                  La fecha de la última actualización se indica en la parte superior de esta página.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Más Información</h2>
                <p className={styles.text}>
                  Para obtener más información sobre cómo protegemos tu privacidad, consulta:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Nuestra <a href="/privacy" style={{ color: '#ff6b35', fontWeight: 600 }}>
                      Política de Privacidad
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    Nuestros <a href="/terms" style={{ color: '#ff6b35', fontWeight: 600 }}>
                      Términos y Condiciones
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.contactBox}>
                <h3>¿Preguntas sobre Cookies?</h3>
                <p>Si tienes dudas sobre nuestra política de cookies:</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:cookies@portesillo.com">cookies@portesillo.com</a>
                </p>
                <p>
                  <strong>Privacidad:</strong>{' '}
                  <a href="mailto:privacidad@portesillo.com">privacidad@portesillo.com</a>
                </p>
                <p>O accede al panel de configuración de cookies en el pie de página</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
