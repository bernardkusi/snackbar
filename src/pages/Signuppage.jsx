import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signuppage = ({setnavhidden}) => {
    useEffect(() => {
        setnavhidden(true)
      
      }, [])
    
  return (
    <div className="page centered">
        <form action="">
        <div className="form"  data-aos="fade-right" data-aos-duration="600">
            <p className="label">Signup for account</p>

            <div className="formcontrol">
            <input type="text" name="firstname" id='firstname'/>
            <label htmlFor="firstname"> Firstname</label>
            <small className="error"> </small>
            </div>
           
            <div className="formcontrol">
            <input type="text" name="surname" id='surname'/>
            <label htmlFor="surname"> Surname</label>
            <small className="error"> </small>
            </div>
           
            <div className="formcontrol">
            <input type="email" name="email" id='email'/>
            <label htmlFor="email"> Email</label>
            <small className="error"> </small>
            </div>
           
           <div className="formcontrol">
           <input type="password" name="password" id="password" />
           <label htmlFor="password">Password</label>
           <small className="error"></small>
           </div>
           
           <div className="formcontrol">
           <input type="password" name="password_confirmation" id="password_confirmation" />
           <label htmlFor="password_confirmation">Confirm password</label>
           <small className="error"></small>
           </div>

           <button className='click'>Signup</button>

            <p className="redirect">
            Already have an account? Login <Link to={"/signin"}>Here</Link>
           </p>
            
          </div>
        </form>
    </div>
  )
}

export default Signuppage