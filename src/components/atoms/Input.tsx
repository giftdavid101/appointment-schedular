import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';
import caretDown from '../../assets/icons/chevronUp.svg';
import calendar from '../../assets/icons/darkCalendar.svg';
import 'react-datepicker/dist/react-datepicker.min.css';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

interface InputT extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  suffix?: React.ReactElement;
}

type SelectT = FC<
  InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    suffix?: any;
    error?: boolean;
    borderless?: boolean;
    value?: string | { label: string; value: any };
    options: Array<{ label: string; value: any }>;
  }
>;

type InputBaseT = React.FC<InputT> & {
  Date: React.FC<ReactDatePickerProps & { label: string; error?: string; time?: boolean }>;
  Radio: React.FC<InputT>;
  Select: SelectT;
};

const Input: InputBaseT = ({ suffix, value, name, label, error, ...rest }) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} />
      <span className={'error-message'}>{error}</span>
    </InputStyle>
  );
};

const Select: SelectT = ({
  label,
  options,
  name,
  placeholder,
  borderless,
  value,
  error,
  ...rest
}) => {
  const selectedValue = typeof value === 'string' ? value : value?.value;

  return (
    <InputSelectStyle style={{ border: error ? '1px solid white' : 'inherit' }}>
      <label htmlFor={name}>{label}</label>
      <select
        placeholder={placeholder}
        {...rest}
        value={selectedValue}
        className={'v-input-input appearance-none'}
        style={{
          background: `url(${caretDown}) no-repeat`,
          backgroundPosition: 'calc(100% - 26px) 50%',
          paddingRight: 58,
          backgroundColor: '#f9f9f9',
        }}
      >
        <option value={''} selected disabled>
          {placeholder ?? 'Select...'}
        </option>
        {options.map(({ value, label }) => (
          <option value={value}>{label} </option>
        ))}
      </select>
      <span className={'error-message'}>{error}</span>
    </InputSelectStyle>
  );
};

const InputDate: React.FC<
  ReactDatePickerProps & { label: string; error?: string; time?: boolean }
> = ({ name, label, error, onChange, className, time, ...props }) => {
  return (
    <InputDateStyle>
      <label htmlFor={name}>{label}</label>
      <div
        style={{
          background: `url(${time ? caretDown : calendar}) no-repeat`,
          backgroundPosition: 'calc(100% - 26px) 50%',
          paddingRight: 58,
          backgroundColor: '#f9f9f9',
        }}
      >
        <DatePicker
          id={name}
          name={name}
          onChange={onChange}
          className={time ? `input-date__lowercase ${className}` : className}
          dateFormat={time ? 'h:mm aa' : 'd MMMM, yyyy'}
          showTimeSelect={time}
          showTimeSelectOnly={time}
          {...props}
        />
      </div>
      <span className={'error-message'}>{error}</span>
    </InputDateStyle>
  );
};

const InputRadio: React.FC<InputT> = ({ name, ...props }) => {
  return (
    <InputRadioStyle>
      <Input className={'radio'} name={name} {...props} type={'radio'} />
    </InputRadioStyle>
  );
};

Input.Date = InputDate;
Input.Radio = InputRadio;
Input.Select = Select;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


  label {
    font-family: 'Nunito', sans-serif;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
    //color:#E3E3E7;
  }

  input {
    min-width: 100px;
    width: 100%;
    padding: 14px 17px;
    background: #f9f9f9;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;

    ::placeholder {
      color: #cccccc;
      font-weight: 700;
      font-size: 14px;
      font-family: 'Nunito', sans-serif
`;

const InputDateStyle = styled(InputStyle)`
  .input-date__lowercase {
    text-transform: lowercase;
  }
`;

const InputSelectStyle = styled.div`
  select {
    //min-width: 200px;
    width: 100%;
    padding: 19px 17px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    appearance: none;
    color: #828194;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    //color: #E3E3E7;
  }

  label {
    font-family: 'Nunito', sans-serif;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
  }

  option {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }
`;

const InputRadioStyle = styled.div``;

export default Input;
