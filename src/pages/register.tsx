import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
// import { Student } from '../interfaces/Student';

interface Student {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address_line_1: string;
    address_line_2: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    password: string;
    username: string;
}

export const Register: React.FC = () => {
    const [formData, setFormData] = useState<Student>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address_line_1: '',
        address_line_2: '',
        address_city: '',
        address_state: '',
        address_zip: '',
        password: '',
        username: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // console.log(formData);
    };

    const saveStudentData = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/new_student/save", formData)
            console.log(response.data);
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address_line_1: '',
                address_line_2: '',
                address_city: '',
                address_state: '',
                address_zip: '',
                password: '',
                username: ''
            });
        }
        catch(error) {
            console.log("Error saving student");
        }
    }

    useEffect(() => {
        
    },[])
    return (

        <div className='container'>
            <br />
            <br />
            <center>
                <form onSubmit={saveStudentData}>

                
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                <div >   
                    <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    />
                </div>
                <div >
                    <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    />
                </div>
                <div >   
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                </div>
                <div>
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    />
                </div>
            </div>

            <br />
            <div className='container'>
                <h3>
                    Address Information
                </h3>
                <br />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    <div>   
                        <input
                        type="text"
                        name="address_line_1"
                        value={formData.address_line_1}
                        onChange={handleChange}
                        placeholder="Street Address"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_line_2"
                        value={formData.address_line_2}
                        onChange={handleChange}
                        placeholder="Apt/Floor/Room"
                        />
                    </div>
                    <div>   
                        <input
                        type="text"
                        name="address_city"
                        value={formData.address_city}
                        onChange={handleChange}
                        placeholder="City"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_state"
                        value={formData.address_state}
                        onChange={handleChange}
                        placeholder="State"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_zip"
                        value={formData.address_zip}
                        onChange={handleChange}
                        placeholder="Zip Code"
                        />
                    </div>

                </div>
            </div>
<br />
            <div className='container'>
                <h3>
                    Username and Password
                </h3>
                <br />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    <div>   
                        <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        name="confirm_password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='container'>
                
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>
                    <div></div>
                    <div><button className='btn btn-secondary'>Submit</button></div>
                    <div></div>
                </div>
            </div>
            </form>
            </center>
            
            
                
        </div>
    );
};


