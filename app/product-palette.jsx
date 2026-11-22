'use client';

import { useState } from 'react';

const colors = [
  { name: 'Erdőzöld', cup: '#365848', cap: '#264539', stage: '#e0e8d7' },
  { name: 'Agyagvörös', cup: '#a9503f', cap: '#743628', stage: '#f3ded4' },
  { name: 'Esti lila', cup: '#655491', cap: '#483b74', stage: '#e8e1f5' },
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
