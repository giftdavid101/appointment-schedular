import React, { useState } from 'react';
import DoctorsSnippet from '../../components/molecules/doctorsSnippet';
import ScheduleSnippet from '../../components/molecules/scheduleSnippet';
import PatientSnippetAction from '../../components/molecules/patientSnippetAction';
import Input from '../../components/atoms/Input';

const ManagePatients = () => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  return (
    <div>
      manage patients
      <DoctorsSnippet img={'user.png'} name={'Marvin T.'} background={'#D3E5FF'} alt={'marvin'} />
      <ScheduleSnippet
        appointmentType={'dental check'}
        patientName={'joshua enyi-christopher'}
        color={'cyan'}
      />
      <PatientSnippetAction img={'user.png'} alt={'user'} name={'Arnold Ronald'} />
      <Input name={'Notes'} label={'Notes'} placeholder={'New Appointment'} />
      <Input.Select
        options={[{ label: 'Dr Afolabi', value: 'Dr Afolabi' }]}
        label={'Attending Physical'}
      />
      <Input.Date label={'from'} name={'from'} selected={from} onChange={(d: Date) => setFrom(d)} />
      <Input.Date
        time
        label={'to'}
        name={'to'}
        selected={to}
        timeIntervals={15}
        onChange={(d: Date) => setTo(d)}
      />
    </div>
  );
};

export default ManagePatients;
