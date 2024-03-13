import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Course from "../Course/Course";

const Courses = ({handleBookmark}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async() => {
        const res = await fetch('courses.json');
        const data = await res.json();
        setCourses(data)
    }
    loadCourses();
  }, []);

  return (
    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
     {
        courses.map(course => <Course course={course} key={course.id} handleBookmark={handleBookmark}></Course>)
     }
    </div>
  );
};
Courses.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
}
export default Courses;
