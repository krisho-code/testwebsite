'use client';

import { useState } from 'react';

const colors = [
  { name: 'Eszpresszó', cup: '#51362e', cap: '#3b241e', stage: '#ead7c9' },
  { name: 'Terrakotta', cup: '#b8543d', cap: '#80372a', stage: '#f7d6c7' },
  { name: 'Szilva', cup: '#6e405e', cap: '#4c2b40', stage: '#eedce7' },
];

export default function ProductPalette() {
  const [selected, setSelected] = useState(0);
  const { name, cup, cap, stage } = colors[selected];

  return (
    <section id="bogre" className="wrap section product" aria-labelledby="product-title">
      <div
        className="stage"
        role="img"
        aria-label={`A KÖR bögre illusztrációja, szín: ${name}`}
        style={{ '--cup': cup, '--cap': cap, '--stage': stage }}
      >
        <div className="cup" aria-hidden="true">
          <div className="shell"><b>KÖR.</b></div>
          <div className="lid" />
        </div>
      </div>
      <div>
        <p className="kicker">A kollekció</p>
        <h2 id="product-title">Találd meg<br />a színed.</h2>
        <p className="copy">
          Három árnyalat a mindennapokra. Válassz egy színt, és nézd meg, hogyan áll a bögrének.
        </p>
        <div className="palette" role="group" aria-label="Bögreszínek">
          {colors.map(({ name, cup }, index) => (
            <button
              key={name}
              className="swatch"
              type="button"
              aria-label={name}
              aria-pressed={selected === index}
              style={{ '--swatch': cup }}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <p className="tone" aria-live="polite">{name}</p>
      </div>
    </section>
  );
}
