import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portesillo - Mudanzas y Portes en Minutos</title>
        <meta
          name="description"
          content="Portesillo revoluciona el transporte de tus muebles y objetos. Solicita un conductor en segundos, rastrea tu mudanza en tiempo real y paga de forma segura."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="mudanzas, portes, transporte, furgonetas, España" />
        <meta property="og:title" content="Portesillo - Mudanzas y Portes en Minutos" />
        <meta
          property="og:description"
          content="La forma más rápida y segura de transportar tus cosas"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
