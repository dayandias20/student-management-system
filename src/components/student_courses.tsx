import { Course } from "../interfaces/Course"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

interface Props{
    courses: Course[],
    student_id: string;
}
export const StudentCourses: React.FC<Props> = ({ courses, student_id }) => {

    const DELETE_COURSE__URL = `http://localhost:8080/student/${student_id}/delete/`

    const deleteCourse = async (courseId:number) => {
        const reponse = await axios.delete(`http://localhost:8080/student/${student_id}/delete/${courseId}`)
        console.log(reponse.data);
        window.location.reload();
    }

    useEffect(() => {
    }, [])
    return(
        <table>
            <thead>
                <tr>
                    <th scope="col"> Course Code </th>
                    <th scope="col"> Course Name </th>
                    <th scope="col"> Delete Course </th>
                </tr>
            </thead>
            <tbody>
            { courses.map(course=> (
                <tr key={course.course_id}>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>
                <button className="btn btn-primary" onClick={() => deleteCourse(course.course_id)}><FontAwesomeIcon icon={faTrashArrowUp} /></button>    
                
              </td>
                
                
            </tr>
            ))}
            </tbody>
        </table>
    )
}