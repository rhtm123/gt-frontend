import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from './components/ProgressBarProvider';

import { ThemeProvider } from 'next-themes'
import WhatsApp from "./components/WhatsApp";


export const metadata = {
  title: "IT & Digital Marketing Services | GrowTech Lab",
  description: "GrowTech Lab offers Website Development, Mobile App Development, Digital Marketing, Social Media Marketing and many more IT services. Contact Now!!",
};

export default function RootLayout({ children }) {
  return (
    <html  suppressHydrationWarning lang="en">

      <body>
      <ThemeProvider>
      <Providers>

      <Navbar />

      <main>
      {children}

      <WhatsApp />

      </main>

      
      <Footer />

        
      </Providers>
      </ThemeProvider>
        
      </body>
    </html>
  );
}
