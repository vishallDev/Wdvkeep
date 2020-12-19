import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';


function App() {
  const [additem, setadditem]=useState([])


  const deleteit = (id) =>{
    // alert('kasks')
    setadditem((prevalue) => {
      return prevalue.filter((data, index) =>{
        return index !== id; 
      })
    })
    }

let addnote = (note) =>{
  // alert("hello")
  setadditem((prevalue)=>{
    return [...prevalue, note]
  })
}




  return (
    <>

    <Header/>
    <CreateNote passNote = {addnote} />
    
    {additem.map((values, index) =>{
      return <Note
      key={index}
      id={index}
      title={values.title}
      content={values.content}
      deleteitem = {deleteit}/>
      } 
    )}

    <Footer/>



    </>
  );
}

export default App;
