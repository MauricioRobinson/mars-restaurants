import "./globals.css";

export const metadata = {
  title: "Mars Restaurant",
  description: "Search engine for restaurant. Best restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

