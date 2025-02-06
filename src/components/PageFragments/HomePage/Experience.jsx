import { Col, Row } from 'antd';
import React from 'react';

import SEO from '../../Seo';

const Experience = () => (
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
      <h1 className="titleSeparate">Work Experience</h1>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Research Assistant</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>IOT VIET SOLUTIONS COMPANY LIMITED, VietNam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Aug 2024 – Nov 2024</h3>
          </Col>
        </Row>
        <li>
          Develop scalable ensemble models for incremental learning to deal with
          extremely high-speed streaming data
        </li>
        <li>
          Tools and languages: Python (PyTorch & Tensorflow & Scikit-learn &
          Pandas), Jupyter Notebook, LLM
        </li>{' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Machine Learning Engineer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>IOT VIET SOLUTIONS COMPANY LIMITED, VietNam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Aug 2024 – Nov 2024</h3>
          </Col>
        </Row>
        <li>
          Research and develop Smart TTS system to assist factory training and
          detection of pose violations
        </li>
        <li>Tools and languages: Piper, C#, Linux, Text To Speed</li>{' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Software Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>IOT VIET SOLUTIONS COMPANY LIMITED, VietNam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Aug 2024 – Nov 2024</h3>
          </Col>
        </Row>
        <li>Build Web Application for rubber factory</li>
        <li>
          Tools and languages: ASP.NET, C#, MongoDB, MudBlazor, SQL Server, MQTT
        </li>{' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Web Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Quy Nhon University, VietNam</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Apr 2024 – Aug 2024</h3>
          </Col>
        </Row>
        <li>Develop Web Application using Gin (Go)</li>
        <li>Products: A simplified sharing image</li>{' '}
      </p>
    </div>
  </div>
);
export default Experience;
