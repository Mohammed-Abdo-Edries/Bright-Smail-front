import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import appointmentData from '../data/AppointmentData'
import AppointmentType from '../data/AppointmentType';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[startDate.slice(6, 7) - 1];
    const year = startDate.slice(0, 4);
    const day = startDate.slice(8);
    const date = day + "/" + month + "/" + year;
    const today = new Date();
    const disable = today.toISOString().slice(0, 10);
    today.setDate(90)

    return (
        <div className="appointmentInfo">
            <div className="patientAppointment">
                <div className="appointmentText">
                    <h1>Appointment</h1>
                        <div>
                            <input type="date" className='w-40' min={disable} max={today.toISOString().slice(0, 10)} value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="chose a date => " />
                        </div>
                </div>                        
            </div>
            <div className="appointmentDetails">
                <h3>Available Appointment on {date} </h3>
            </div>
            <div className="container">
                <div className="row">
                    {
                        appointmentData.map(app => <AppointmentType key={app.key}
                            appointmentData={app}
                            date={date}
                            />
                            
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointment;