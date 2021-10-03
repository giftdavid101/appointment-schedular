import React from 'react';
import styled from 'styled-components/macro';

type transformTextT = 'capitalize' | 'uppercase' | 'lowercase';
type fontWeightT = 400 | 700 | 'bold';
type fontSizesT = 'xSmall' | 'small' | 'medium' | 'large';
// | 'large'
// | 'xLarge'
// | 'xxLarge'
// | 'xxxLarge'
// | 'medium'
// | 'mediumOne'
// | 'mediumTwo'
// | 'xSmall'
// | 'xxxSmall'
// | 'mediumLarge'
// | 'mediumSmall'
// | 'largest'
// | 'xLargest';
export type colorT =
  | 'white'
  | 'darkGreen'
  | 'darkGrey'
  | 'grey'
  | 'brown'
  | 'cyan'
  | 'blackTwo'
  | 'orange'
  | 'default';

export const TypoProps = {
  fontSize: {
    xSmall: 10,
    small: 12,
    medium: 14,
    large: 18,
    default: 16,
  },
  color: {
    white: '#FFFFFF',
    darkGreen: '#67760E',
    darkGrey: '#7E909B',
    grey: '#666666',
    brown: '#76400E',
    cyan: '#0E6376',
    blackTwo: '#282828',
    orange: '#F97B5C',
    default: '#000000',
  },
};

const Typography: React.FC<{
  className?: string;
  weight?: fontWeightT;
  size?: fontSizesT;
  style?: object;
  transform?: transformTextT;
  color?: colorT;
}> = ({ children, className, transform, style, weight, size, color }) => {
  return (
    <TypographyWrapper
      className={className}
      style={{
        fontSize: TypoProps.fontSize[size || 'default'],
        textTransform: transform,
        color: color ? TypoProps.color[color || 'default'] : 'inherit',
        fontWeight: weight,
        ...style,
      }}
    >
      {children}
    </TypographyWrapper>
  );
};

const TypographyWrapper = styled.p`
  font-family: 'Nunito', sans-serif;
`;

export default Typography;
