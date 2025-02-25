import { Col, Row } from 'antd';
import React from 'react';
import { domHtml, stripTags } from '../../../utils/stripTags';

import AboutTile from '../../AbouTile';
import SEO from '../../Seo';

const pageText = {
  paraOne:
    "I'm a Software Engineer at Quy Nhon University, an open-source contributor " +
    'at TAT Org.',
  // paraTwo: 'My research focuses on Streaming Machine Learning',
  paraTwo: '',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <div style={{ lineHeight: '180%' }}>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'Dao',
            'Duy',
            'Quys',
            'FullStack developer',
            'Python',
            'ReactJS',
            'Machine Learning',
            'Online Learning',
            'Streaming Machine Learning',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Binh Dinh, Viet Nam"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}> */}
        {/*  <AboutTile */}
        {/*    img="coffee.png" */}
        {/*    alt="coffee image" */}
        {/*    textH4="Love Coffee" */}
        {/*    textH3="Coffee + Me = Happiness" */}
        {/*  /> */}
        {/* </Col> */}
        {/* <Col xs={24} sm={24} md={12} lg={8}> */}
        {/*  <AboutTile */}
        {/*    img="meeting.png" */}
        {/*    alt="meeting image" */}
        {/*    textH4="Socially Awkward" */}
        {/*    textH3="At times" */}
        {/*  /> */}
        {/* </Col> */}
        {/* <Col xs={24} sm={24} md={12} lg={8}> */}
        {/*  <AboutTile */}
        {/*    img="motorcycle.png" */}
        {/*    alt="motorcycle image" */}
        {/*    textH4="Love Riding" */}
        {/*    textH3="Biker for life" */}
        {/*  /> */}
        {/* </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="research.jpg"
            alt="web image"
            textH4="Research Topic"
            textH3="Online Machine Learning"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Studying Bachelor in"
            textH3="Software Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </div>
  );
};
export default AboutMe;
