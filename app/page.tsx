
import { Hero } from '@/components/sections/Hero';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { VenturePortfolio } from '@/components/sections/VenturePortfolio';
import { Capabilities } from '@/components/sections/Capabilities';
import { Vision } from '@/components/sections/Vision';
import { Differentiation } from '@/components/sections/Differentiation';
import { Partnerships } from '@/components/sections/Partnerships';
import type { Metadata } from 'next';
import { OurClients } from '@/components/sections/OurClients';
import { HomeWelcome } from '@/components/sections/HomeWelcome';

export const metadata: Metadata = {
  title: 'Home',
};


export default function Home() {
  return (
    <>
      <HomeWelcome />
      <Hero />
      <CompanyOverview />
      <VenturePortfolio />
      <Capabilities />
      <Vision />
      <Differentiation />
      <OurClients />
      <Partnerships />
    </>
  );
}
