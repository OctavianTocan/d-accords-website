export default function App() {
  return (
    <div className="[font-synthesis:none] flex min-h-screen flex-col overflow-x-hidden bg-white antialiased text-xs/4">
      {/* Nav */}
      <header className="flex w-full shrink-0 items-center justify-between bg-white px-6 py-7 md:px-16">
        <a href="#top" className="flex items-baseline gap-2.5 no-underline">
          <span className="inline-block font-['Cormorant_Garamond',serif] text-[28px]/8 font-medium tracking-[-0.02em] text-[#1A1C1B]">
            Doina
          </span>
          <span className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[11px]/3.5 tracking-[0.16em] text-[#8A918C] uppercase">
            D&apos;accords
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#servicios"
            className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 tracking-[0.02em] text-[#2C2F2E] no-underline"
          >
            Servicios
          </a>
          <a
            href="#trabajo"
            className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 tracking-[0.02em] text-[#2C2F2E] no-underline"
          >
            Trabajo
          </a>
          <a
            href="#cita"
            className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 tracking-[0.02em] text-[#2C2F2E] no-underline"
          >
            Sobre mí
          </a>
        </nav>
        <a
          href="#cita"
          className="flex items-center justify-center bg-[#1A1C1B] px-5.5 py-3 no-underline"
        >
          <span className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/3.5 font-medium tracking-[0.08em] text-white uppercase">
            Pedir cita
          </span>
        </a>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="flex w-full shrink-0 flex-col overflow-clip md:h-195 md:flex-row"
      >
        <div className="flex w-full shrink-0 flex-col justify-end gap-7 bg-[#F4F1EC] px-6 pt-16 pb-18 md:w-140 md:pr-18 md:pl-16">
          <div className="flex flex-col gap-4.5">
            <h1 className="font-['Cormorant_Garamond',serif] text-6xl/16 tracking-[-0.03em] text-[#1A1C1B] md:text-8xl/22">
              Doina
            </h1>
            <p className="max-w-95 font-['Cormorant_Garamond',serif] text-[24px]/8 text-[#2C2F2E] italic md:text-[28px]/9">
              Arreglos y ropa a medida, con la calma de un buen taller.
            </p>
            <p className="max-w-90 font-['DM_Sans',system-ui,sans-serif] text-[15px]/6 text-[#6B706C]">
              Ajustes precisos, vestidos de ocasión y piezas hechas a tu medida.
              Pide cita y ven a conocerme en Zaragoza.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-5">
            <a
              href="#cita"
              className="flex items-center justify-center bg-[#6B7F73] px-7 py-4 no-underline"
            >
              <span className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 font-medium tracking-[0.08em] text-white uppercase">
                Pedir cita
              </span>
            </a>
            <a
              href="#trabajo"
              className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 tracking-[0.02em] text-[#2C2F2E] underline-offset-4 [text-decoration:underline_1px]"
            >
              Ver trabajo
            </a>
          </div>
        </div>
        <div className="flex h-120 grow basis-[0%] overflow-clip bg-[#2C2F2E] md:h-195">
          <div
            className="size-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(/images/hero.jpg)',
            }}
            role="img"
            aria-label="Camisa azul sobre silla roja"
          />
        </div>
      </section>

      {/* Services */}
      <section
        id="servicios"
        className="flex w-full shrink-0 flex-col gap-14 bg-white px-6 pt-24 pb-20 md:px-16"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-130 flex-col gap-3">
            <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[11px]/3.5 font-medium tracking-[0.16em] text-[#6B7F73] uppercase">
              Servicios
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl/11 tracking-[-0.02em] text-[#1A1C1B] md:text-5xl/13">
              Lo que hago con cuidado
            </h2>
          </div>
          <p className="flex max-w-[320px] flex-wrap font-['DM_Sans',system-ui,sans-serif] text-[15px]/6 text-[#6B706C] md:justify-end md:text-right">
            Cada prenda tiene su historia. Yo me encargo de que vuelva a sentirse
            bien puesta.
          </p>
        </div>
        <div className="flex w-full flex-col border-t border-[#D8DCD8] md:flex-row">
          <div className="flex grow basis-[0%] flex-col gap-4 border-b border-[#D8DCD8] pt-10 pr-0 pb-8 md:border-r md:border-b-0 md:pr-10 md:pb-2">
            <p className="inline-block font-['Cormorant_Garamond',serif] text-[32px]/9 font-medium text-[#1A1C1B]">
              01
            </p>
            <h3 className="font-['Cormorant_Garamond',serif] text-[28px]/8.5 text-[#1A1C1B]">
              Arreglos
            </h3>
            <p className="max-w-70 font-['DM_Sans',system-ui,sans-serif] text-sm/5.5 text-[#6B706C]">
              Bajos, cinturas, mangas, cierres. Dejo la prenda como si siempre
              hubiera sido tuya.
            </p>
          </div>
          <div className="flex grow basis-[0%] flex-col gap-4 border-b border-[#D8DCD8] px-0 pt-10 pb-8 md:border-r md:border-b-0 md:px-10 md:pb-2">
            <p className="inline-block font-['Cormorant_Garamond',serif] text-[32px]/9 font-medium text-[#1A1C1B]">
              02
            </p>
            <h3 className="font-['Cormorant_Garamond',serif] text-[28px]/8.5 text-[#1A1C1B]">
              A medida
            </h3>
            <p className="max-w-70 font-['DM_Sans',system-ui,sans-serif] text-sm/5.5 text-[#6B706C]">
              Vestidos, faldas y piezas de ocasión cortadas y cosidas para ti,
              desde el patrón.
            </p>
          </div>
          <div className="flex grow basis-[0%] flex-col gap-4 pt-10 pb-2 pl-0 md:pl-10">
            <p className="inline-block font-['Cormorant_Garamond',serif] text-[32px]/9 font-medium text-[#1A1C1B]">
              03
            </p>
            <h3 className="font-['Cormorant_Garamond',serif] text-[28px]/8.5 text-[#1A1C1B]">
              Ajustes finos
            </h3>
            <p className="max-w-70 font-['DM_Sans',system-ui,sans-serif] text-sm/5.5 text-[#6B706C]">
              Retoques de última hora, pruebas y pequeños cambios que marcan la
              diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="trabajo"
        className="flex w-full shrink-0 flex-col gap-12 bg-[#F4F1EC] px-6 pt-10 pb-24 md:px-16"
      >
        <div className="flex items-baseline justify-between">
          <div className="flex flex-col gap-2.5">
            <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[11px]/3.5 font-medium tracking-[0.16em] text-[#6B7F73] uppercase">
              Trabajo reciente
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl/11 tracking-[-0.02em] text-[#1A1C1B] md:text-5xl/13">
              Algunas piezas
            </h2>
          </div>
          <a
            href="#cita"
            className="hidden font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 tracking-[0.02em] text-[#2C2F2E] underline-offset-4 [text-decoration:underline_1px] md:inline-block"
          >
            Ver más
          </a>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex grow-[1.15] basis-[0%] flex-col gap-3.5">
            <div
              className="h-80 w-full shrink-0 bg-cover bg-center md:h-140"
              style={{ backgroundImage: 'url(/images/suit.jpg)' }}
              role="img"
              aria-label="Traje a medida"
            />
            <div className="flex items-baseline justify-between">
              <p className="inline-block font-['Cormorant_Garamond',serif] text-xl/6 text-[#1A1C1B]">
                Traje a medida
              </p>
              <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/4 tracking-[0.08em] text-[#8A918C] uppercase">
                A medida
              </p>
            </div>
          </div>
          <div className="flex grow-[0.85] basis-[0%] flex-col gap-5">
            <div className="flex grow basis-[0%] flex-col gap-3.5">
              <div
                className="h-56 w-full shrink-0 bg-cover bg-center md:h-65"
                style={{ backgroundImage: 'url(/images/sewing.jpg)' }}
                role="img"
                aria-label="Detalle de costura"
              />
              <div className="flex items-baseline justify-between">
                <p className="inline-block font-['Cormorant_Garamond',serif] text-xl/6 text-[#1A1C1B]">
                  Detalle de costura
                </p>
                <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/4 tracking-[0.08em] text-[#8A918C] uppercase">
                  Arreglo
                </p>
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col gap-3.5">
              <div
                className="h-56 w-full shrink-0 bg-cover bg-center md:h-65"
                style={{ backgroundImage: 'url(/images/dress.jpg)' }}
                role="img"
                aria-label="Vestido de tarde"
              />
              <div className="flex items-baseline justify-between">
                <p className="inline-block font-['Cormorant_Garamond',serif] text-xl/6 text-[#1A1C1B]">
                  Vestido de tarde
                </p>
                <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/4 tracking-[0.08em] text-[#8A918C] uppercase">
                  A medida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="cita" className="flex w-full shrink-0 flex-col bg-[#1A1C1B] md:flex-row">
        <div className="flex w-full shrink-0 flex-col justify-center gap-7 px-6 py-20 md:w-160 md:px-18 md:py-24">
          <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[11px]/3.5 font-medium tracking-[0.16em] text-[#6B7F73] uppercase">
            Cita
          </p>
          <h2 className="whitespace-pre-wrap font-['Cormorant_Garamond',serif] text-[40px]/12 tracking-[-0.02em] text-white md:text-[56px]/15">
            Ven al taller.
            <br />
            Hablamos de tu prenda.
          </h2>
          <p className="max-w-100 font-['DM_Sans',system-ui,sans-serif] text-[15px]/6 text-[#FFFFFFAD]">
            Una visita corta basta para medir, ver telas y acordar plazos. Sin
            prisas, con claridad.
          </p>
          <div className="mt-2 flex flex-col gap-5">
            <a
              href="mailto:hola@d-accords.com"
              className="flex items-center justify-center self-start bg-[#6B7F73] px-7 py-4 no-underline"
            >
              <span className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[13px]/4 font-medium tracking-[0.08em] text-white uppercase">
                Pedir cita
              </span>
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hola@d-accords.com"
                className="inline-block font-['DM_Sans',system-ui,sans-serif] text-sm/5 text-[#FFFFFFE0] no-underline"
              >
                hola@d-accords.com
              </a>
              <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-sm/5 text-[#FFFFFFE0]">
                Zaragoza
              </p>
              <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-sm/5 text-[#FFFFFF8C]">
                Martes–sábado · con cita previa
              </p>
            </div>
          </div>
        </div>
        <div className="flex min-h-80 grow basis-[0%] overflow-clip md:min-h-130">
          <div
            className="size-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hangers.jpg)' }}
            role="img"
            aria-label="Perchas de madera en el taller"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="flex w-full shrink-0 flex-col items-start justify-between gap-4 border-t border-[#D8DCD8] bg-white px-6 py-8 md:flex-row md:items-center md:px-16">
        <div className="flex items-baseline gap-2.5">
          <span className="inline-block font-['Cormorant_Garamond',serif] text-[22px]/6.5 font-medium text-[#1A1C1B]">
            Doina
          </span>
          <span className="inline-block font-['DM_Sans',system-ui,sans-serif] text-[11px]/3.5 tracking-[0.14em] text-[#8A918C] uppercase">
            D&apos;accords
          </span>
        </div>
        <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/4 text-[#8A918C]">
          Hecho con hilo, aguja y paciencia. · Zaragoza
        </p>
        <p className="inline-block font-['DM_Sans',system-ui,sans-serif] text-xs/4 text-[#8A918C]">
          © 2026
        </p>
      </footer>
    </div>
  )
}
