import React, { FC } from 'react';
import RoundedImage from '../atoms/roundedImage';
import Typography from '../atoms/Typography';
import styled from 'styled-components/macro';

const Account: FC<{ sidebarShowing: boolean }> = ({ sidebarShowing }) => {
  const showProfile = () => {};
  return (
    <AccountStyling sidebarShowing={sidebarShowing} className={'ds__sidebar__navs'}>
      <span>
        <RoundedImage src={'./user.png'} alt={'user name'} style={{ marginRight: 15 }} />
      </span>
      <span>
        <div className={'ds__user-account'} onClick={showProfile}>
          <Typography weight={700} size={'medium'}>
            Acme Clinic, Inc. Lorem ipsum.
          </Typography>
          <Typography weight={700} size={'small'}>
            Marvin Tunji-ola
          </Typography>
          <Typography color={'orange'} weight={700} size={'xSmall'}>
            View Profile
          </Typography>
        </div>
      </span>
    </AccountStyling>
  );
};

const AccountStyling = styled.div<{ sidebarShowing: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ sidebarShowing }) => (sidebarShowing ? undefined : 'center')};
  padding: ${({ sidebarShowing }) => (sidebarShowing ? '0 40px' : '0')};

  @media screen and (min-width: 1024px) {
    padding: 0 40px;
  }
`;
export default Account;
