// Variation 1 — "Hacienda" — clásico cálido, serif grande, full-bleed hero,
// paleta arcilla / crema / chocolate.

function VarHacienda() {
  const c = {
    cream: '#f4ecdc',
    paper: '#ebe0c8',
    ink:   '#2b1d12',
    clay:  '#b8624a',
    moss:  '#5a6b3e',
    line:  'rgba(43,29,18,0.18)',
  };
  const serif = '"Cormorant Garamond", "EB Garamond", Georgia, serif';
  const sans  = '"Work Sans", system-ui, sans-serif';
  const mono  = 'ui-monospace, "SF Mono", Menlo, monospace';

  const Section = ({ children, bg = c.cream, pad = '90px 64px' }) => (
    <section style={{ background: bg, padding: pad, color: c.ink, position: 'relative' }}>
      {children}
    </section>
  );

  const Eyebrow = ({ children }) => (
    <div style={{
      fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
      color: c.clay, marginBottom: 18,
    }}>{children}</div>
  );

  return (
    <div style={{
      width: 1280, fontFamily: sans, color: c.ink, background: c.cream,
      backgroundImage: PAPER_NOISE, backgroundBlendMode: 'multiply',
    }}>
      {/* NAV */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 48px', borderBottom: `1px solid ${c.line}`,
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, color: c.cream,
      }}>
        <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 22, letterSpacing: 0.5 }}>
          La Casa de Sammy
        </div>
        <nav style={{ display: 'flex', gap: 32, fontFamily: mono, fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase' }}>
          <span>Sobre&nbsp;Nosotros</span><span>Habitaciones</span><span>Galería</span><span>Reservas</span><span>Contacto</span>
        </nav>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontFamily: mono, fontSize: 11, letterSpacing: 1.5 }}>
          <span style={{ opacity: 1, borderBottom: `1px solid currentColor` }}>ES</span>
          <span style={{ opacity: 0.55 }}>EN</span>
        </div>
      </header>

      {/* HERO */}
      <div style={{ position: 'relative', height: 760 }}>
        <ImagePlaceholder label="hero · valle al amanecer · cerro mandango" tone="deep" ratio="auto"
          style={{ position: 'absolute', inset: 0, height: '100%' }} />
        <div style={{
          position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,14,8,0.55) 0%, rgba(20,14,8,0.15) 40%, rgba(20,14,8,0.6) 100%)',
        }} />
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 64px 80px', color: c.cream }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20, opacity: 0.85 }}>
            Vilcabamba · Loja · Ecuador
          </div>
          <h1 style={{
            fontFamily: serif, fontWeight: 400, fontSize: 108, lineHeight: 0.95, margin: 0,
            letterSpacing: -1, maxWidth: 980, textWrap: 'balance',
          }}>
            Una casa de campo en el<br/>
            <em style={{ color: '#e9b87a' }}>Valle de la Longevidad.</em>
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56 }}>
            <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, maxWidth: 460, margin: 0, opacity: 0.95 }}>
              Despierta con el canto del río Chamba. Camina entre cafetales. Cena bajo un cielo lleno de estrellas con tu familia.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <button style={{
                fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
                background: c.clay, color: c.cream, border: 'none', padding: '18px 28px', cursor: 'pointer',
              }}>Reservar estadía →</button>
              <button style={{
                fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
                background: 'transparent', color: c.cream, border: `1px solid ${c.cream}`, padding: '18px 28px', cursor: 'pointer',
              }}>Ver la casa</button>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO / SOBRE NOSOTROS */}
      <Section pad="120px 64px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Eyebrow>— Sobre la casa</Eyebrow>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
              Construida en piedra, madera y silencio.
            </h2>
          </div>
          <div style={{ paddingTop: 12 }}>
            <p style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.55, margin: '0 0 22px', textWrap: 'pretty' }}>
              La Casa de Sammy es un refugio familiar en el corazón de Vilcabamba, el legendario Valle de la Longevidad. Cinco habitaciones, una cocina abierta, hamacas entre los árboles y un huerto del que sale lo que comerás esa noche.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: 'rgba(43,29,18,0.75)', maxWidth: 560 }}>
              Diseñada para grupos familiares que quieren bajar el ritmo. Sin pantallas en las paredes, sin prisas en la mesa. Solo el canto de los pájaros del wilco, el rumor del río y el cielo limpio del sur del Ecuador.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 40, paddingTop: 28, borderTop: `1px solid ${c.line}` }}>
              {[['1.500m', 'Altitud'], ['18-22°C', 'Todo el año'], ['5', 'Habitaciones'], ['12', 'Huéspedes']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: serif, fontSize: 36, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: c.clay, marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* GALERÍA TIPO REVISTA */}
      <Section pad="40px 64px 100px" bg={c.paper}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, marginBottom: 24 }}>
          <ImagePlaceholder label="sala principal · chimenea de barro" tone="warm" ratio="16/10" />
          <div style={{ display: 'grid', gap: 24 }}>
            <ImagePlaceholder label="dormitorio · cama de madera tallada" tone="cream" ratio="4/3" />
            <ImagePlaceholder label="patio interior · plantas" tone="moss" ratio="4/3" />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <ImagePlaceholder label="cocina con desayuno" tone="warm" ratio="1/1" />
          <ImagePlaceholder label="baño · azulejo artesanal" tone="cream" ratio="1/1" />
          <ImagePlaceholder label="hamacas en el jardín" tone="moss" ratio="1/1" />
        </div>
      </Section>

      {/* HABITACIONES */}
      <Section pad="120px 64px">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <Eyebrow>— Habitaciones</Eyebrow>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>Cinco refugios, una sola casa.</h2>
          </div>
          <a style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: c.clay, borderBottom: `1px solid ${c.clay}`, paddingBottom: 4 }}>
            Ver todas →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { name: 'Mandango', cap: 'Suite familiar · 4 personas', price: '$120', desc: 'Vista directa al cerro, balcón privado, chimenea.' },
            { name: 'Wilco',    cap: 'Doble matrimonial · 2',      price: '$85',  desc: 'Bajo la copa del wilco, terraza con hamaca.' },
            { name: 'Chamba',   cap: 'Habitación familiar · 3',    price: '$95',  desc: 'A orillas del jardín, baño con tina de cobre.' },
          ].map(r => (
            <div key={r.name}>
              <ImagePlaceholder label={`hab. ${r.name.toLowerCase()}`} tone="warm" ratio="4/5" />
              <div style={{ paddingTop: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 30, margin: 0 }}>{r.name}</h3>
                  <div style={{ fontFamily: mono, fontSize: 12, color: c.clay }}>{r.price}/noche</div>
                </div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: 'rgba(43,29,18,0.55)', marginTop: 6 }}>
                  {r.cap}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 14, color: 'rgba(43,29,18,0.78)' }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCIAS */}
      <Section pad="120px 64px" bg={c.ink}>
        <div style={{ color: c.cream }}>
          <Eyebrow>— Para hacer</Eyebrow>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 64, lineHeight: 1, margin: '0 0 64px', maxWidth: 800, color: c.cream }}>
            El valle es tu segunda casa.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              ['01', 'Cabalgatas', 'Rutas guiadas al cerro Mandango y la cascada El Palto.'],
              ['02', 'Senderismo', 'Reserva Rumi Wilco, doce senderos entre bosque nublado.'],
              ['03', 'Aguas termales', 'Pozos minerales del valle, cargados de magnesio y hierro.'],
              ['04', 'Mesa larga', 'Cenas familiares con productos del huerto y café lojano.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ borderTop: `1px solid rgba(244,236,220,0.25)`, paddingTop: 18 }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: '#e9b87a', marginBottom: 14 }}>{n}</div>
                <h4 style={{ fontFamily: serif, fontWeight: 400, fontSize: 28, margin: '0 0 10px' }}>{t}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.75, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIO */}
      <Section pad="140px 64px">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow>— De nuestros huéspedes</Eyebrow>
          <blockquote style={{
            fontFamily: serif, fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.25, margin: 0, textWrap: 'balance',
          }}>
            "Llegamos por una semana, nos quedamos tres. Sammy nos recibió como familia, los niños no quisieron volver a Quito."
          </blockquote>
          <div style={{ marginTop: 32, fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: c.clay }}>
            Familia Vásquez · Quito · Marzo 2026
          </div>
        </div>
      </Section>

      {/* RESERVA / CTA */}
      <Section pad="0" bg={c.clay}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <ImagePlaceholder label="atardecer en el patio" tone="clay" ratio="1/1" />
          <div style={{ padding: '90px 64px', color: c.cream, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Eyebrow><span style={{ color: '#fce4c5' }}>— Reserva tu estadía</span></Eyebrow>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 56, lineHeight: 1, margin: '0 0 24px', color: c.cream }}>
              La casa te espera.
            </h2>
            <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 20, lineHeight: 1.5, opacity: 0.95, margin: '0 0 36px', maxWidth: 440 }}>
              Reservas mínimas de dos noches. Tarifas familiares para grupos de más de seis. Niños siempre bienvenidos.
            </p>
            <div style={{ display: 'grid', gap: 12, maxWidth: 380 }}>
              {['Llegada', 'Salida', 'Huéspedes'].map(l => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 18px', background: 'rgba(255,255,255,0.12)', border: `1px solid rgba(255,255,255,0.3)` }}>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase' }}>{l}</span>
                  <span style={{ fontFamily: serif, fontSize: 15, opacity: 0.7 }}>—</span>
                </div>
              ))}
              <button style={{ marginTop: 8, padding: '20px', background: c.cream, color: c.clay, border: 'none', fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', cursor: 'pointer' }}>
                Consultar disponibilidad →
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ background: c.ink, color: c.cream, padding: '60px 64px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 26, marginBottom: 12 }}>La Casa de Sammy</div>
            <div style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.7, maxWidth: 280 }}>
              Vilcabamba · Loja · Ecuador<br/>El Valle de la Longevidad
            </div>
          </div>
          {[['Visítanos', ['Habitaciones', 'Experiencias', 'Cómo llegar', 'Galería']],
            ['Reservar', ['Disponibilidad', 'Tarifas', 'Políticas', 'Contacto']],
            ['Síguenos', ['Instagram', 'Facebook', 'WhatsApp', 'Email']]].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#e9b87a', marginBottom: 14 }}>{h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(i => <li key={i} style={{ fontSize: 13, opacity: 0.8 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid rgba(244,236,220,0.15)', fontFamily: mono, fontSize: 10, letterSpacing: 1.5, opacity: 0.55 }}>
          <span>© 2026 La Casa de Sammy · Hecho con cariño en el sur del Ecuador</span>
          <span>Rincón Mágico del Ecuador</span>
        </div>
      </footer>
    </div>
  );
}

window.VarHacienda = VarHacienda;
