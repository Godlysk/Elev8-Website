import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
  </Layout>
);

export default AboutPage;
