
import servicesData from '../../data/services.json'; 


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const {slug } = params;
   
    
    const service = servicesData.services.find(service =>
      decodeURIComponent(service.title) === decodeURIComponent(slug.replace(/-/g, ' '))
    );
   
    return {
      title: `${service.title} | CC Tech`,
      description: `${service.description}`,
    }
  }

  export default function RootLayout({ children }) {
    return(
      <>
      { children }
      </>
    )
  }