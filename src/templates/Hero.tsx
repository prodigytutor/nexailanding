import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButtonExtendedCTA } from '../hero/HeroOneButtonExtendedCTA';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">Roadmap</Link>
        </li>
        <li>
          <Link href="/sign-in">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButtonExtendedCTA
        title={
          <>
            {'Unlock the Power of AI for everyone \n'}
            <span className="text-primary-500">No Coding Necessary</span>
          </>
        }
        description="At NexAI, we make artificial intelligence simple, approachable, and practical. Whether you're an entrepreneur, professional, or just curious, our tools, courses, and community are built to empower you with AI skills, without the steep learning curve."
        button={
          <Link href="#">
            <Button xl>Get Early Access</Button>
          </Link>
        }
        cta="Join thousands of users already benefiting from NexAI’s tools and courses"
      />
    </Section>
  </Background>
);

export { Hero };
