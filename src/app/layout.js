import "./globals.css";

export const metadata = {
  title: "Noob Hacker",
  description: "A blog about hacking and programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
