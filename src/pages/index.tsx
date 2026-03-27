import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {
    title: 'Foundations',
    description: 'Core concepts of agentic engineering',
    icon: '\u{1F9E9}',
    href: '/docs/foundations/',
  },
  {
    title: 'Patterns',
    description: 'Design patterns for agent systems',
    icon: '\u{1F504}',
    href: '/docs/patterns/',
  },
  {
    title: 'Tooling',
    description: 'Tools, frameworks, and SDKs',
    icon: '\u{1F6E0}\u{FE0F}',
    href: '/docs/tooling/',
  },
  {
    title: 'Workflows',
    description: 'Real-world agentic workflows',
    icon: '\u{1F680}',
    href: '/docs/workflows/',
  },
  {
    title: 'Human-Agent Collab',
    description: 'Human-in-the-loop, delegation, and oversight',
    icon: '\u{1F91D}',
    href: '/docs/human-agent-collab/',
  },
  {
    title: 'Evaluation',
    description: 'Testing, benchmarking, and evals',
    icon: '\u{1F4CA}',
    href: '/docs/evaluation/',
  },
  {
    title: 'Safety',
    description: 'Guardrails, security, and alignment',
    icon: '\u{1F6E1}\u{FE0F}',
    href: '/docs/safety/',
  },
  {
    title: 'Contributing',
    description: 'How to contribute to this handbook',
    icon: '\u{270F}\u{FE0F}',
    href: '/docs/contributing/',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <Link className={styles.heroButton} to="/docs">
          Read the Handbook &rarr;
        </Link>
      </div>
    </header>
  );
}

function SectionCards() {
  return (
    <section className={styles.sections}>
      <Heading as="h2" className={styles.sectionsTitle}>
        Explore the Handbook
      </Heading>
      <p className={styles.sectionsSubtitle}>
        Everything you need to build and operate agentic systems
      </p>
      <div className={styles.grid}>
        {sections.map(({title, description, icon, href}) => (
          <Link key={title} className={styles.card} to={href}>
            <span className={styles.cardIcon}>{icon}</span>
            <span className={styles.cardTitle}>{title}</span>
            <span className={styles.cardDesc}>{description}</span>
            <span className={styles.cardArrow}>&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <SectionCards />
      </main>
    </Layout>
  );
}
