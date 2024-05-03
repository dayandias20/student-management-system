import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Student } from "../interfaces/Student";

export const StudentDetails = () => {

    const GET_STUDENT_BY_ID_URL = 'http://localhost:8080/student/get_student/';

    const { id } = useParams();

    const [studentInfo, setStudentInfo] = useState<Student[]>([]); // Changed to array

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`${GET_STUDENT_BY_ID_URL}${id}`);
                setStudentInfo([response.data]); // Wrap response data in array
            }
            catch(error) {
                console.log(error);
            }
        };
        fetchStudent();
    }, [id]);

    return(
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {studentInfo.map(student => (
                        <div key={student.id} className="col">
                           <h1>{student.first_name} </h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
