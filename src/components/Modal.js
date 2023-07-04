import React, { useState } from 'react';
import Calendar from './Calendar';
import { format } from 'date-fns';
import { RxCross1 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Modal = ({ handleDrawer, register, handleSubmit, data, errors, onSubmit }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'yyyy-MM-dd');
    // const { register, handleSubmit, data, reset, formState: { errors } } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    //     reset();
    //     if (data) {
    //         toast.success('Consultation Booked');
    //     }
    // };


    return (
        <div className="flex items-center justify-end overflow-auto bg-gray-500 bg-opacity-75 shadow-2xl">
            <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Book a free consultation</h2>
                    {
                        data ?
                            <button type='button' onClick={handleDrawer} className='pointer-events-none' >
                                <RxCross1 />
                            </button>
                            :
                            <button type='button' onClick={handleDrawer} >
                                <RxCross1 />
                            </button>
                    }

                </div>
                <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate} />
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name='name'
                            {...register("name", { required: true })}
                            className="py-2 pl-2 bg-gray-100 rounded"
                        />
                        {errors.name && <span>This field is required</span>}

                        <input
                            type="email"
                            placeholder="Your Email"
                            name='email'
                            {...register("email", { required: true })}
                            className="py-2 pl-2 my-3 bg-gray-100 rounded"
                        />
                        {errors.email && <span>This field is required</span>}

                        <input
                            type="text"
                            value={date}
                            name='date'
                            {...register("date", { required: true, disabled: true })}
                            className="py-2 pl-2 bg-gray-100 rounded"
                        />
                        {errors.date && <span>This field is required</span>}
                        <select {...register("time", { required: true })}
                            placeholder="Mention your preferred time"
                            name='time'
                            className="py-3 pl-1 my-3 bg-gray-100 rounded"
                        >
                            <option value="10am">10am</option>
                            <option value="11am">11am</option>
                            <option value="12pm">12pm</option>
                            <option value="6pm">6pm</option>
                            <option value="7pm">7pm</option>
                            <option value="8pm">8pm</option>
                        </select>
                        {errors.time && <span>This field is required</span>}

                        <button type="submit" className="navBtn">Book Consultation</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Modal;