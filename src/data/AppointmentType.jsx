import Popup from "reactjs-popup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const AppointmentType = (props) => {
    const [returnedData, setReturnedData] = useState(null)
    const { title, time, shortDetails } = props.appointmentData;
    const date = props.date;
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        const key = (length=6)=>Math.random().toString(20).substr(2, length);
        const appointmentInfo = { title, key: key(), details: data, action: "notVisited", action1: "pending"}
        console.log(appointmentInfo);
        // fetch("https://guarded-anchorage-08361.herokuapp.com/addAppointment", {
        //     method: "post",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(appointmentInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setReturnedData(data)
        //         reset()
        //     })
    };

    return (
        <div className="col-md-4 appointmentType">
            <div style={{ width: '18rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                <div>
                    <h5>{title}</h5>
                    <p className="mb-2 text-muted">{time}</p>
                    <p><small>{shortDetails}</small></p>
                    <Popup trigger={<button>BOOK APPOINTMENT</button>} contentStyle={{ width: "600px", border: "none", background: "red" }} modal closeOnDocumentClick>
                        <div className="popupDetails">
                            <h5>{title}</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="time" className="takeInput" placeholder="Time" defaultValue={time} {...register} readOnly={true} />
                                <br />
                                <br />
                                <input name="name" className="takeInput" placeholder="Your Name" />
                                <br />
                                
                                <br />
                                <input name="phoneNumber" className="takeInput" placeholder="Phone Number"  />
                                <br />
                                <br />
                                <input name="email" className="takeInput" placeholder="Email" />
                                <br />
                                <br />
                                <input name="date" className="takeInput" placeholder="dd/mm/yyyy" value={date} readOnly={true} />
                                <br />
                                <br />
                                <div className="submitBtn">
                                    <input type="submit" value="Send" />
                                </div>
                                {
                                    returnedData &&
                                    <div>
                                        <p>Your Appointment Id: {returnedData._id}</p>
                                        <a href="/">Go to Home Page</a>
                                    </div>
                                }
                            </form>
                        </div>
                    </Popup>

                </div>
            </div>
        </div>
    );
};

export default AppointmentType