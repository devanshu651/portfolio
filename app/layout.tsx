import "./globals.css";
import Navbar from "./components/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className="bg-black text-white antialiased min-h-screen overflow-y-auto">

        {/* Navbar will appear on every page */}
        <Navbar />

        {/* Page content */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
