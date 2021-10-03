import React, { useState } from 'react';
import DoctorsSnippet from '../components/molecules/doctorsSnippet';
import ScheduleSnippet from '../components/molecules/scheduleSnippet';
import PatientSnippetAction from '../components/molecules/patientSnippetAction';
import Input from '../components/atoms/Input';
import styled from 'styled-components/macro';
import Typography from '../components/atoms/Typography';
import AddAppointmentForm from '../components/organisms/addApointmentForm';
import PatientScheduleOverview from '../components/molecules/patientScheduleOverview';

const TestComponents = () => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

  return (
    <TestComponentStyling>
      <div className={'section'}>
        <label htmlFor="">Snippets</label>
        <div className="section-group">
          <DoctorsSnippet
            img={'user.png'}
            name={'Marvin T.'}
            background={'#D3E5FF'}
            alt={'marvin'}
          />
          <ScheduleSnippet
            appointmentType={'dental check'}
            patientName={'joshua enyi-christopher'}
            color={'cyan'}
          />
          <PatientSnippetAction img={'user.png'} alt={'user'} name={'Arnold Ronald'} />
        </div>
      </div>
      <div className="section">
        <label htmlFor="">Inputs</label>
        <div className="gap">
          <Input name={'Notes'} label={'Notes'} placeholder={'New Appointment'} />
          <Input.Select
            options={[{ label: 'Dr Afolabi', value: 'Dr Afolabi' }]}
            label={'Attending Physical'}
          />
          <Input.Date
            label={'from'}
            name={'from'}
            selected={from}
            onChange={(d: Date) => setFrom(d)}
          />
          <Input.Date
            time
            label={'to'}
            name={'to'}
            selected={to}
            timeIntervals={15}
            onChange={(d: Date) => setTo(d)}
          />
        </div>
      </div>
      <div className="section">
        <label htmlFor="">Typography</label>
        <div className="gap">
          <Typography size={'large'}>Hello World!</Typography>
          <Typography size={'medium'}>Hello World!</Typography>
          <Typography size={'small'}>Hello World!</Typography>
          <Typography size={'xSmall'}>Hello World!</Typography>
          <Typography transform={'uppercase'}>Hello World!</Typography>
          <Typography transform={'capitalize'}>Hello World!</Typography>
          <Typography transform={'lowercase'}>Hello World!</Typography>
          <Typography weight={'bold'}>Hello World!</Typography>
        </div>
      </div>
      <div className="section">
        <label htmlFor="">Add appointment form</label>
        <div style={{ padding: 20, borderRadius: 10, backgroundColor: 'white' }}>
          <AddAppointmentForm />
        </div>
      </div>
      <div className="section">
        <div style={{ borderRadius: 10, backgroundColor: 'white' }}>
          <PatientScheduleOverview />
        </div>
      </div>
    </TestComponentStyling>
  );
};

const TestComponentStyling = styled.div`
  padding: 20px;
  padding-bottom: 50px;

  font-family: 'Nunito', sans-serif;

  .section {
    margin-bottom: 20px;
    padding: 10px;

    > label {
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    display: flex;
    flex-direction: column;

    &:nth-child(even) {
      background: lightblue;
    }
  }

  .gap {
    display: grid;
    gap: 20px;
  }

  .section-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media screen and (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default TestComponents;
