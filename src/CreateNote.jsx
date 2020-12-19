import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
const[note , setnote]=useState({
    title:'',
    content:'',
})

let ievent=(event) =>{
    const {name , value} = event.target;
    // setnote(objects.target.value)
setnote((prevalue) => {
    return{
        ...prevalue,
        [name]: value,
            }
    });
    }   
// console.log(note)

const addnote = () =>{
    props.passNote(note);
    setnote({
        title:"",
        content:"",
    })
}




return(<>

<div className="container w-50 text-center shadow-lg py-2 w-75" >
<form className='form-group d-flex flex-column'>
    <input type="text" placeholder="Title" className="border-0 outline-none" style={{outline:'none'}}  name='title' onChange={ievent} value={note.title}>
    
    </input>
    <textarea rown='' columns='' placeholder='Enter Your Note' className="border-0 outline-none" name='content' style={{outline:'none'}} onChange={ievent} value={note.content}></textarea>
    <Button onClick={addnote} className="btn float-none "><AddIcon className="rounded-circle bg-warning"  /></Button>
</form>

</div>

</>)
}

export default CreateNote;