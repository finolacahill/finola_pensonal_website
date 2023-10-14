import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import Title from '../components/Title';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          This is a demonstration of the Sydney theme for verse by{' '}
          <span className={styles.gold}>matter design.</span>
        </p>
        <p>
          wear by <span className={styles.gold}>sunspel</span> and{' '}
          <span className={styles.gold}>scotch&soda</span>
        </p>
      </div>

      {/* Footer */}
      <div className={styles.footerContainer}>
        {/* Footer content goes here */}
      </div>
    </Layout>
  );
};

export default IndexPage;
