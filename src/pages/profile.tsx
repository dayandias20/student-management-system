import axios from "axios";
import { useEffect, useState } from "react";
import { Student } from "../interfaces/Student";
import { Link } from "react-router-dom";

export const Profile = () => {

    const GET_ALL_STUDENTS_URL = 'http://localhost:8080/students';

    const [students, setStudents] = useState<Student[]>([]);
          
    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const response = await axios.get(GET_ALL_STUDENTS_URL);
                setStudents(response.data);
                console.log(students);
            }
            catch(error){
                console.log("Error fetching students");
            }
        };
        fetchAllStudents();
    }, []);

    return(
        <>
        <br />
            <div className="text-center mt-4 mb-4 banner">
                <h1> All Students </h1>
            </div> 
            
            <br></br><br />
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 bg_black">
                    { students.map(student => (
                        <div key={student.id} className="col">
                            <Link to={`/student/get_student/${student.id}`}>
                                <div className="card h-100 card-body custom-link">
                                    <div className='impose'>
                                        <img src={`https://image.tmdb.org/t/p/w500//H6vke7zGiuLsz4v4RPeReb9rsv.jpg`} className="card-img-top card-title" alt='N/A' />
                                    </div>
                                    <div className="card-body bg_black">
                                        <h5 className="card-title">{student.first_name} {student.last_name}</h5>
                                        <p className="card-text">Email: {student.email}</p>
                                        <p className="card-text">Phone: {student.phone}</p>
                                        <p className='card-text'>{ student.id } </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )) }
                </div>
            </div>
            
        </>
    );
};
