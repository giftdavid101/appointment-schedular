import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../atoms/Typography';
import Input from '../atoms/Input';
import { AnkCancelIcon } from '../../assets/icons';

const AddAppointmentForm = () => {
  return (
    <AFStyle>
      <div className="modal-heading">
        <Typography size={'large'}>Add Appointment</Typography>
        <div className={'close-modal-btn'}>
          <AnkCancelIcon />
        </div>
      </div>
      <form action="" className="AF_Style__form">
        <Input.Select
          label={'type'}
          options={[{ label: 'option', value: 'another' }]}
          name={'type'}
        />
        <div>
          <div className="AF_Style__form--group-input">
            <Input.Date onChange={() => {}} label={'From'} />
            <Input.Date time onChange={() => {}} label={'.'} />
          </div>
          <div className="AF_Style__form--group-input">
            <Input.Date onChange={() => {}} label={'To'} />
            <Input.Date time onChange={() => {}} label={'.'} />
          </div>
        </div>
        <Input.Select
          label={'type'}
          options={[{ label: 'option', value: 'another' }]}
          name={'type'}
        />
        <Input.Select
          label={'type'}
          options={[{ label: 'option', value: 'another' }]}
          name={'type'}
        />
        <Input name={'note'} label={'note'} placeholder={'new appointment'} />
        <button className={'AF_Style__form--btn'} type={'submit'}>
          <Typography size={'large'}>Save</Typography>
        </button>
      </form>
    </AFStyle>
  );
};
const AFStyle = styled.div`
  .AF_Style {
    &__form {
      display: grid;
      gap: 10px;

      &--btn {
        padding: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--black);
        border: none;
        color: white;
        border-radius: 10px;
        width: 100%;
      }

      &--group-input {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        > div:nth-child(2) label {
          color: white;
        }
      }
    }
  }
`;

export default AddAppointmentForm;
