import Image from 'next/image';
import hero from '../public/hero.jpg';
import ProductPalette from './product-palette';

export default function Home() {
  return (
    <>
      <header id="top"><div className="wrap">
      <a className="logo" href="#top" aria-label="KÖR kezdőlap">KÖR.</a>
      <nav aria-label="Fő navigáció"><a href="#bogre">A bögre</a><a href="#ritual">A rutin</a><a href="#gyik">GYIK</a></nav>
      <a className="pill" href="#bogre">Színek felfedezése</a>
      </div></header>
      <main>
      <section className="wrap hero" aria-labelledby="headline">
      <div><p className="kicker">Újrahasználható bögre</p><h1 id="headline">Jöhet még <span>egy kör.</span></h1><p className="copy">A reggeli presszóhoz, a délutáni matchához és minden megállóhoz közben. Töltsd meg, vidd magaddal, aztán kezdd újra.</p><a className="pill" href="#bogre">Ismerd meg a bögrét</a></div>
      <div className="hero-art"><div className="cup" aria-hidden="true"><div className="shell"><b>KÖR.</b></div><div className="lid"></div></div><Image src={hero} alt="Sötétbarna, fedeles bögre meleg tónusú háttér előtt" preload sizes="(max-width: 650px) 100vw, 50vw" /><div className="stamp" aria-hidden="true"><b>↻</b>Töltsd<br />újra</div></div>
      </section>
      <div className="ribbon" aria-hidden="true"><div className="ribbon-track"><span>TÖLTSD MEG ✦ VIDD MAGADDAL ✦ TÖLTSD ÚJRA ✦ TÖLTSD MEG ✦ VIDD MAGADDAL ✦ TÖLTSD ÚJRA ✦</span><span>TÖLTSD MEG ✦ VIDD MAGADDAL ✦ TÖLTSD ÚJRA ✦ TÖLTSD MEG ✦ VIDD MAGADDAL ✦ TÖLTSD ÚJRA ✦</span></div></div>
      <ProductPalette />
      <section id="ritual" className="ritual"><div className="wrap section"><p className="kicker">A mindennapi rutin</p><h2>Holnap is veled.</h2>
      <div className="steps">
      <article className="step"><span className="icon" aria-hidden="true">◒</span><h3>Töltsd meg.</h3><p>Otthon vagy a kedvenc kávézódban kezdd a napot a saját bögréddel.</p></article>
      <article className="step"><span className="icon" aria-hidden="true">✦</span><h3>Vidd magaddal.</h3><p>Kortyolj egyet a parkban, két meeting között vagy útközben.</p></article>
      <article className="step"><span className="icon" aria-hidden="true">↻</span><h3>Kezdd újra.</h3><p>Használat után mosd el, és készítsd ki a következő reggelre.</p></article>
      </div></div></section>
      <section id="gyik" className="wrap section faq"><div><p className="kicker">GYIK</p><h2>Jó tudni.</h2></div><div>
      <details><summary>Kérhetem a kávémat a saját bögrémbe?</summary><p>A rendelés előtt kérdezd meg a pultnál. A saját bögre használatának feltételeiről a kávézó dönt.</p></details>
      <details><summary>Milyen színekben láthatom a bögrét?</summary><p>A színválasztóban az eszpresszóbarna, a terrakotta és a szilva változatot nézheted meg.</p></details>
      <details><summary>Hol tudom megrendelni?</summary><p>Ez a KÖR bemutatóoldala. A bögre rendelése még nem érhető el.</p></details>
      </div></section>
      </main>
      <footer><div className="wrap"><a className="logo" href="#top" aria-label="KÖR, vissza az oldal tetejére">KÖR.</a><small>Újrahasználható bögre, minden napra.</small><a href="#top">Vissza az elejére ↑</a></div></footer>
    </>
  );
}
