// Variation 3 — "Valle Sagrado" — moderno-rústico, verdes profundos,
// layout asimétrico, geometría sutil, contemporáneo.

function VarValleSagrado() {
  const c = {
    moss:    '#2e3a26',   // verde musgo profundo
    fern:    '#4a5e3a',
    bone:    '#ece4d3',
    cream:   '#f5efe1',
    clay:    '#c47a4f',
    ink:     '#191a14',
    line:    'rgba(46,58,38,0.18)',
  };
  const display = '"Fraunces", "Cormorant Garamond", Georgia, serif';
  const sans    = '"Inter", system-ui, sans-serif';
  const mono    = 'ui-monospace, "SF Mono", Menlo, monospace';

  // Patrón andino sutil — diamantes
  const ANDEAN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M20 4 L36 20 L20 36 L4 20 Z' fill='none' stroke='%23ece4d3' stroke-width='0.5' opacity='0.3'/></svg>")`;

  return (
    <div style={{
      width: 1280, fontFamily: sans, color: c.ink, background: c.cream,
    }}>
      {/* NAV */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px', background: c.cream, borderBottom: `1px solid ${c.line}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Geometric monogram */}
          <svg width="34" height="34" viewBox="0 0 34 34">
            <path d="M17 3 L31 17 L17 31 L3 17 Z" fill="none" stroke={c.moss} strokeWidth="1.4"/>
            <path d="M17 9 L25 17 L17 25 L9 17 Z" fill={c.clay}/>
          </svg>
          <span style={{ fontFamily: display, fontWeight: 500, fontSize: 20, letterSpacing: -0.3 }}>
            La Casa de Sammy
          </span>
        </div>
        <nav style={{ display: 'flex', gap: 36, fontSize: 13, color: c.moss }}>
          <span>Sobre</span><span>Habitaciones</span><span>Experiencias</span><span>Galería</span><span>Diario</span>
        </nav>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: 1.5 }}>
            <span style={{ color: c.moss, fontWeight: 600 }}>ES</span>
            <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>
            <span style={{ opacity: 0.5 }}>EN</span>
          </span>
          <button style={{
            background: c.moss, color: c.cream, border: 'none', padding: '11px 20px',
            fontSize: 12, letterSpacing: 0.5, fontWeight: 500, borderRadius: 999, cursor: 'pointer',
          }}>Reservar</button>
        </div>
      </header>

      {/* HERO — asimétrico */}
      <section style={{ padding: '64px 48px 80px', background: c.cream, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span style={{ width: 32, height: 1, background: c.clay }} />
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay }}>
                Vilcabamba · Loja · Ecuador
              </span>
            </div>
            <h1 style={{
              fontFamily: display, fontWeight: 400, fontSize: 92, lineHeight: 0.98, margin: 0,
              letterSpacing: -2.5, color: c.moss, textWrap: 'balance',
            }}>
              Donde el<br/>
              valle <em style={{ color: c.clay, fontStyle: 'italic' }}>respira</em><br/>
              despacio.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 36, color: 'rgba(25,26,20,0.75)', maxWidth: 480 }}>
              Una casa rural para grupos familiares en el corazón del Valle de la Longevidad. Cinco habitaciones, huerto propio, y todo el silencio del sur del Ecuador.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <button style={{
                background: c.moss, color: c.cream, border: 'none', padding: '16px 26px',
                fontSize: 13, fontWeight: 500, borderRadius: 999, cursor: 'pointer',
              }}>Ver disponibilidad →</button>
              <button style={{
                background: 'transparent', color: c.moss, border: `1px solid ${c.moss}`,
                padding: '16px 26px', fontSize: 13, fontWeight: 500, borderRadius: 999, cursor: 'pointer',
              }}>Conocer la casa</button>
            </div>

            {/* Stats line */}
            <div style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 28, borderTop: `1px solid ${c.line}` }}>
              {[['1.500', 'm.s.n.m.'], ['18-22°', 'todo el año'], ['5', 'habitaciones'], ['4.7', 'estrellas']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: display, fontSize: 32, color: c.moss, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(25,26,20,0.55)', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero imagery — composition */}
          <div style={{ position: 'relative', height: 640 }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '85%', height: 460, borderRadius: '50% 50% 8px 8px / 60% 60% 8px 8px', overflow: 'hidden' }}>
              <ImagePlaceholder label="cerro mandango al amanecer" tone="moss" ratio="auto" style={{ height: '100%' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: 280, overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.15)', borderRadius: 4 }}>
              <ImagePlaceholder label="patio · plantas · luz tarde" tone="warm" ratio="auto" style={{ height: '100%' }} />
            </div>
            {/* Floating quote card */}
            <div style={{
              position: 'absolute', bottom: 40, right: -8, width: 220, padding: '18px 20px',
              background: c.moss, color: c.cream, borderRadius: 4,
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            }}>
              <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 16, lineHeight: 1.4 }}>
                "Vilcabamba — donde se le suman años a la vida."
              </div>
              <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: c.clay, marginTop: 12 }}>
                Dicho del valle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — palabras del lugar */}
      <div style={{
        background: c.moss, color: c.cream, padding: '24px 0', overflow: 'hidden',
        backgroundImage: ANDEAN, backgroundRepeat: 'repeat',
      }}>
        <div style={{ display: 'flex', gap: 48, fontFamily: display, fontSize: 28, fontStyle: 'italic', whiteSpace: 'nowrap' }}>
          {Array(2).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>· Valle Sagrado</span>
              <span style={{ color: c.clay }}>· Aire puro</span>
              <span>· Río Chamba</span>
              <span style={{ color: c.clay }}>· Cerro Mandango</span>
              <span>· Cascada El Palto</span>
              <span style={{ color: c.clay }}>· Café de Loja</span>
              <span>· Bosque nublado</span>
              <span style={{ color: c.clay }}>· Mesa larga</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SOBRE NOSOTROS */}
      <section style={{ padding: '120px 48px', background: c.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          <div style={{ position: 'sticky', top: 40 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay, marginBottom: 18 }}>
              01 / Sobre la casa
            </div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 56, lineHeight: 1, margin: 0, color: c.moss, letterSpacing: -1 }}>
              Una casa con<br/>raíces hondas.
            </h2>
            <ImagePlaceholder label="huerta · vegetales del día" tone="moss" ratio="4/5" style={{ marginTop: 32 }} />
          </div>
          <div style={{ paddingTop: 24 }}>
            <p style={{ fontFamily: display, fontSize: 26, lineHeight: 1.4, fontWeight: 400, margin: '0 0 32px', color: c.moss, textWrap: 'pretty' }}>
              La Casa de Sammy abre sus puertas en uno de los rincones más tranquilos del Ecuador, declarado Rincón Mágico en 2023.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(25,26,20,0.78)', marginBottom: 18 }}>
              La casa fue levantada en piedra del río y madera de la zona, pensada para albergar a familias que viajan juntas. Cada habitación mira a un costado distinto del valle, y todas comparten el patio central, el comedor abierto y la huerta.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(25,26,20,0.78)', marginBottom: 36 }}>
              Lo que sirvieron en la mesa esta mañana viene del huerto. Los recorridos los hacen guías que crecieron en el valle. Y el wifi, prometemos, llega a casi todos los rincones — aunque mejor lo apagas un rato.
            </p>

            {/* Featurelets */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 32 }}>
              {[
                ['Huerto propio', 'Verduras, hierbas y huevos del día.'],
                ['Familias', 'Cuartos comunicados y zonas para niños.'],
                ['Guías locales', 'Cabalgatas, senderismo y termales.'],
                ['Pet friendly', 'Tu perro también es bienvenido.'],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: '20px 22px', background: c.bone, borderRadius: 4 }}>
                  <div style={{ fontFamily: display, fontSize: 20, color: c.moss, marginBottom: 6 }}>{t}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(25,26,20,0.7)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HABITACIONES — horizontal scroll style */}
      <section style={{ padding: '110px 0 110px 48px', background: c.bone, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay, marginBottom: 14 }}>
              02 / Habitaciones
            </div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 64, lineHeight: 0.95, margin: 0, color: c.moss, letterSpacing: -1 }}>
              Cinco cuartos,<br/>nombrados como el valle.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid ${c.moss}`, background: 'transparent', color: c.moss, cursor: 'pointer', fontSize: 16 }}>←</button>
            <button style={{ width: 44, height: 44, borderRadius: '50%', border: 'none', background: c.moss, color: c.cream, cursor: 'pointer', fontSize: 16 }}>→</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, overflowX: 'visible', paddingBottom: 8 }}>
          {[
            { name: 'Mandango', tag: 'Suite familiar', cap: '4 huéspedes', price: '$120', tone: 'warm' },
            { name: 'Wilco',    tag: 'Doble matrim.',  cap: '2 huéspedes', price: '$85',  tone: 'moss' },
            { name: 'Chamba',   tag: 'Familiar',       cap: '3 huéspedes', price: '$95',  tone: 'cream' },
            { name: 'Palto',    tag: 'Doble',          cap: '2 huéspedes', price: '$80',  tone: 'warm' },
          ].map(r => (
            <div key={r.name} style={{ flex: '0 0 300px', background: c.cream, borderRadius: 6, overflow: 'hidden' }}>
              <ImagePlaceholder label={r.name.toLowerCase()} tone={r.tone} ratio="3/4" />
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: c.clay }}>{r.tag}</div>
                <h3 style={{ fontFamily: display, fontWeight: 400, fontSize: 30, margin: '6px 0 0', color: c.moss }}>{r.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, paddingTop: 16, borderTop: `1px solid ${c.line}` }}>
                  <span style={{ fontSize: 12, color: 'rgba(25,26,20,0.6)' }}>{r.cap}</span>
                  <span style={{ fontFamily: display, fontSize: 20, color: c.moss }}>{r.price}<span style={{ fontSize: 11, color: 'rgba(25,26,20,0.5)' }}> /noche</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ padding: '110px 48px', background: c.cream }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay, marginBottom: 14 }}>03 / Galería</div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 56, color: c.moss, margin: 0, letterSpacing: -1 }}>
              La casa por dentro y por fuera.
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 180, gap: 16 }}>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}><ImagePlaceholder label="patio principal" tone="warm" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="cocina" tone="cream" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="cuarto wilco" tone="moss" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="café mañanero" tone="warm" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="huerta" tone="moss" ratio="auto" style={{ height: '100%' }} /></div>
          <div style={{ gridColumn: 'span 2' }}><ImagePlaceholder label="atardecer en el valle" tone="clay" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="caballos" tone="warm" ratio="auto" style={{ height: '100%' }} /></div>
          <div><ImagePlaceholder label="cascada el palto" tone="cool" ratio="auto" style={{ height: '100%' }} /></div>
        </div>
      </section>

      {/* TESTIMONIOS — 2 columnas */}
      <section style={{ padding: '110px 48px', background: c.moss, color: c.cream }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56 }}>
          <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 56, lineHeight: 1, margin: 0, letterSpacing: -1, color: c.cream }}>
            Lo que cuentan<br/>nuestras familias.
          </h2>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay }}>04 / Reseñas</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            { q: 'La casa es hermosa, pero lo que de verdad nos llevamos fue el trato. Sammy y su gente nos cuidaron como familia.', a: 'Familia Vásquez', l: 'Quito · Mar 2026' },
            { q: 'Vinimos con tres generaciones. Mi mamá de 78 y los nietos de 5. Todos encontraron su rincón. Volveremos.', a: 'Familia Mendoza', l: 'Cuenca · Feb 2026' },
          ].map(t => (
            <div key={t.a} style={{ padding: 32, background: 'rgba(255,255,255,0.06)', borderRadius: 6 }}>
              <p style={{ fontFamily: display, fontStyle: 'italic', fontSize: 24, lineHeight: 1.4, margin: 0 }}>"{t.q}"</p>
              <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: c.clay, color: c.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: display, fontSize: 16 }}>{t.a[t.a.indexOf(' ') + 1]}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t.a}</div>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 1.2, opacity: 0.6 }}>{t.l}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVA */}
      <section style={{ padding: '110px 48px', background: c.cream, position: 'relative' }}>
        <div style={{ background: c.bone, borderRadius: 8, padding: '72px 56px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: c.clay, marginBottom: 14 }}>05 / Reservas</div>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 56, lineHeight: 1, margin: 0, color: c.moss, letterSpacing: -1 }}>
              Aparta tus días<br/>en el valle.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(25,26,20,0.75)', marginTop: 24, maxWidth: 440 }}>
              Reservas mínimas de dos noches. Tarifas familiares para grupos. Te respondemos en menos de 24 horas.
            </p>
          </div>
          <div style={{ background: c.cream, padding: 28, borderRadius: 6, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              {[['Llegada', '15 jun'], ['Salida', '20 jun']].map(([l, v]) => (
                <div key={l} style={{ padding: '12px 14px', border: `1px solid ${c.line}`, borderRadius: 4 }}>
                  <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(25,26,20,0.55)' }}>{l}</div>
                  <div style={{ fontFamily: display, fontSize: 18, color: c.moss, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 14px', border: `1px solid ${c.line}`, borderRadius: 4, marginBottom: 18 }}>
              <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(25,26,20,0.55)' }}>Huéspedes</div>
              <div style={{ fontFamily: display, fontSize: 18, color: c.moss, marginTop: 4 }}>2 adultos · 2 niños</div>
            </div>
            <button style={{ width: '100%', padding: '16px', background: c.moss, color: c.cream, border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
              Consultar disponibilidad →
            </button>
            <div style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: 'rgba(25,26,20,0.55)' }}>
              o escríbenos por WhatsApp
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: c.ink, color: c.cream, padding: '72px 48px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <svg width="30" height="30" viewBox="0 0 34 34">
                <path d="M17 3 L31 17 L17 31 L3 17 Z" fill="none" stroke={c.cream} strokeWidth="1.4"/>
                <path d="M17 9 L25 17 L17 25 L9 17 Z" fill={c.clay}/>
              </svg>
              <span style={{ fontFamily: display, fontSize: 22 }}>La Casa de Sammy</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.7, maxWidth: 280 }}>
              Vilcabamba — Loja — Ecuador. El Valle de la Longevidad, declarado Rincón Mágico del Ecuador.
            </p>
          </div>
          {[['Visitar', ['Habitaciones', 'Experiencias', 'Galería', 'Diario']],
            ['Reservar', ['Disponibilidad', 'Tarifas', 'Preguntas', 'Políticas']],
            ['Contacto', ['WhatsApp', 'Email', 'Instagram', 'Cómo llegar']]].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: c.clay, marginBottom: 16 }}>{h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(i => <li key={i} style={{ fontSize: 13, opacity: 0.85 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(236,228,211,0.15)', display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 10, letterSpacing: 1.5, opacity: 0.5 }}>
          <span>© 2026 La Casa de Sammy</span>
          <span>Hecho en el sur del Ecuador</span>
        </div>
      </footer>
    </div>
  );
}

window.VarValleSagrado = VarValleSagrado;
