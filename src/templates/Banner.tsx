import Link from 'next/link';

import { CTABannerForm } from '@/cta/CTABannerForm';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABannerForm
      title="Whether you’re looking to automate daily tasks, build AI skills for career growth, or simply understand the buzz around AI, NexAI has you covered. 
        Join our early access list to stay ahead of the curve."
      placeholder="Start your Free Trial. Enter Email Here!"
      button={
        <Link href="#">
          <Button>Get Started</Button>
        </Link>
      }
      // eslint-disable-next-line func-names
      onEmailChanged={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  </Section>
);

export { Banner };
