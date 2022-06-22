import '../styles/globals.css'
import "aos/dist/aos.css";
import Aos from 'aos'
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
