// Variation 2 — "Cuaderno de viaje" — editorial revista, collage, manuscritos,
// más texturas, sellos, tipografía mixta.

function VarCuaderno() {
  const c = {
    paper:  '#ede4ce',
    deep:   '#1f1a14',
    ink:    '#2c241a',
    accent: '#7a3b22',  // sello tinta
    moss:   '#3f5236',
    gold:   '#a8843a',
    line:   'rgba(44,36,26,0.25)',
  };
  const display = '"DM Serif Display", "Playfair Display", Georgia, serif';
  const hand    = '"Caveat", "Kalam", cursive';
  const mono    = 'ui-monospace, "SF Mono", Menlo, monospace';
  const sans    = '"Work Sans", system-ui, sans-serif';

  // Sello circular SVG
  const Stamp = ({ children, color = c.accent, size = 110, rotate = -8, style = {} }) => (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      border: `2px solid ${color}`, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
      textAlign: 'center', lineHeight: 1.3, padding: 14,
      transform: `rotate(${rotate}deg)`, opacity: 0.85, ...style,
    }}>
      {children}
    </div>
  );

  const Tape = ({ left = 20, top = -10, width = 120, rotate = -3, color = '#d6b87a' }) => (
    <div style={{
      position: 'absolute', left, top, width, height: 28,
      background: color, opacity: 0.6,
      transform: `rotate(${rotate}deg)`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }} />
  );

  return (
    <div style={{
      width: 1280, fontFamily: sans, color: c.ink, background: c.paper,
      backgroundImage: PAPER_NOISE, backgroundBlendMode: 'multiply',
    }}>
      {/* NAV */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 56px', borderBottom: `1px solid ${c.line}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <span style={{ fontFamily: hand, fontSize: 32, color: c.accent, transform: 'rotate(-2deg)', display: 'inline-block' }}>La Casa de</span>
          <span style={{ fontFamily: display, fontSize: 30, letterSpacing: -0.5 }}>Sammy</span>
        </div>
        <nav style={{ display: 'flex', gap: 28, fontFamily: mono, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          <span>· Bitácora</span><span>· Cuartos</span><span>· Mesa</span><span>· Mapa</span><span>· Reservar</span>
        </nav>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 1.5 }}>
          <span style={{ fontWeight: 600 }}>ES</span> / <span style={{ opacity: 0.5 }}>EN</span>
        </div>
      </header>

      {/* HERO — collage estilo cuaderno */}
      <div style={{ position: 'relative', padding: '56px 56px 72px', minHeight: 720 }}>
        {/* Margen lateral con notas */}
        <div style={{
          position: 'absolute', left: 56, top: 56, bottom: 72, width: 32,
          borderRight: `1px solid ${c.accent}`, opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', left: 14, top: 80, fontFamily: hand, fontSize: 18, color: c.accent,
          transform: 'rotate(-90deg)', transformOrigin: 'left top', whiteSpace: 'nowrap',
        }}>
          Día 1 — Vilcabamba, 1.500 m sobre el mar
        </div>

        <div style={{ marginLeft: 80, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: c.accent, marginBottom: 18 }}>
              S-04°15'30"  W-79°13'10"  ·  ENTRADA N° 01
            </div>
            <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: 96, lineHeight: 0.95, margin: 0, letterSpacing: -1.5, textWrap: 'balance' }}>
              Cuaderno
              <br/>
              <em style={{ color: c.accent }}>de la casa</em>
              <br/>
              de Sammy.
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 28 }}>
              <span style={{ fontFamily: hand, fontSize: 28, color: c.accent, transform: 'rotate(-3deg)', display: 'inline-block' }}>
                — un refugio para familias en el Valle Sagrado
              </span>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: '36px 0 0', color: 'rgba(44,36,26,0.85)' }}>
              Esta es la bitácora de una casa que lleva años recibiendo viajeros entre los cerros del sur del Ecuador. Aquí guardamos las recetas, los senderos, los nombres de los pájaros que pasan por el huerto, y las habitaciones que esperan tu llegada.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
              <button style={{
                background: c.deep, color: c.paper, border: 'none', padding: '18px 26px',
                fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer',
              }}>Pedir tu cuarto</button>
              <button style={{
                background: 'transparent', color: c.deep, border: `1px solid ${c.deep}`, padding: '18px 26px',
                fontFamily: mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer',
              }}>Hojear la bitácora</button>
            </div>
          </div>

          {/* Collage de fotos */}
          <div style={{ position: 'relative', height: 580 }}>
            <div style={{ position: 'absolute', top: 0, right: 20, width: 320, transform: 'rotate(2deg)', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }}>
              <Tape left={120} top={-12} width={90} rotate={-4} />
              <ImagePlaceholder label="vista del valle desde el porche" tone="warm" ratio="4/5" />
              <div style={{ background: '#f6efdc', padding: '8px 12px', fontFamily: hand, fontSize: 16, color: c.ink }}>
                amaneció con neblina en el Mandango.
              </div>
            </div>
            <div style={{ position: 'absolute', top: 220, left: 0, width: 240, transform: 'rotate(-4deg)', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}>
              <Tape left={20} top={-10} width={80} rotate={6} color="#a3c0a0" />
              <ImagePlaceholder label="café de la mañana" tone="cream" ratio="1/1" />
            </div>
            <Stamp size={120} rotate={-12} style={{ position: 'absolute', bottom: 20, right: 0 }}>
              Rincón Mágico<br/>★ Ecuador ★<br/>2023
            </Stamp>
          </div>
        </div>
      </div>

      {/* SOBRE NOSOTROS — formato carta */}
      <section style={{ padding: '80px 56px', background: '#e3d8bc', position: 'relative' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: c.accent, marginBottom: 14, textTransform: 'uppercase' }}>
              · Capítulo II
            </div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 52, lineHeight: 1, margin: 0, color: c.deep }}>
              ¿Quiénes somos?
            </h2>
            <div style={{ marginTop: 24, fontFamily: hand, fontSize: 22, color: c.accent, lineHeight: 1.4, transform: 'rotate(-1deg)' }}>
              Una familia abriendo su casa.
            </div>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 18px' }}>
              Mi abuela Sammy vivió 97 años en este valle. Sembraba todo lo que comía, hablaba con sus gallinas, y recibía a cualquiera que tocara su puerta con un café recién pasado y un plato de tigrillo.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: '0 0 18px' }}>
              Hoy la casa sigue de pie, ampliada en piedra y madera, con cinco cuartos para grupos familiares que quieren respirar el mismo aire de Mandango y comer del mismo huerto.
            </p>
            <div style={{ marginTop: 32, fontFamily: hand, fontSize: 26, color: c.accent, transform: 'rotate(-2deg)', display: 'inline-block' }}>
              — la familia ✦
            </div>
          </div>
        </div>
      </section>

      {/* HABITACIONES — fichas tipo cuaderno */}
      <section style={{ padding: '100px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: c.accent, textTransform: 'uppercase' }}>· Capítulo III</div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 64, lineHeight: 1, margin: '8px 0 0' }}>Las habitaciones</h2>
          </div>
          <div style={{ fontFamily: hand, fontSize: 22, color: c.accent, transform: 'rotate(-2deg)' }}>cinco cuartos, todos distintos</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {[
            { n: 'I',   name: 'Mandango', desc: 'Suite con vista al cerro y chimenea de barro.', cap: '4 personas', price: '$120' },
            { n: 'II',  name: 'Wilco',    desc: 'Doble bajo el árbol sagrado, terraza y hamaca.', cap: '2 personas', price: '$85' },
            { n: 'III', name: 'Chamba',   desc: 'Familiar a orillas del jardín, tina de cobre.',  cap: '3 personas', price: '$95' },
          ].map(r => (
            <div key={r.n} style={{ background: '#f4ecd4', padding: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'relative' }}>
              <Tape left={140} top={-12} width={80} rotate={-2} />
              <ImagePlaceholder label={`cuarto ${r.name.toLowerCase()}`} tone="warm" ratio="4/3" />
              <div style={{ padding: '18px 4px 4px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: display, fontSize: 18, color: c.accent }}>{r.n}.</span>
                  <h3 style={{ fontFamily: display, fontWeight: 400, fontSize: 28, margin: 0 }}>{r.name}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: '10px 0 14px', color: 'rgba(44,36,26,0.8)' }}>{r.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px dashed ${c.line}`, paddingTop: 10, fontFamily: mono, fontSize: 11, letterSpacing: 1 }}>
                  <span style={{ color: 'rgba(44,36,26,0.6)' }}>{r.cap}</span>
                  <span style={{ color: c.accent, fontWeight: 600 }}>{r.price}/noche</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MESA / EXPERIENCIAS — lista tipo recetario */}
      <section style={{ padding: '100px 56px', background: c.deep, color: c.paper }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: c.gold, textTransform: 'uppercase', marginBottom: 14 }}>
              · Capítulo IV
            </div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 72, lineHeight: 0.95, margin: 0, letterSpacing: -1 }}>
              Lo que hacemos<br/><em style={{ color: c.gold }}>en el valle.</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 28, opacity: 0.8, maxWidth: 440 }}>
              Cada mañana hay una propuesta nueva en la pizarra del comedor. Te apuntas si quieres, o te quedas leyendo en la hamaca.
            </p>
          </div>
          <div>
            {[
              ['Lunes',    'Cabalgata al Cerro Mandango', '4 horas · guía local'],
              ['Martes',   'Caminata Reserva Rumi Wilco', '3 horas · senderos guiados'],
              ['Miércoles','Mesa larga en el huerto',     'Cena familiar · 7pm'],
              ['Jueves',   'Cascada El Palto',            'Excursión de día · pícnic'],
              ['Viernes',  'Café de Loja con la familia', 'Tueste artesanal · 9am'],
              ['Sábado',   'Aguas termales del valle',    'Salida en grupo · medio día'],
            ].map(([d, t, sub]) => (
              <div key={d} style={{ display: 'grid', gridTemplateColumns: '110px 1fr auto', gap: 18, padding: '18px 0', borderBottom: '1px solid rgba(244,236,220,0.18)', alignItems: 'baseline' }}>
                <span style={{ fontFamily: hand, fontSize: 22, color: c.gold }}>{d}</span>
                <div>
                  <div style={{ fontFamily: display, fontSize: 22 }}>{t}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 1, opacity: 0.6, marginTop: 4 }}>{sub}</div>
                </div>
                <span style={{ fontFamily: mono, fontSize: 11, color: c.gold, opacity: 0.7 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑA */}
      <section style={{ padding: '120px 56px', background: c.paper, position: 'relative' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: -20, top: -40, fontFamily: display, fontSize: 180, color: c.accent, opacity: 0.18, lineHeight: 1 }}>"</div>
          <p style={{ fontFamily: display, fontStyle: 'italic', fontSize: 40, lineHeight: 1.3, margin: 0, position: 'relative', textWrap: 'balance' }}>
            Un sitio donde el tiempo se estira. Llegamos cansados de la ciudad y nos fuimos hablándonos otra vez como familia.
          </p>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: c.accent, color: c.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: display, fontSize: 22 }}>M</div>
            <div>
              <div style={{ fontFamily: display, fontSize: 18 }}>Familia Mendoza</div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 1.5, opacity: 0.6 }}>Cuenca · Febrero 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section style={{ padding: '90px 56px', background: c.accent, color: c.paper, position: 'relative', overflow: 'hidden' }}>
        <Stamp size={140} rotate={12} color={c.paper} style={{ position: 'absolute', top: 40, right: 60, opacity: 0.5 }}>
          Reserva<br/>directa<br/>★ ★ ★
        </Stamp>
        <div style={{ maxWidth: 600 }}>
          <div style={{ fontFamily: hand, fontSize: 30, marginBottom: 8, transform: 'rotate(-2deg)', display: 'inline-block' }}>P.D.</div>
          <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 60, lineHeight: 1, margin: 0 }}>
            Te dejamos un cuarto.<br/>¿Vienes?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 24, opacity: 0.92, maxWidth: 480 }}>
            Escríbenos por WhatsApp o por correo. Te respondemos el mismo día, con disponibilidad real y sin intermediarios.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
            <button style={{ background: c.paper, color: c.accent, border: 'none', padding: '20px 28px', fontFamily: mono, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>
              WhatsApp +593 ···
            </button>
            <button style={{ background: 'transparent', color: c.paper, border: `1px solid ${c.paper}`, padding: '20px 28px', fontFamily: mono, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>
              hola@lacasadesammy.ec
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: c.deep, color: c.paper, padding: '50px 56px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
          <div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ fontFamily: hand, fontSize: 26, color: c.gold }}>La Casa de</span>
              <span style={{ fontFamily: display, fontSize: 26 }}>Sammy</span>
            </div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>Vilcabamba — Loja — Ecuador</div>
          </div>
          <div style={{ fontFamily: hand, fontSize: 22, color: c.gold, transform: 'rotate(-2deg)' }}>nos vemos pronto.</div>
        </div>
        <div style={{ paddingTop: 18, borderTop: '1px solid rgba(244,236,220,0.15)', display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 10, letterSpacing: 1.5, opacity: 0.5 }}>
          <span>© 2026 — Hecho a mano en el sur del Ecuador</span>
          <span>Bitácora N° 47 · ed. 2026</span>
        </div>
      </footer>
    </div>
  );
}

window.VarCuaderno = VarCuaderno;
