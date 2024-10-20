import HowItWorks from '@/feature/HowItWorks';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Banner } from './Banner';
import Benefits from './Benefits';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Benefits />
    <VerticalFeatures />
    <About />
    <Sponsors />
    <HowItWorks />
    <Banner />
    <Footer />
  </div>
);

export { Base };
