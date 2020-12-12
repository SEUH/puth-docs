import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Why use Puth',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Puth solves the problem of being able to run browser tests in any programming language. It does this by providing a very simple api that can be used to control Puth.
      </>
    ),
  },
  {
    title: 'Extensible',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        You can easily extend Puth with plugins. You need a special function? Then write your own plugin. It's really easy, I promise! :)
      </>
    ),
  },
  {
    title: 'Powered by Puppeteer',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Puth uses <a href="https://pptr.dev/">Puppeteer</a> at its core and allows you to use all of its features and <a href="docs/plugins">more</a>!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Puth is a nice browser testing framework with focus on stability, performance and extensive feedback.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Puth</h1>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              {/*<p className="hero__subtitle">It works with projects using: JS, PHP, Laravel, Jest. and more!</p>*/}
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
