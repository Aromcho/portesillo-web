import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Legal.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones - Portesillo</title>
        <meta
          name="description"
          content="Términos y condiciones de uso de los servicios de Portesillo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.legalPage}>
        <Header />

        <div className={styles.legalHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.legalIcon}>📋</div>
              <h1 className={styles.legalTitle}>Términos y Condiciones</h1>
              <p className={styles.legalSubtitle}>
                Lee atentamente nuestros términos de uso antes de utilizar nuestros servicios
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
                <h2 className={styles.sectionTitle}>1. Aceptación de los Términos</h2>
                <p className={styles.text}>
                  Bienvenido a Portesillo. Al acceder y utilizar nuestra aplicación y servicios,
                  aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con
                  alguna parte de estos términos, no deberías utilizar nuestros servicios.
                </p>
                <p className={styles.text}>
                  Portesillo se reserva el derecho de modificar estos términos en cualquier momento.
                  Te notificaremos sobre cambios importantes mediante la aplicación o por correo
                  electrónico. El uso continuado de nuestros servicios después de dichas
                  modificaciones constituye tu aceptación de los nuevos términos.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Descripción del Servicio</h2>
                <p className={styles.text}>
                  Portesillo es una plataforma digital que conecta a usuarios que necesitan
                  servicios de transporte y mudanzas con conductores profesionales verificados.
                </p>
                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    <strong>Importante:</strong> Portesillo actúa únicamente como intermediario
                    entre usuarios y conductores. No somos propietarios de vehículos ni empleamos
                    directamente a los conductores.
                  </p>
                </div>

                <h3 className={styles.sectionSubtitle}>Nuestros servicios incluyen:</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Conexión instantánea entre usuarios y conductores disponibles
                  </li>
                  <li className={styles.listItem}>
                    Seguimiento en tiempo real de tus mudanzas y portes
                  </li>
                  <li className={styles.listItem}>
                    Sistema de pago seguro integrado en la aplicación
                  </li>
                  <li className={styles.listItem}>
                    Sistema de calificaciones y reseñas para garantizar la calidad del servicio
                  </li>
                  <li className={styles.listItem}>
                    Soporte al cliente 24/7 para resolver cualquier incidencia
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Registro y Cuenta de Usuario</h2>
                
                <h3 className={styles.sectionSubtitle}>3.1. Requisitos de Registro</h3>
                <p className={styles.text}>
                  Para utilizar Portesillo, debes crear una cuenta proporcionando información
                  precisa y completa. Debes tener al menos 18 años de edad para registrarte.
                </p>

                <h3 className={styles.sectionSubtitle}>3.2. Información Requerida</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Nombre completo</li>
                  <li className={styles.listItem}>Número de teléfono verificado</li>
                  <li className={styles.listItem}>Dirección de correo electrónico válida</li>
                  <li className={styles.listItem}>Método de pago válido</li>
                </ul>

                <h3 className={styles.sectionSubtitle}>3.3. Seguridad de la Cuenta</h3>
                <p className={styles.text}>
                  Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
                  Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.
                  Portesillo no será responsable de pérdidas derivadas del uso no autorizado de
                  tu cuenta.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Uso del Servicio</h2>

                <h3 className={styles.sectionSubtitle}>4.1. Solicitud de Servicios</h3>
                <p className={styles.text}>
                  Los usuarios pueden solicitar servicios de transporte a través de la aplicación.
                  Al confirmar una solicitud, te comprometes a:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Proporcionar información precisa sobre el origen, destino y naturaleza de la carga
                  </li>
                  <li className={styles.listItem}>
                    Estar disponible en el lugar y horario acordados
                  </li>
                  <li className={styles.listItem}>
                    Pagar el precio acordado por el servicio
                  </li>
                  <li className={styles.listItem}>
                    Tratar con respeto al conductor y sus pertenencias
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>4.2. Cancelaciones</h3>
                <p className={styles.text}>
                  Puedes cancelar una solicitud en cualquier momento a través de la aplicación.
                  Sin embargo, pueden aplicarse cargos de cancelación según el siguiente esquema:
                </p>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Tiempo de Cancelación</th>
                      <th>Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Más de 5 minutos antes de la llegada</td>
                      <td>Sin cargo</td>
                    </tr>
                    <tr>
                      <td>Menos de 5 minutos antes de la llegada</td>
                      <td>25% del precio estimado</td>
                    </tr>
                    <tr>
                      <td>Después de la llegada del conductor</td>
                      <td>50% del precio estimado</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className={styles.sectionSubtitle}>4.3. Comportamiento Prohibido</h3>
                <p className={styles.text}>
                  Está estrictamente prohibido:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Transportar objetos ilegales, peligrosos o prohibidos
                  </li>
                  <li className={styles.listItem}>
                    Acosar, amenazar o comportarse de manera inapropiada con los conductores
                  </li>
                  <li className={styles.listItem}>
                    Proporcionar información falsa o engañosa
                  </li>
                  <li className={styles.listItem}>
                    Intentar eludir el sistema de pago de la plataforma
                  </li>
                  <li className={styles.listItem}>
                    Realizar ingeniería inversa o intentar acceder sin autorización a nuestros sistemas
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Tarifas y Pagos</h2>

                <h3 className={styles.sectionSubtitle}>5.1. Precios</h3>
                <p className={styles.text}>
                  Los precios se calculan en función de varios factores, incluyendo distancia,
                  tipo de vehículo, demanda actual y duración estimada del servicio. Verás el
                  precio estimado antes de confirmar tu solicitud.
                </p>

                <h3 className={styles.sectionSubtitle}>5.2. Métodos de Pago</h3>
                <p className={styles.text}>
                  Aceptamos los siguientes métodos de pago:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Tarjetas de crédito (Visa, Mastercard, American Express)</li>
                  <li className={styles.listItem}>Tarjetas de débito</li>
                  <li className={styles.listItem}>Efectivo (en algunos servicios)</li>
                  <li className={styles.listItem}>Billeteras digitales (Apple Pay, Google Pay)</li>
                </ul>

                <h3 className={styles.sectionSubtitle}>5.3. Facturación</h3>
                <p className={styles.text}>
                  Se te facturará automáticamente al finalizar el servicio. Recibirás un recibo
                  detallado por correo electrónico y en la aplicación. Si detectas algún error
                  en la facturación, contacta con nuestro servicio de atención al cliente en un
                  plazo de 48 horas.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Responsabilidades y Limitaciones</h2>

                <h3 className={styles.sectionSubtitle}>6.1. Responsabilidad de los Conductores</h3>
                <p className={styles.text}>
                  Los conductores son contratistas independientes responsables de:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Mantener sus vehículos en condiciones óptimas y legales
                  </li>
                  <li className={styles.listItem}>
                    Contar con todos los seguros y licencias necesarias
                  </li>
                  <li className={styles.listItem}>
                    Proporcionar un servicio seguro y profesional
                  </li>
                  <li className={styles.listItem}>
                    Cumplir con todas las leyes y regulaciones aplicables
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>6.2. Limitación de Responsabilidad</h3>
                <div className={styles.highlightBox}>
                  <p className={styles.text}>
                    Portesillo no se hace responsable de daños, pérdidas o robos que puedan
                    ocurrir durante el transporte. Los usuarios deben contratar un seguro
                    adicional para objetos de alto valor. La responsabilidad de Portesillo está
                    limitada al monto del servicio contratado.
                  </p>
                </div>

                <h3 className={styles.sectionSubtitle}>6.3. Objetos Prohibidos</h3>
                <p className={styles.text}>
                  Está prohibido transportar:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Sustancias ilegales o peligrosas</li>
                  <li className={styles.listItem}>Armas de fuego sin autorización</li>
                  <li className={styles.listItem}>Animales vivos (salvo acuerdo previo)</li>
                  <li className={styles.listItem}>Dinero en efectivo en grandes cantidades</li>
                  <li className={styles.listItem}>Documentos o bienes robados</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Propiedad Intelectual</h2>
                <p className={styles.text}>
                  Todos los derechos de propiedad intelectual sobre la aplicación Portesillo,
                  incluyendo el diseño, código, logos, marcas y contenido, son propiedad exclusiva
                  de Portesillo o sus licenciantes.
                </p>
                <p className={styles.text}>
                  No está permitido copiar, modificar, distribuir o crear trabajos derivados de
                  nuestra aplicación sin autorización expresa y por escrito.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Terminación del Servicio</h2>
                <p className={styles.text}>
                  Portesillo se reserva el derecho de suspender o terminar tu cuenta si:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Violas estos Términos y Condiciones
                  </li>
                  <li className={styles.listItem}>
                    Proporcionas información falsa o fraudulenta
                  </li>
                  <li className={styles.listItem}>
                    Participas en actividades ilegales o perjudiciales
                  </li>
                  <li className={styles.listItem}>
                    Recibes múltiples quejas o calificaciones negativas
                  </li>
                </ul>
                <p className={styles.text}>
                  También puedes eliminar tu cuenta en cualquier momento desde la configuración
                  de la aplicación.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Ley Aplicable y Jurisdicción</h2>
                <p className={styles.text}>
                  Estos Términos y Condiciones se rigen por las leyes de España. Cualquier disputa
                  relacionada con estos términos o el uso de nuestros servicios se resolverá en
                  los tribunales de Madrid, España.
                </p>
              </div>

              <div className={styles.contactBox}>
                <h3>¿Tienes Preguntas?</h3>
                <p>Si tienes dudas sobre nuestros términos y condiciones:</p>
                <p>
                  Escríbenos a <a href="mailto:legal@portesillo.com">legal@portesillo.com</a>
                </p>
                <p>O llámanos al +34 XXX XXX XXX</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
