import AboutSection from '@/components/AboutSection';
import CtaFooter from '@/components/CtaFooter';
import Hero from '@/components/Hero';
import LocationsSection from '@/components/LocationsSection';
import RitualsSection from '@/components/RitualsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <RitualsSection />
      <LocationsSection />
      <CtaFooter />
    </main>
  );
}
