import React from 'react';

import SEO from '../../Seo';

const SelectedProjects = () => (
  <div style={{ lineHeight: '180%' }}>
    <div>
      <SEO
        title="About"
        path=""
        keywords={[
          'Dao',
          'Duy',
          'Quy',
          'FullStack developer',
          'Python',
          'ReactJS',
          'Machine Learning',
          'Online Learning',
          'Streaming Machine Learning',
        ]}
      />
      <h1 className="titleSeparate">Selected Projects</h1>
      <p>
        <h3 style={{ display: 'inline' }}>
          Paru (Open source, 6.5k stars on Github)
        </h3>{' '}
        – Feature packed AUR helper
      </p>
      <p>
        <h3 style={{ display: 'inline' }}>
          Clipcat (Open source, 411 stars on Github)
        </h3>{' '}
        – A clipboard manager written in Rust Programming Language.
      </p>
      <p style={{ marginBottom: '2em' }}>
        <h3 style={{ display: 'inline' }}>.dotfiles (Side project)</h3> – tat's
        dotfiles. DON'T USE unless you're tat
      </p>
    </div>
  </div>
);
export default SelectedProjects;
