import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signinpage = ({setnavhidden}) => {
    useEffect(() => {
        setnavhidden(true)
      
      }, [])
  return (
    <div className="page centered main">
        <form action="">
        <div className="form"  data-aos="fade-right" data-aos-duration="600">
            <p className="label">Log in to my account</p>
            <div className="formcontrol">
            <input type="email" name="email" id='email'/>
            <label htmlFor="email"> Email</label>
            <small className="error"> </small>
            </div>
           
           <div className="formcontrol">
           <input type="text" name="password" id="password" />
           <label htmlFor="password">Password</label>
           <small className="error"></small>
           </div>

           <button className='click'>Login</button>

           <p className="redirect">
            Dont have an account? Create one <Link to={"/signup"}>Here</Link>
           </p>
            
          </div>
        </form>
    </div>
  )
}

export default Signinpage