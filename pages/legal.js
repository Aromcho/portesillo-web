import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Legal.module.css';

export default function Legal() {
  return (
    <>
      <Head>
        <title>Aviso Legal - Portesillo</title>
        <meta
          name="description"
          content="Aviso legal e información corporativa de Portesillo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.legalPage}>
        <Header />

        <div className={styles.legalHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.legalIcon}>⚖️</div>
              <h1 className={styles.legalTitle}>Aviso Legal</h1>
              <p className={styles.legalSubtitle}>
                Información legal y corporativa sobre Portesillo
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
                <h2 className={styles.sectionTitle}>1. Datos Identificativos</h2>
                <p className={styles.text}>
                  En cumplimiento con el deber de información recogido en la Ley 34/2002 de
                  Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)
                  de España, a continuación se facilitan los datos identificativos del titular del
                  sitio web y la aplicación móvil:
                </p>

                <div className={styles.highlightBox}>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <strong>Denominación social:</strong> Portesillo Tecnología S.L.
                    </li>
                    <li className={styles.listItem}>
                      <strong>NIF:</strong> B-12345678
                    </li>
                    <li className={styles.listItem}>
                      <strong>Domicilio social:</strong> Calle Principal, 123, 28001 Madrid, España
                    </li>
                    <li className={styles.listItem}>
                      <strong>Correo electrónico:</strong> info@portesillo.com
                    </li>
                    <li className={styles.listItem}>
                      <strong>Teléfono:</strong> +34 XXX XXX XXX
                    </li>
                    <li className={styles.listItem}>
                      <strong>Registro Mercantil:</strong> Madrid, Tomo XXXXX, Folio XXX, Hoja M-XXXXXX
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Objeto y Ámbito de Aplicación</h2>
                <p className={styles.text}>
                  El presente Aviso Legal regula el uso y acceso al sitio web{' '}
                  <strong>www.portesillo.com</strong> y la aplicación móvil <strong>Portesillo</strong>,
                  propiedad de Portesillo Tecnología S.L.
                </p>
                <p className={styles.text}>
                  El acceso y uso de este sitio web y la aplicación móvil atribuye la condición
                  de usuario, que acepta, desde dicho acceso y/o uso, las Condiciones Generales
                  de Uso aquí reflejadas. Dichas condiciones serán de aplicación independientemente
                  de las Condiciones Generales de Contratación que en su caso resulten de obligado
                  cumplimiento.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Condiciones de Acceso y Uso</h2>

                <h3 className={styles.sectionSubtitle}>3.1. Carácter Gratuito</h3>
                <p className={styles.text}>
                  El acceso al sitio web y la descarga de la aplicación tienen carácter gratuito
                  para los usuarios, sin perjuicio del coste de conexión a través de la red de
                  telecomunicaciones suministrada por el proveedor de acceso contratado por los
                  usuarios.
                </p>

                <h3 className={styles.sectionSubtitle}>3.2. Uso Responsable</h3>
                <p className={styles.text}>
                  El usuario se compromete a utilizar el sitio web y la aplicación de conformidad
                  con la ley, el presente Aviso Legal, los Términos y Condiciones, así como con
                  la moral y buenas costumbres generalmente aceptadas y el orden público.
                </p>
                <p className={styles.text}>
                  El usuario se obliga a abstenerse de:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Hacer un uso no autorizado o fraudulento del sitio web y/o de los contenidos
                  </li>
                  <li className={styles.listItem}>
                    Acceder o intentar acceder a recursos o áreas restringidas del sitio web sin
                    cumplir las condiciones exigidas para dicho acceso
                  </li>
                  <li className={styles.listItem}>
                    Provocar daños en los sistemas físicos y lógicos del sitio web, de sus
                    proveedores o de terceras personas
                  </li>
                  <li className={styles.listItem}>
                    Introducir o difundir virus informáticos o cualesquiera otros sistemas que
                    sean susceptibles de provocar daños
                  </li>
                  <li className={styles.listItem}>
                    Intentar acceder, utilizar y/o manipular los datos de Portesillo, terceros
                    proveedores y otros usuarios
                  </li>
                  <li className={styles.listItem}>
                    Reproducir o copiar, distribuir, permitir el acceso del público a través de
                    cualquier modalidad de comunicación pública, transformar o modificar los
                    contenidos, a menos que se cuente con la autorización del titular
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>3.3. Contenido del Usuario</h3>
                <p className={styles.text}>
                  El usuario es el único responsable del contenido que publique, incluyendo textos,
                  imágenes, fotografías, gráficos, opiniones y cualquier otro tipo de información.
                  Portesillo no se hace responsable de opiniones vertidas por los usuarios a través
                  del sistema de calificaciones y comentarios.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Propiedad Intelectual e Industrial</h2>

                <h3 className={styles.sectionSubtitle}>4.1. Derechos de Portesillo</h3>
                <p className={styles.text}>
                  Todos los contenidos del sitio web y la aplicación móvil, incluyendo pero no
                  limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología,
                  software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya
                  propiedad pertenece a Portesillo, sin que puedan entenderse cedidos al usuario
                  ninguno de los derechos de explotación sobre los mismos.
                </p>

                <h3 className={styles.sectionSubtitle}>4.2. Marcas y Logotipos</h3>
                <p className={styles.text}>
                  Las marcas, nombres comerciales y signos distintivos que figuran en el sitio web
                  y la aplicación son propiedad de Portesillo o de terceros, sin que pueda
                  entenderse que el acceso al sitio web y/o aplicación atribuya ningún derecho
                  sobre las citadas marcas, nombres comerciales y/o signos distintivos.
                </p>

                <h3 className={styles.sectionSubtitle}>4.3. Prohibición de Uso No Autorizado</h3>
                <p className={styles.text}>
                  Queda expresamente prohibida la reproducción, distribución, comunicación pública,
                  transformación o cualquier otra forma de explotación de los contenidos del sitio
                  web y de la aplicación, salvo autorización previa y por escrito de Portesillo o,
                  en su caso, del titular de los derechos correspondientes.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Responsabilidad y Garantías</h2>

                <h3 className={styles.sectionSubtitle}>5.1. Exclusión de Garantías</h3>
                <p className={styles.text}>
                  Portesillo no garantiza la disponibilidad continua e ininterrumpida del
                  funcionamiento del sitio web y de la aplicación. Cuando ello sea razonablemente
                  posible, Portesillo advertirá previamente de las interrupciones en el
                  funcionamiento del sitio web y de la aplicación.
                </p>

                <h3 className={styles.sectionSubtitle}>5.2. Limitación de Responsabilidad</h3>
                <p className={styles.text}>
                  Portesillo excluye cualquier responsabilidad por los daños y perjuicios de toda
                  naturaleza que pudieran deberse a:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    La falta de disponibilidad o accesibilidad al sitio web y/o a la aplicación
                  </li>
                  <li className={styles.listItem}>
                    La interrupción en el funcionamiento del sitio web y/o de la aplicación o
                    fallos informáticos, averías telefónicas, desconexiones, retrasos o bloqueos
                  </li>
                  <li className={styles.listItem}>
                    Las infecciones por virus informáticos o cualquier otro elemento dañino
                  </li>
                  <li className={styles.listItem}>
                    Los contenidos difundidos, almacenados, recibidos, obtenidos o transmitidos
                    por los usuarios
                  </li>
                  <li className={styles.listItem}>
                    El uso ilícito, negligente, fraudulento o contrario al presente Aviso Legal
                  </li>
                </ul>

                <h3 className={styles.sectionSubtitle}>5.3. Enlaces Externos</h3>
                <p className={styles.text}>
                  El sitio web y la aplicación pueden contener enlaces o referencias a otros
                  sitios web de terceros. Portesillo no se hace responsable de los contenidos de
                  estos sitios web ni se responsabiliza del funcionamiento de los mismos.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Modificaciones</h2>
                <p className={styles.text}>
                  Portesillo se reserva el derecho de efectuar sin previo aviso las modificaciones
                  que considere oportunas en el sitio web y en la aplicación, pudiendo cambiar,
                  suprimir o añadir tanto los contenidos y servicios que se presten a través del
                  mismo como la forma en la que éstos aparezcan presentados o localizados.
                </p>
                <p className={styles.text}>
                  La vigencia de las citadas condiciones irá en función de su exposición y estarán
                  vigentes hasta que sean modificadas por otras debidamente publicadas.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Protección de Datos</h2>
                <p className={styles.text}>
                  Para toda la información relacionada con la protección y tratamiento de tus datos
                  personales, consulta nuestra{' '}
                  <a href="/privacy" style={{ color: '#ff6b35', fontWeight: 600 }}>
                    Política de Privacidad
                  </a>
                  , donde encontrarás información detallada sobre:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Qué datos recopilamos y por qué</li>
                  <li className={styles.listItem}>Cómo utilizamos tus datos</li>
                  <li className={styles.listItem}>Con quién compartimos tu información</li>
                  <li className={styles.listItem}>Tus derechos bajo el RGPD</li>
                  <li className={styles.listItem}>Cómo protegemos tu información</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Jurisdicción y Legislación Aplicable</h2>
                <p className={styles.text}>
                  Las presentes Condiciones Generales se rigen por la legislación española. Para
                  cualquier controversia que pudiera derivarse del acceso o uso del sitio web y/o
                  de la aplicación, Portesillo y el usuario, con renuncia expresa a cualquier otro
                  fuero, se someten a los Juzgados y Tribunales de la ciudad de Madrid (España).
                </p>
                <p className={styles.text}>
                  En el caso de que el usuario tenga su domicilio fuera de España, Portesillo y el
                  usuario se someten, con renuncia expresa a cualquier otro fuero, a los juzgados
                  y tribunales de la ciudad de Madrid (España).
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Resolución de Conflictos</h2>

                <h3 className={styles.sectionSubtitle}>9.1. Plataforma de Resolución de Litigios</h3>
                <p className={styles.text}>
                  Conforme al Reglamento (UE) 524/2013, la Comisión Europea facilita una plataforma
                  de acceso gratuito para la resolución online de conflictos entre el usuario y
                  Portesillo, sin necesidad de recurrir a los tribunales de justicia, mediante la
                  intervención de un tercero, llamado Organismo de resolución de litigios, que actúa
                  de intermediario entre ambos.
                </p>
                <p className={styles.text}>
                  Este organismo es neutral y dialogará con ambas partes para lograr un acuerdo,
                  pudiendo finalmente sugerir y/o imponer una solución al conflicto.
                </p>
                <p className={styles.text}>
                  Enlace a la plataforma de resolución de litigios:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ff6b35', fontWeight: 600 }}
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Contacto</h2>
                <p className={styles.text}>
                  Para cualquier consulta, sugerencia o reclamación relacionada con el presente
                  Aviso Legal, puedes ponerte en contacto con nosotros a través de:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Correo electrónico:</strong> legal@portesillo.com
                  </li>
                  <li className={styles.listItem}>
                    <strong>Teléfono:</strong> +34 XXX XXX XXX
                  </li>
                  <li className={styles.listItem}>
                    <strong>Dirección postal:</strong> Calle Principal, 123, 28001 Madrid, España
                  </li>
                  <li className={styles.listItem}>
                    <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00
                  </li>
                </ul>
              </div>

              <div className={styles.contactBox}>
                <h3>Documentación Legal Completa</h3>
                <p>Consulta también nuestros otros documentos legales:</p>
                <p>
                  📋 <a href="/terms">Términos y Condiciones</a> |{' '}
                  🔒 <a href="/privacy">Política de Privacidad</a> |{' '}
                  🍪 <a href="/cookies">Política de Cookies</a>
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                  Para consultas legales: <a href="mailto:legal@portesillo.com">legal@portesillo.com</a>
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
