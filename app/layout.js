import "./globals.css";

export const metadata = {
  title : "Styling Demo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}
      </body>
    </html>
  );
}
