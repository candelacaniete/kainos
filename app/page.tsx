import AboutSection from '@/components/AboutSection';
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
    </main>
  );
}
