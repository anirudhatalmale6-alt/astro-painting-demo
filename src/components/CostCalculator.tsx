import { useState } from 'react';

const PRICE_PER_SQFT: Record<string, number> = {
  interior: 3.5,
  exterior: 4.0,
  cabinet: 55,
};

export default function CostCalculator() {
  const [service, setService] = useState('interior');
  const [sqft, setSqft] = useState(1500);
  const [rooms, setRooms] = useState(3);

  const estimate =
    service === 'cabinet'
      ? rooms * PRICE_PER_SQFT.cabinet * 20
      : sqft * PRICE_PER_SQFT[service];

  const low = Math.round(estimate * 0.85);
  const high = Math.round(estimate * 1.2);

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.heading}>Quick Cost Estimate</h3>

      <label style={styles.label}>
        Service Type
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={styles.select}
        >
          <option value="interior">Interior Painting</option>
          <option value="exterior">Exterior Painting</option>
          <option value="cabinet">Cabinet Refinishing</option>
        </select>
      </label>

      {service !== 'cabinet' ? (
        <label style={styles.label}>
          Square Feet
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            style={styles.range}
          />
          <span style={styles.value}>{sqft.toLocaleString()} sq ft</span>
        </label>
      ) : (
        <label style={styles.label}>
          Number of Cabinets
          <input
            type="range"
            min={1}
            max={30}
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            style={styles.range}
          />
          <span style={styles.value}>{rooms} cabinets</span>
        </label>
      )}

      <div style={styles.result}>
        <p style={styles.resultLabel}>Estimated Range</p>
        <p style={styles.resultValue}>
          ${low.toLocaleString()} &ndash; ${high.toLocaleString()}
        </p>
        <p style={styles.disclaimer}>
          Final price depends on prep work, paint quality, and access. Get a free
          on-site quote for an exact price.
        </p>
      </div>

      <a href="/contact" style={styles.cta}>
        Get a Free Quote
      </a>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    background: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '480px',
  },
  heading: {
    color: '#1a365d',
    marginBottom: '1.25rem',
    fontSize: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#4a5568',
  },
  select: {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.35rem',
    border: '1px solid #cbd5e0',
    borderRadius: '4px',
    fontSize: '0.95rem',
  },
  range: {
    display: 'block',
    width: '100%',
    marginTop: '0.35rem',
  },
  value: {
    display: 'block',
    textAlign: 'right' as const,
    fontSize: '0.85rem',
    color: '#718096',
  },
  result: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    padding: '1.25rem',
    marginBottom: '1rem',
    textAlign: 'center' as const,
  },
  resultLabel: {
    fontSize: '0.85rem',
    color: '#718096',
    marginBottom: '0.25rem',
  },
  resultValue: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#1a365d',
    marginBottom: '0.5rem',
  },
  disclaimer: {
    fontSize: '0.75rem',
    color: '#a0aec0',
  },
  cta: {
    display: 'block',
    textAlign: 'center' as const,
    padding: '0.75rem',
    background: '#e8a838',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 600,
    textDecoration: 'none',
  },
};
