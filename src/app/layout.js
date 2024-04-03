import "./globals.css";
import Navabar from "./compoments/Navbar";
import Footer from "./compoments/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>

      <Navabar />

      <main>
        {children}

        </main>

      
      <Footer />
        
        
      </body>
    </html>
  );
}
