import "./globals.css";
import Navabar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from './components/ProgressBarProvider';

import { ThemeProvider } from 'next-themes'


export const metadata = {
  title: "IT & Digital Marketing Services | CC Tech",
  description: "CC Tech offers Website Development, Mobile App Development, Digital Marketing, Social Media Marketing and many more IT services. Contact Now!!",
};

export default function RootLayout({ children }) {
  return (
    <html  suppressHydrationWarning lang="en">

      <body>
      <ThemeProvider>
      <Providers>

      <Navabar />

      <main>
      {children}

      </main>

      
      <Footer />

        
      </Providers>
      </ThemeProvider>
        
      </body>
    </html>
  );
}
