const navigation = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#cita', label: 'Visítanos' },
] as const

const services = [
  {
    title: 'Arreglos',
    description:
      'Bajos, cinturas, mangas y cierres. La prenda vuelve a sentar como debe.',
  },
  {
    title: 'A medida',
    description:
      'Vestidos, faldas y piezas de ocasión cortadas y cosidas para ti.',
  },
  {
    title: 'Ajustes finos',
    description:
      'Pruebas, retoques y pequeños cambios que transforman el resultado.',
  },
] as const

const work = [
  {
    src: '/images/suit.webp',
    srcSet:
      '/images/suit-480.webp 480w, /images/suit-800.webp 800w, /images/suit.webp 1000w',
    sizes: '(max-width: 900px) calc(100vw - 48px), 55vw',
    width: 1000,
    height: 1000,
    alt: 'Traje azul confeccionado a medida',
    title: 'Traje a medida',
    type: 'A medida',
  },
  {
    src: '/images/sewing.webp',
    srcSet:
      '/images/sewing-480.webp 480w, /images/sewing-800.webp 800w, /images/sewing.webp 900w',
    sizes: '(max-width: 900px) calc(100vw - 48px), 35vw',
    width: 900,
    height: 600,
    alt: 'Detalle de una costura precisa',
    title: 'Detalle de costura',
    type: 'Arreglo',
  },
  {
    src: '/images/dress-700.webp',
    srcSet:
      '/images/dress-480.webp 480w, /images/dress-700.webp 700w',
    sizes: '(max-width: 900px) calc(100vw - 48px), 35vw',
    width: 700,
    height: 841,
    alt: 'Vestido de tarde ajustado en el taller',
    title: 'Vestido de tarde',
    type: 'A medida',
  },
] as const

function Wordmark() {
  return (
    <span className="wordmark" aria-label="D'accords Modistería">
      <span className="wordmark__name">D&apos;ACCORDS</span>
      <span className="wordmark__descriptor">Modistería</span>
    </span>
  )
}

function MeasuringTape() {
  return (
    <div className="measuring-tape" aria-hidden="true">
      <img
        src="/images/measuring-tape.png"
        alt=""
        width={1260}
        height={80}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <header className="site-header">
        <a href="#top" className="site-header__brand">
          <Wordmark />
        </a>
        <nav className="site-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary>Menú</summary>
          <nav className="mobile-nav__links" aria-label="Navegación móvil">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
        <a className="button button--light site-header__cta" href="#cita">
          Pedir cita
        </a>
      </header>

      <main id="contenido" tabIndex={-1}>
        <section id="top" className="hero">
          <div className="hero__copy">
            <div className="hero__signature">
              <strong>Doina</strong>
              <span>Modista en Zaragoza</span>
            </div>
            <div className="hero__body">
              <h1>Arreglos y ropa a medida</h1>
              <p>
                Ajustes precisos y piezas hechas con calma en el taller de
                Doina en Zaragoza.
              </p>
              <div className="hero__actions">
                <a className="button button--dark" href="#cita">
                  Pedir cita
                </a>
                <a className="text-link" href="#trabajo">
                  Ver trabajo
                </a>
              </div>
            </div>
          </div>
          <figure className="hero__media">
            <div className="hero__image-frame">
              <img
                src="/images/hero.webp"
                srcSet="/images/hero-720.webp 720w, /images/hero-900.webp 900w, /images/hero.webp 1100w"
                sizes="(max-width: 900px) 100vw, 56vw"
                alt="Camisa azul sobre una silla roja en el taller"
                width={1100}
                height={1650}
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Doina, modista</span>
              <span>Zaragoza</span>
            </figcaption>
          </figure>
        </section>

        <section id="servicios" className="section">
          <div className="section__intro">
            <h2>Lo que hago con cuidado</h2>
            <p>
              Cada prenda tiene su historia. Mi trabajo es hacer que vuelva a
              sentirse bien puesta.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span className="service-row__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trabajo" className="work section section--dark">
          <div className="section__intro">
            <h2>Algunas piezas</h2>
            <p>
              Una selección de arreglos, pruebas y prendas confeccionadas en el
              taller.
            </p>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <figure
                className={`work-piece work-piece--${index + 1}`}
                key={item.title}
              >
                <div className="work-piece__image">
                  <img
                    src={item.src}
                    srcSet={item.srcSet}
                    sizes={item.sizes}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>{item.title}</span>
                  <span>{item.type}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="cita" className="contact">
          <div className="contact__portrait">
            <img
              src="/images/doina-line-art.webp"
              srcSet="/images/doina-line-art-400.webp 400w, /images/doina-line-art-480.webp 480w, /images/doina-line-art.webp 640w"
              sizes="(max-width: 900px) 250px, 320px"
              alt="Retrato lineal de Doina"
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Doina</strong>
              <span>Modista</span>
            </div>
          </div>
          <div className="contact__details">
            <h2>Visítanos</h2>
            <p className="contact__lead">
              Una visita basta para medir, ver telas y acordar plazos.
            </p>
            <dl className="contact-list">
              <div>
                <dt>Tel</dt>
                <dd>
                  <a href="tel:+34642579531">+34 642 579 531</a>
                </dd>
              </div>
              <div>
                <dt>Taller</dt>
                <dd>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C%2F%20del%20Porvenir%2C%2015%2C%2050006%20Zaragoza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    C/ del Porvenir, 15
                    <br />
                    50006 Zaragoza
                    <span className="sr-only">
                      {' '}
                      (se abre en una pestaña nueva)
                    </span>
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hola@d-accords.com">hola@d-accords.com</a>
                </dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>Martes a sábado, con cita previa</dd>
              </div>
            </dl>
            <a
              className="button button--light contact__cta"
              href="mailto:hola@d-accords.com?subject=Cita%20en%20D%27accords"
            >
              Pedir cita
            </a>
          </div>
        </section>

        <MeasuringTape />
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>Hecho con hilo, aguja y paciencia.</p>
        <p>© 2026, Zaragoza</p>
      </footer>
    </div>
  )
}
