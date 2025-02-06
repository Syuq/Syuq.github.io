import { Affix, Col, Layout, Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import FA from 'react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import Config from '../../../../config';
import icon from '../../../images/icon.svg';
import { useWindowSize } from '../../../utils/hooks';
import style from './sidebar.module.less';

const { Content } = Layout;
const { facebook, github, scholar, twitter } = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <img
            src={icon}
            style={{
              width: 32,
            }}
            alt="VL Logo"
          />{' '}
          <span>Duy Quys</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Quy Nhon University
      </div>
      <div className="centerAlign box">
        <a
          href={scholar}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="graduation-cap" />
        </a>
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="github" />
        </a>
        <a
          href={facebook}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="facebook-f" />
        </a>
        <a
          href={twitter}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="twitter" />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />{' '}
          </span>
          &nbsp; &nbsp; Nov 30, 2002
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="map-pin" />
          </span>{' '}
          &nbsp; &nbsp; Ho Chi Minh, Viet Nam
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="mail" />
          </span>
          <a href="mailto:tatd.wine@gmail.com" target="_top">
            &nbsp; &nbsp; tatd.wine@gmail.com
          </a>
        </li>
      </ul>
      {/* <div className={style.resumeDownload}> */}
      {/*  <a href="../resume.pdf" download target="_blank">Download CV</a> */}
      {/* </div> */}
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18} className={style.mainContent}>
              <Layout
                className={`${style.background} ${style.boxContent} borderRadiusSection`}
              >
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout
              className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}
            >
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
