import { Layout } from 'antd';
import React from 'react';
import Header from '../components/PageLayout/Header';

import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Experience from '../components/PageFragments/HomePage/Experience';
import SelectedProjects from '../components/PageFragments/HomePage/SelectedProjects';
import SkillsProgress from '../components/PageFragments/HomePage/SkillProgress';
import SidebarWrapper from '../components/PageLayout/Sidebar';

export default () => (
  <Layout className="outerPadding">
    <Layout
      className="container"
      style={{
        background: 'red',
      }}
    >
      <Header />
      <SidebarWrapper>
        <div id="duyquys">
          <AboutMe />
          <Experience />
          <SelectedProjects />
          <SkillsProgress />
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
