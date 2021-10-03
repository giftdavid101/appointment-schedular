import React from 'react';
import styled from 'styled-components/macro';
import RoundedImage from '../atoms/roundedImage';
import Typography from '../atoms/Typography';
import { AnkShareIcon } from '../../assets/icons';

type PatientSnippetActionT = {
  img: string;
  alt: string;
  name: string;
  colors?: string;
};

const PatientSnippetAction: React.FC<PatientSnippetActionT> = ({ img, alt, name }) => {
  return (
    <PSAStyle>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {<RoundedImage size={'small'} src={img} alt={alt} />}
        <Typography
          style={{ lineHeight: '16px', marginLeft: '12px' }}
          color={'default'}
          className={'ds__name'}
        >
          {name}
        </Typography>
      </div>
      <AnkShareIcon />
    </PSAStyle>
  );
};
const PSAStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px 23px 28px;
  border-radius: 10px;
  background: #fff1d6;
`;

export default PatientSnippetAction;
