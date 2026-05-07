// Shared utilities + image placeholder for all 3 variations.

// Real photo component — drops into the same slot as ImagePlaceholder.
function Photo({ src, label, ratio = '4 / 3', radius = 0, style = {}, position = 'center' }) {
  return (
    <div style={{
      aspectRatio: ratio,
      backgroundImage: `url(photos/${src})`,
      backgroundSize: 'cover',
      backgroundPosition: position,
      borderRadius: radius,
      width: '100%',
      ...style,
    }} aria-label={label} role="img" />
  );
}

// Striped placeholder with mono caption — never draw imagery freehand.
function ImagePlaceholder({ label, ratio = '4 / 3', tone = 'warm', radius = 0, style = {} }) {
  const tones = {
    warm:  { bg: '#e9dfcf', stripe: 'rgba(120,80,40,0.10)', ink: '#6b5a3e' },
    cool:  { bg: '#d9dcd0', stripe: 'rgba(40,60,30,0.10)',  ink: '#3f5240' },
    deep:  { bg: '#3a3a32', stripe: 'rgba(255,240,210,0.06)', ink: '#d8cdb4' },
    cream: { bg: '#f3ecdd', stripe: 'rgba(120,80,40,0.07)', ink: '#7a6240' },
    moss:  { bg: '#4a5840', stripe: 'rgba(255,255,255,0.05)', ink: '#e6dec7' },
    clay:  { bg: '#b8624a', stripe: 'rgba(255,240,200,0.10)', ink: '#fff4e0' },
  };
  const t = tones[tone] || tones.warm;
  return (
    <div style={{
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 28px)`,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: 14,
      color: t.ink,
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 10,
      letterSpacing: 0.4,
      textTransform: 'uppercase',
      width: '100%',
      ...style,
    }}>
      <span style={{
        background: 'rgba(255,255,255,0.6)',
        padding: '3px 7px',
        borderRadius: 2,
        backdropFilter: 'blur(4px)',
      }}>{label}</span>
    </div>
  );
}

// Subtle paper-grain noise (data URI SVG, very faint).
const PAPER_NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.3  0 0 0 0 0.2  0 0 0 0.08 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`;

Object.assign(window, { ImagePlaceholder, Photo, PAPER_NOISE });
