import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Tools, Coaching, and Community—Your Complete AI Guide"
    description="Master AI with Intuitive Tools, Personalized Coaching, and a Supportive Learning Community—Your All-in-One Guide to Becoming Tech-Savvy."
  >
    <VerticalFeatureRow
      title="Micro SaaS Tools"
      description="NexAI offers a collection of intuitive AI-powered tools that solve everyday problems. From generating regex patterns in plain language to analyzing complex legal contracts with AI insights, our tools are built to make technology work for you—no coding needed. Use our tools to automate tasks, increase productivity, and make smarter decisions without a technical background."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Coaching & eLearning"
      description="Our coaching programs and eLearning courses are designed to bring you up to speed with the latest tech trends. You’ll get hands-on experience with AI concepts, from understanding algorithms to practical applications in marketing, content creation, and automation. Each course is broken down into bite-sized lessons, allowing you to learn at your own pace and apply new skills immediately."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Community Hub"
      description="Join a vibrant community of learners, innovators, and AI enthusiasts. At NexAI, you’re never alone in your journey—connect with others, exchange insights, and collaborate on projects that amplify your learning. Our community is designed to foster continuous growth, offering Q&A sessions, member-led workshops, and collaborative projects to deepen your tech skills."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
