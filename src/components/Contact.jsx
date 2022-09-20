import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="page">
            <h3 className="heading">Contact us</h3>
            <div className="contactflex">
            <div className="form"  data-aos="fade-right" data-aos-duration="600">
            <p className="label">Send Me A Message</p>
            <div className="formcontrol">
            <input type="text" name="name" id='name'/>
            <label htmlFor="name"> Name</label>
            <small className="error"> </small>
            </div>
           
           <div className="formcontrol">
           <input type="text" name="email" id="email" />
           <label htmlFor="email">Email</label>
           <small className="error"></small>
           </div>
           <div className="formcontrol">
             <textarea name="message" id="message" cols="30" rows="10"></textarea>
             <label htmlFor="message">Message</label>
             <small className="error"></small>
           </div>
           <button className='click'>Send Message</button>
            
          </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.43135023063!2d-0.19841308569500524!3d5.650567334263379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1663650741563!5m2!1sen!2sgh" width={"100%"} height={"100%"} style={{border:"0"}} allowFullScreen="" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact