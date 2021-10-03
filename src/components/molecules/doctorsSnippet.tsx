import React from 'react';
import styled from 'styled-components/macro';
import { AnkVerticalEllipsisIcon } from '../../assets/icons';
import RoundedImage from '../atoms/roundedImage';
import Typography from '../atoms/Typography';

type DoctorsSnippetT = {
  img: string;
  alt: string;
  name: string;
  background: string;
  colors?: string;
};

const DoctorsSnippet: React.FC<DoctorsSnippetT> = ({ img, name, background, alt }) => {
  const _name = (name: string) => name;
  return (
    <DoctorsSnippetStyle style={{ background: background || 'cyan' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {<RoundedImage size={'small'} src={img} alt={alt} />}
        <Typography style={{ lineHeight: '16px' }} color={'default'} className={'ds__name'}>
          {_name(name)}
        </Typography>
      </div>
      <AnkVerticalEllipsisIcon />
    </DoctorsSnippetStyle>
  );
};
const DoctorsSnippetStyle = styled.div`
  padding: 3px 18px 2px 5px;
  min-width: 179px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;

  .ds__name {
    margin-left: 8px;
  }
`;

export default DoctorsSnippet;
