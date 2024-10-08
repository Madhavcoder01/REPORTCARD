import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StudentTable({StudentMark}) {

  const gradingSystem = () => {
    let grade = '';
    if (mark>=90){
      grade = 'A';      
    } else if (mark >=75) {
      grade = 'B';
    } else if (mark>=45) {
      grade = 'C';
    } else {
      grade = 'Fail';
    }
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Tamil Grade</TableCell>
          <TableCell align="right">English Grade</TableCell>
          <TableCell align="right">Maths Grade</TableCell>
          <TableCell align="right">Total Grade</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {StudentMark.map((row) => (
          <TableRow
            sx={{ border: 0 }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.tamilGrade}</TableCell>
            <TableCell align="right">{row.englishGrade}</TableCell>
            <TableCell align="right">{row.mathsGrade}</TableCell>
            <TableCell align="right">{row.totalGrade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default StudentTable;