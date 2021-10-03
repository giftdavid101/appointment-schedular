import React from 'react';
import styled from 'styled-components/macro';
import Typography, { colorT, TypoProps } from '../atoms/Typography';
import { hexToHSL } from '../../helpers/hexToHsl';
import { AnkChevronUpIcon, AnkDotIcon } from '../../assets/icons';

type ScheduleSnippetT = {
  appointmentType: string;
  patientName: string;
  color: colorT;
};
const ScheduleSnippet: React.FC<ScheduleSnippetT> = ({ appointmentType, patientName, color }) => {
  const backgroundColor = (color: string) => {
    const typoColor: any = TypoProps.color;
    return hexToHSL(typoColor[color]).lighter;
  };
  return (
    <ScheduleSnippetStyle style={{ background: backgroundColor(color) }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 8,
        }}
      >
        <Typography
          style={{ marginRight: 8 }}
          transform={'capitalize'}
          size={'small'}
          color={color}
          weight={700}
        >
          {appointmentType}
        </Typography>
        <Typography truncate transform={'capitalize'} size={'xSmall'} weight={400} color={'grey'}>
          {patientName}
        </Typography>
      </div>

      <div style={{ display: 'flex' }}>
        <AnkDotIcon style={{ fill: '#3592FF', marginRight: 8 }} />
        <AnkChevronUpIcon />
      </div>
    </ScheduleSnippetStyle>
  );
};
const ScheduleSnippetStyle = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  padding: 2.5px 13px;
  cursor: pointer;
  min-width: 100px;
`;

export default ScheduleSnippet;
