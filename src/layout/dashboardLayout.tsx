import React, { useState } from 'react';
import styled from 'styled-components';
import { AnkLogo } from '../assets/icons';
import Sidebar from '../components/organisms/sidebar';
import Account from '../components/molecules/account';
import ankoraLogo from '../assets/images/ankora.svg';

const DashboardLayout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebar] = useState(true);

  return (
    <DLStyling sidebarShowing={sidebarOpen}>
      <div className="ds__sidebar-overlay" onClick={() => setSidebar(!sidebarOpen)} />
      <div className={'ds__sidebar-content'}>
        <div className={'ds__sidebar-content-logo-div ds__sidebar__navs'}>
          <span>
            <AnkLogo />
          </span>
          <span>
            <img src={ankoraLogo} style={{ display: 'flex' }} alt="ankora" />
          </span>
        </div>
        <div className={'ds__sidebar-content--sidebar'}>
          <Sidebar setSidebar={setSidebar} sidebarOpen={sidebarOpen} />
        </div>
        <div className={'ds__sidebar-content--footer'}>
          <Account sidebarShowing={sidebarOpen} />
        </div>
      </div>
      <div className="ds__content">
        {children}
        <div className="ds__content--floating-burger" onClick={() => setSidebar(true)}>
          toggle
        </div>
      </div>
    </DLStyling>
  );
};

const DLStyling = styled.div<{ sidebarShowing: boolean }>`
  min-height: 100vh;
  position: relative;
  --width: 281px;
  --sm-width: 100px;

  .ds__sidebar {
    &-overlay {
      position: absolute;
      background: #00000045;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: ${({ sidebarShowing }) => (sidebarShowing ? 'block' : 'none')};
    }

    &-content {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.8s;
      position: fixed;
      width: var(--width);
      height: 100vh;
      background: var(--side-bar-bg);
      transform: translate(${({ sidebarShowing }) => (sidebarShowing ? 0 : -281)}px);

      &-logo-div {
        padding: ${({ sidebarShowing }) => (sidebarShowing ? '35px 40px' : '35px 15px')};
        justify-content: ${({ sidebarShowing }) => (sidebarShowing ? undefined : 'center')};
        display: flex;
        align-items: center;
        font-family: 'Yaldevi', sans-serif;

        > span svg {
          display: flex;
        }

        > span img {
          margin-left: 7px;
          display: flex;
        }
      }

      &--sidebar {
        height: calc(100vh - 60px - 68px - 75px - 26px);
        overflow-y: auto;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
      }

      &--footer {
        margin-bottom: 25px;
        margin-top: 10px;
        padding: ${({ sidebarShowing }) => (sidebarShowing ? '0 40px' : '0')};

        @media screen and (min-width: 1024px) {
          padding: 0 40px;
        }
      }
    }
  }

  .ds__content {
    transition: margin-left 0.8s;

    &--floating-burger {
      display: ${({ sidebarShowing }) => (sidebarShowing ? 'none' : 'block')};
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .ds__sidebar__navs {
      > span:nth-child(2) {
        overflow: hidden;
        transition: opacity 1s;
        width: ${({ sidebarShowing }) => (sidebarShowing ? 'auto' : '0px')};
        height: ${({ sidebarShowing }) => (sidebarShowing ? 'auto' : '0px')};
        opacity: ${({ sidebarShowing }) => (sidebarShowing ? '1' : '0')};
          // display: ${({ sidebarShowing }) => (sidebarShowing ? 'inherit' : 'none')};
      }
    }

    .ds__sidebar {
      &-content {
        transition: width 0.8s;
        width: ${({ sidebarShowing }) => (!sidebarShowing ? 'var(--sm-width)' : '281px')};
        height: 100vh;
        transform: translate(0px);
      }
    }

    .ds__content {
      margin-left: var(--sm-width);
    }
  }

  @media screen and (min-width: 1024px) {
    .ds__sidebar {
      &-overlay {
        display: none;
      }

      &-content {
        width: var(--width);
        height: 100vh;
        transform: translate(0px);
      }
    }

    .ds__content {
      margin-left: var(--width);

      &--floating-burger {
        display: none;
      }
    }

    .ds__sidebar__navs {
      > span:nth-child(2) {
        display: inherit;
        width: auto;
        height: auto;
        opacity: 1;
      }
    }

    .ds__sidebar-content--footer {
      margin-bottom: 75px;
    }
`;

export default DashboardLayout;
