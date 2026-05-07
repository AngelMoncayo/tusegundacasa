// Shared header / footer / language toggle
(function(){
  const LANG_KEY='casasammy_lang';

  function logoSvg(){
    return `<svg viewBox="0 0 60 60" fill="none">
      <g stroke="currentColor" stroke-width="1" stroke-linecap="round">
        ${Array.from({length:11}).map((_,i)=>{
          const a=(-90 + (i-5)*14)*Math.PI/180;
          const r1=10, r2=22;
          return `<line x1="${30+Math.cos(a)*r1}" y1="${30+Math.sin(a)*r1}" x2="${30+Math.cos(a)*r2}" y2="${30+Math.sin(a)*r2}"/>`;
        }).join('')}
      </g>
      <path d="M8 44 L20 28 L26 36 L32 24 L40 36 L52 44 Z" fill="currentColor"/>
    </svg>`;
  }

  const NAV=[
    {href:'index.html',       es:'Casa',      en:'Home',     key:'home'},
    {href:'rituales.html',    es:'Rituales',  en:'Rituals',  key:'rituales'},
    {href:'estancia.html',    es:'Estancia',  en:'Stay',     key:'estancia'},
    {href:'la-casa.html',     es:'La Casa',   en:'About',    key:'la-casa'},
    {href:'apothecary.html',  es:'Apothecary',en:'Apothecary',key:'apothecary'},
    {href:'diario.html',      es:'Diario',    en:'Journal',  key:'diario'},
    {href:'reservar.html',    es:'Reservar',  en:'Book',     key:'reservar'},
  ];

  function renderHeader(active){
    const navLinks=NAV.map(n=>`
      <a href="${n.href}" class="${n.key===active?'active':''}">
        <span data-lang="es">${n.es}</span><span data-lang="en">${n.en}</span>
      </a>`).join('');
    return `
    <header class="site-head">
      <div class="head-inner">
        <a href="index.html" class="head-logo">
          ${logoSvg()}
          <span>CASA DE <em>Sammy</em></span>
        </a>
        <nav class="nav">${navLinks}</nav>
        <div class="head-right">
          <div class="lang-toggle" id="langToggle">
            <button data-lang-btn="es" class="active">ES</button>
            <button data-lang-btn="en">EN</button>
          </div>
          <a href="https://wa.me/34612840021" class="wa-btn" target="_blank">
            <span data-lang="es">WhatsApp</span><span data-lang="en">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>`;
  }

  function renderFooter(){
    return `
    <footer class="site-foot">
      <div class="container">
        <div class="foot-top">
          <div class="foot-brand">
            <div class="display" style="font-size:56px">Casa de<br/><em>Sammy</em></div>
            <div class="italic">— tu segunda casa</div>
            <div style="margin-top:28px;font-family:'Italiana',serif;font-size:10px;letter-spacing:.36em;color:var(--sage)">EST · MMXXVI</div>
          </div>
          <div class="foot-col">
            <h4><span data-lang="es">Visitar</span><span data-lang="en">Visit</span></h4>
            <ul>
              <li><a href="rituales.html"><span data-lang="es">Rituales</span><span data-lang="en">Rituals</span></a></li>
              <li><a href="estancia.html"><span data-lang="es">Estancia</span><span data-lang="en">Stay</span></a></li>
              <li><a href="apothecary.html">Apothecary</a></li>
              <li><a href="diario.html"><span data-lang="es">Diario</span><span data-lang="en">Journal</span></a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4><span data-lang="es">Contacto</span><span data-lang="en">Contact</span></h4>
            <ul>
              <li><a href="tel:+34612840021">+34 612 84 00 21</a></li>
              <li><a href="https://wa.me/34612840021">WhatsApp</a></li>
              <li><a href="mailto:hola@casadesammy.es">hola@casadesammy.es</a></li>
              <li><a href="contacto.html"><span data-lang="es">Cómo llegar</span><span data-lang="en">Directions</span></a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4><span data-lang="es">Dónde</span><span data-lang="en">Where</span></h4>
            <ul>
              <li>Carretera de la Sierra</li>
              <li>km 12, Valle de Lozoya</li>
              <li>Madrid · España</li>
              <li style="margin-top:8px"><span data-lang="es">Abierto jue–dom</span><span data-lang="en">Open Thu–Sun</span></li>
            </ul>
          </div>
        </div>
        <div class="foot-bot">
          <div>© 2026 Casa de Sammy</div>
          <div><span data-lang="es">Hecho con calma en la sierra</span><span data-lang="en">Made slowly, in the mountains</span></div>
          <div>Instagram · @casadesammy</div>
        </div>
      </div>
    </footer>`;
  }

  function initLang(){
    const saved=localStorage.getItem(LANG_KEY)||'es';
    document.body.classList.toggle('lang-en', saved==='en');
    const btns=document.querySelectorAll('[data-lang-btn]');
    btns.forEach(b=>{
      b.classList.toggle('active', b.dataset.langBtn===saved);
      b.addEventListener('click',()=>{
        const lang=b.dataset.langBtn;
        document.body.classList.toggle('lang-en', lang==='en');
        localStorage.setItem(LANG_KEY,lang);
        btns.forEach(x=>x.classList.toggle('active', x.dataset.langBtn===lang));
      });
    });
  }

  window.CasaSammy={
    mount(active){
      const h=document.getElementById('site-head');
      const f=document.getElementById('site-foot');
      if(h) h.outerHTML=renderHeader(active);
      if(f) f.outerHTML=renderFooter();
      initLang();
    }
  };
})();
