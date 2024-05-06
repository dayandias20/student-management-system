import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Student } from '../interfaces/Student';
import axios from 'axios';

const EditStudent = () => {
  
  const UPDATE_STUDENT_URL = 'http://localhost:8080/student/update_student/';
  const { id } = useParams<{ id: string }>();
  
  const location = useLocation();
  const navigate = useNavigate();
  const studentInfo: Student[] = location.state?.studentInfo || [];
  
  const [ firstName, setFirstName ] = useState<String>('');
  const [ lastName, setLastName ] = useState<String>('');
  const [ email, setEmail ] = useState<String>('');
  const [ phone, setPhone ] = useState<String>('');
  const [ addressLine1, setAddressLine1 ] = useState<String>('');
  const [ addressLine2, setAddressLine2 ] = useState<String>('');
  const [ addressCity, setAddressCity ] = useState<String>('');
  const [ addressState, setAddressState]  = useState<String>('');
  const [ addressZip, setAddressZip ] = useState<String>('');
  
  const updateStudent = async () => {
    
    try{
      const updatedStudent = {
        id: id,
        first_name: firstName || studentInfo[0].first_name,
        last_name: lastName || studentInfo[0].last_name,
        email: email || studentInfo[0].email,
        phone: phone || studentInfo[0].phone,
        address_line_1: addressLine1 || studentInfo[0].address_line_1,
        address_line_2: addressLine2 || studentInfo[0].address_line_2,
        address_city: addressCity || studentInfo[0].address_city,
        address_state: addressState || studentInfo[0].address_state,
        address_zip: addressZip || studentInfo[0].address_zip
      };
      const response = await axios.post(UPDATE_STUDENT_URL, updatedStudent, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(studentInfo[0])
  }, [])
  return (
    <>
            <div className="container">
              <form>
                {studentInfo.map(student => (
                <div key={student.id} >
                <center>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1">
                        <div className="col">
                            <h3>Edit student information for {student.first_name} </h3>
                        </div>
                    </div>
                </center>

                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-4">
                        <div >   
                          <center>
                            <div><label>First Name</label></div>
                            <div> <input
                            type="text"
                            name="first_name"
                            placeholder={student.first_name}
                            onChange={(e) => { setFirstName(e.target.value)
                             }}
                            /></div>
                          </center>
                        </div>
                        <div >
                          <center>
                            <div><label>Last Name</label></div>
                            <div><input
                            type="text"
                            name="last_name"
                            placeholder={student.last_name}
                            onChange={(e) => { setLastName(e.target.value)
                             }}
                            /></div>
                          </center>
                        </div>
                        <div>   
                        <center>
                          <div><label>Email</label></div>
                          <div><input
                            type="text"
                            name="email"
                            placeholder={student.email}
                            onChange={(e) => setEmail(e.target.value)}
                            /></div>
                          </center>
                        </div>
                        <div>
                        <center>
                          <div><label>Phone</label></div>
                          <div><input
                            type="text"
                            name="phone"
                            placeholder={student.phone}
                            onChange={(e) => setPhone(e.target.value)}
                            /></div>
                          </center>
                        </div>
                    </div>
                    <br />
            <div className='container'>
                <center>
                    <h3>
                    Address Information
                    </h3>
                </center>
                
                <br />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    <div>   
                      <center>
                        <div><label>Address Line 1</label></div>
                        <div><input
                        type="text"
                        name="address_line_1"
                        placeholder={student.address_line_1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                        /></div>
                      </center>
                    </div>
                    <div>
                      <center>
                          <div><label>Address Line 2</label></div>
                          <div> <input
                          type="text"
                          name="address_line_2"
                          placeholder={student.address_line_2}
                          onChange={(e) => setAddressLine2(e.target.value)}
                          /></div>
                         
                        </center>
                    </div>
                    <div>   
                      <center>
                        <div><label>City</label></div>
                        <div><input
                        type="text"
                        name="address_line_1"
                        placeholder={student.address_city}
                        onChange={(e) => setAddressCity(e.target.value)}
                        /></div>
                      </center>
                    </div>
                    <div>
                    <center>
                      <div><label>State</label></div>
                        <div><input
                        type="text"
                        name="address_state"
                        placeholder={student.address_state}
                        onChange={(e) => setAddressState(e.target.value)}
                        /></div>
                      </center>
                    </div>
                    <div>
                    <center>
                      <div><label>Zip Code</label></div>
                        <div>
                        <input
                        type="text"
                        name="address_zip"
                        placeholder={student.address_zip}
                        onChange={(e) => setAddressZip(e.target.value)}
                        />
                        </div>
                      </center>
                    </div>
                </div>
            </div>
                </div>
                    ))}
              </form>
            </div>
            <br />
            <center>
                <button onClick={updateStudent}>Save Updates</button>
            </center>
            
        </>
  );
};

export default EditStudent;
