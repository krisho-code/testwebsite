import './globals.css';

export const metadata = {
  title: 'KÖR — A következő kör a tiéd',
  description: 'KÖR. Újrahasználható bögre a reggeli kávédhoz és mindenhez, ami utána jön.',
};

export const viewport = {
  themeColor: '#f7f5ed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
