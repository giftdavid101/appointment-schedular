import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components/macro';

export type RoundedImgT = { size?: 'small' | 'large' };

const RoundedImage: FC<
  RoundedImgT & { src: string; alt: string; className?: string; style?: CSSProperties }
> = ({ size, src, alt, ...rest }) => {
  return (
    <RoundedImageStyling size={size} {...rest}>
      <img src={src} alt={alt} />
    </RoundedImageStyling>
  );
};

const RoundedImageStyling = styled.div<RoundedImgT>`
  --small-img: 25px;
  --default-img: 50px;

  > img {
    border-radius: calc(
      ${({ size }) => (size === 'small' ? 'var(--small-img) / 2' : 'var(--default-img) / 2')}
    );
    width: ${({ size }) => (size === 'small' ? 'var(--small-img)' : 'var(--default-img)')};
    min-width: ${({ size }) => (size === 'small' ? 'var(--small-img)' : 'var(--default-img)')};
    height: ${({ size }) => (size === 'small' ? 'var(--small-img)' : 'var(--default-img)')};
    object-fit: cover;
    overflow: hidden;
  }
  height: ${({ size }) => (size === 'small' ? 'var(--small-img)' : 'var(--default-img)')};
`;

export default RoundedImage;
