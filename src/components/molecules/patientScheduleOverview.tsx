import React from 'react';
import styled from 'styled-components/macro';
import {
  AnkCancelIcon,
  AnkCircleMinusIcon,
  AnkClockIcon,
  AnkEditIcon,
  AnkLoadingIcon,
  AnkUserIcon,
} from '../../assets/icons';
import Typography from '../atoms/Typography';
import PatientSnippetAction from './patientSnippetAction';
import RoundedImage from '../atoms/roundedImage';

const PatientScheduleOverview = () => {
  return (
    <PSOverviewStyling>
      <div style={{ paddingBottom: 25 }}>
        <div className="modal-heading">
          <Typography size={'large'} transform={'capitalize'}>
            full checkup
          </Typography>
          <div className="close-modal-btn">
            <AnkCancelIcon />
          </div>
        </div>
        <div className={'PS__details'}>
          <PatientSnippetAction img={'./user.png'} alt={''} name={'Gift David'} />
          <div className={'PS__details--time'}>
            <AnkClockIcon />
            <Typography>20 August, 2021 8:30am - 20 August, 2020 9:30am </Typography>
          </div>
          <div className={'PS__details--time'}>
            <AnkUserIcon />
            <div className={'PS__details--time'}>
              <RoundedImage size={'small'} style={{ marginLeft: 10 }} src={'./user.png'} alt={''} />
              <Typography>Dr. Gift David</Typography>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid #CCCCCC' }} />
      <div className={'PS__actions'}>
        <div>
          <button>
            check in <AnkLoadingIcon />
          </button>
          <button>
            cancel <AnkCircleMinusIcon />
          </button>
        </div>
        <AnkEditIcon />
      </div>
    </PSOverviewStyling>
  );
};

const PSOverviewStyling = styled.div`
  > div:first-child,
  > div:last-child {
    padding: 0 20px;
  }

  .PS {
    &__details {
      display: grid;
      gap: 10px;

      &--time {
        display: flex;
        align-items: center;

        > p {
          margin-left: 10px;
        }
      }
    }

    &__actions {
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;

        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 5px;
          border: none;
          padding: 10px;
          min-width: 96px;
          text-transform: capitalize;
          background-color: var(--lighter-grey);
        }

        button:first-child {
          margin-right: 20px;
          background-color: var(--peach);
        }
      }
    }
  }
`;

export default PatientScheduleOverview;
