import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    let year=new Date().getFullYear();
    console.log(year)
  return (
    <>
<footer className=' text-center w-100 ' style={{position:'fixed' , bottom:'0px'}}>

<p>Designed By &copy; {year} &nbsp; 
<a href="https://devvishal.netlify.app" target="blank" className="text-dark text-decoration-none outline-none">Vishal Bhosale</a>

</p>

</footer>


      
    </>
  );
}

export default Footer;