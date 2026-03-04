import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Volunteering from '../components/Volunteering';
import Fleet from '../components/Fleet';
import News from '../components/News';
import FooterContact from '../components/FooterContact';

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-brand-gray">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Volunteering />
      <Fleet />
      <News />
      <FooterContact />
    </div>
  );
}