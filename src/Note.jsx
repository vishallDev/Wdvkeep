// import './App.css';
import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';


function Note(props) {

const deleteit = () => {
    props.deleteitem(props.id)
}


  return (
    <>
<div className="container w-25 m-5 shadow-lg float-left">
<h1>{props.title}
</h1>
<hr className="w-full"/>
<p>
{props.content}
    
</p>
<Button onClick={deleteit}>

<DeleteOutlinedIcon  />
</Button>
</div>




    </>
  );
}

export default Note;
