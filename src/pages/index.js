import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const Home = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Документация по написанию проектов">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles['hero__title'])}>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/overview')}>
              Начать изучение
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
