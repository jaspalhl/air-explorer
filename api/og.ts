import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'AIR Data Explorer';
  const type = searchParams.get('type') || 'Film + TV';
  const ages = searchParams.get('ages') || 'Kids • Teens • Early adults • Adults';
  const colorBy = searchParams.get('colorBy') || 'Type (Film/TV)';
  const sizeNote = 'Size = # of AIR raters';
  const src = 'scholarsandstorytellers.com/air';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1f2937 100%)',
          color: '#e5e7eb',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 14, height: 14, background: '#1f77b4', borderRadius: 2, border: '1px solid rgba(255,255,255,0.5)' }} />
          <div style={{ width: 14, height: 14, background: '#ff7f0e', borderRadius: 999, border: '1px solid rgba(255,255,255,0.5)' }} />
          <div style={{ fontSize: 24, color: '#cbd5e1' }}>Film (square) • TV (circle)</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#f8fafc', letterSpacing: 0.25 }}>{title}</div>
          <div style={{ fontSize: 26, color: '#cbd5e1' }}>
            Critics vs Audience • {type} • {colorBy}
          </div>
          <div style={{ fontSize: 22, color: '#94a3b8' }}>
            Ages: {ages} &nbsp;•&nbsp; {sizeNote}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 20, color: '#9ca3af' }}>Source: {src}</div>
          <div style={{ fontSize: 18, color: '#9ca3af' }}>Share this link to show a rich preview</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
