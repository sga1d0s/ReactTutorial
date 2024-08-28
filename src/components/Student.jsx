import '../css/Student.css'
import PropTypes from 'prop-types'

// pasa props por parametro. Un objeto javascript y isTeacher como prop desestructurada
function Student(props, {isTeacher = false}) {
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* pasa por ternario el texto true/false */}
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      <p>Teacher: {isTeacher ? "Yes" : "No"}</p>
    </div>
  );
}

// define el tipo de dato para cada elemento
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

// 'defaultProps' está obsoleto
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default Student