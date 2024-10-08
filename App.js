import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

function App() {
  const [studentMark, setStudentMark] = useState([])
  return (
    <>
      <StudentForm setStudentMark={setStudentMark} />
      <StudentTable studentMark={studentMark} />
    </>
  );

}

export default App;