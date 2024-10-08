import React, { useState } from 'react';
import {Button, Paper, TextField} from '@mui/material';


function StudentForm({setStudentMark}) {

    const [name, setName] = useState();
    const [tamilMark, setTamilMark] = useState();
    const [englishMark, setEnglishMark] = useState();
    const [mathsMark, setMathsMark] = useState();

    const submit = () => {
        if (name && tamilMark && englishMark && mathsMark){
            const newData = {
                name: name,
                tamilGrade: tamilMark,
                englishGrade: englishMark,
                mathsGrade: mathsMark,
            }
            setStudentMark((prevState)=>{
                return [... prevState, newData];
            });
        }
    }

  return (
    <div>
        <Paper elevation={3} style={{margin: 19}}>
            <TextField name='name' label='Name' style={{margin: 5}} onChange={(event)=>
                setName(event.target.value)
            }/>
            <TextField name='Tamil Mark' label='Tamil Mark' style={{margin: 5}} onChange={(event)=>
                setTamilMark(event.target.value)
            }/>
            <TextField name='English Mark' label='English Mark' style={{margin: 5}} onChange={(event)=>
                setEnglishMark(event.target.value)
            }/>
            <TextField name='Maths Mark' label='Maths Mark' style={{margin: 5}} onChange={(event)=>
                setMathsMark(event.target.value)
            }/>
            <Button onClick={submit}>SUBMIT</Button>
        </Paper>
    </div>
  )
}

export default StudentForm;