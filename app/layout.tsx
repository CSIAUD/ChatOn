import { Navbar } from "@/src/components/Navbar";
import "./globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-6xl m-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
