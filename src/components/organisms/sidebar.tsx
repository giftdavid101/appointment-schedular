import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../atoms/Typography';
import {
  AnkCalendarIcon,
  AnkLoadingIcon,
  AnkPlusIcon,
  AnkSearchIcon,
  AnkSettingsIcon,
  AnkUsersIcon,
} from '../../assets/icons';
import { NavLink } from 'react-router-dom';

const sidebarMenus = [
  {
    heading: 'quick actions',
    children: [
      { icon: AnkSearchIcon, text: 'search anything', link: '' },
      { icon: AnkPlusIcon, text: 'add new patients', link: '' },
    ],
  },
  {
    heading: 'manage',
    children: [
      { icon: AnkCalendarIcon, text: 'calendar', link: '/' },
      { icon: AnkUsersIcon, text: 'manage patients', link: '/patients' },
      { icon: AnkSettingsIcon, text: 'settings', link: '/settings' },
    ],
  },
  {
    heading: 'style guide',
    children: [{ icon: AnkLoadingIcon, text: 'components', link: '/components' }],
    hidden: !(process.env.NODE_ENV === 'development'),
  },
];

const Div = (props: any) => <div {...props} />;

const Sidebar: FC<{ sidebarOpen: boolean; setSidebar: (res: boolean) => void }> = ({
  sidebarOpen,
}) => {
  const callback = (selection: any) => () => {
    console.log(selection);
  };

  return (
    <SidebarStyle sidebarShowing={sidebarOpen}>
      <div className={'SidebarStyle__sidebar'}>
        {sidebarMenus.map(
          ({ heading, children, hidden }, i) =>
            !hidden && (
              <div key={i}>
                <Typography
                  className={'SidebarStyle__sidebar-heading'}
                  weight={400}
                  color={'darkGrey'}
                  size={'small'}
                  transform={'capitalize'}
                  style={{ paddingBottom: '32px' }}
                >
                  {heading}
                </Typography>
                <div>
                  {children.map(({ icon: Icon, text, link }, i) => {
                    const Wrapper: any = link ? NavLink : Div;
                    return (
                      <Wrapper
                        key={i}
                        exact
                        className={'SidebarStyle__sidebar-navs ds__sidebar__navs'}
                        onClick={callback({ text, link })}
                        activeClassName={'sidebar-is-selected'}
                        to={link}
                      >
                        <span>
                          <Icon />
                        </span>
                        <span>
                          <Typography transform={'capitalize'} weight={700} size={'small'}>
                            {text}
                          </Typography>
                        </span>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            )
        )}
      </div>
    </SidebarStyle>
  );
};
const SidebarStyle = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .SidebarStyle {
    &__sidebar {
      padding: ${({ sidebarShowing }) => (sidebarShowing ? '0 40px' : '0 15px')};

      &-heading {
        white-space: nowrap;
      }

      &-navs {
        svg {
          display: flex;

          path {
            fill: var(--grey);
          }
        }

        white-space: nowrap;
        color: var(--grey);

        > span:nth-child(2) {
          margin-left: 9px;
        }

        padding-bottom: 32px;
        display: flex;
        align-items: center;
      }
    }
  }

  .sidebar-is-selected {
    svg {
      path {
        fill: var(--white);
      }
    }

    color: var(--white);

    padding: 11px 14px;
    background: var(--orange);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: ${({ sidebarShowing }) => (sidebarShowing ? undefined : 'center')};
    overflow: hidden;

    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    .SidebarStyle__sidebar-navs {
      justify-content: ${({ sidebarShowing }) => (sidebarShowing ? undefined : 'center')};
    }

    .SidebarStyle__sidebar-heading {
      visibility: ${({ sidebarShowing }) => (sidebarShowing ? 'visible' : 'hidden')};
    }
  }
  @media screen and (min-width: 1024px) {
    .SidebarStyle__sidebar-heading {
      visibility: visible;
    }

    .SidebarStyle__sidebar {
      padding: 0 40px;

      &-navs {
        justify-content: unset;
      }
    }
  }
`;

export default Sidebar;
