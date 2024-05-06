import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Student } from "../interfaces/Student";
import { Course } from "../interfaces/Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StudentCourses } from "../components/student_courses";

export const StudentDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const GET_STUDENT_BY_ID_URL = 'http://localhost:8080/student/get_student/';
    const DELETE_STUDENT_BY_ID_URL = 'http://localhost:8080/student/delete/';
    const GET_COURSES_URL = `http://localhost:8080/student/${id}/courses`;
    
    const [ studentInfo, setStudentInfo ] = useState<Student[]>([]); 
    const [ studentCourses, setStudentCourses ] = useState<Course[]>([]);

    const getCoursesOfStudent = async () => {
        const response = await axios.get(GET_COURSES_URL);
        console.log(response.data);
        setStudentCourses(response.data)
    }

    const deleteStudent = async() =>{
        try {
            const response = await axios.delete(`${DELETE_STUDENT_BY_ID_URL}${id}`)
            console.log(response.data);
            navigate('/home')
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`${GET_STUDENT_BY_ID_URL}${id}`);
                setStudentInfo([response.data]);
            }
            catch(error) {
                console.log(error);
            }
        };
        fetchStudent();
        getCoursesOfStudent();
    }, [id]);

    return(
        <>
        <center>
            <div className="container">
                {studentInfo.map(student => (
                <>
                
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1">
                        <div key={student.id} className="col">
                            <h3>Student information for {student.first_name} </h3>
                        </div>
                    </div>
                

                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-4">
                        <div >   
                            <label>First Name</label>
                            <input
                            type="text"
                            name="first_name"
                            value={student.first_name}
                            disabled
                            />
                        </div>
                        <div >
                            <label>Last Name</label>
                            <input
                            type="text"
                            name="last_name"
                            value={student.last_name}
                            disabled
                            />
                        </div>
                        <div>   
                            <label>Email</label>
                            <input
                            type="text"
                            name="email"
                            value={student.email}
                            disabled
                            />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input
                            type="text"
                            name="phone"
                            value={student.phone}
                            disabled
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
                        value={student.address_line_1}
                        disabled
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_line_2"
                        value={student.address_line_2}
                        disabled
                        />
                    </div>
                    <div>   
                        <input
                        type="text"
                        name="address_city"
                        value={student.address_city}
                        disabled
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_state"
                        value={student.address_state}
                        disabled
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="address_zip"
                        value={student.address_zip}
                        disabled
                        />
                    </div>

                </div>
            </div>
                    
                </>
                    ))}
                
            </div>
            <br />
            
            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2">
                <div className="col"><Link to={`/student/edit/${id}`} state={{ studentInfo }}>
                    <button className="btn btn-primary">Update Student</button></Link></div>
                <div className="col">
                    <button className="btn btn-danger" onClick={deleteStudent}> Delete Student </button></div>
            </div>
            
            <br />
            <br />
            <div>
                <StudentCourses courses={studentCourses} student_id={id??""}/>
            </div>
            </center>
        </>
    );
}
