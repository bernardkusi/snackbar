import React from 'react'

const Slider = ({navopen}) => {
  return (
    <div className={[navopen?'show slider':'slider']}>
        <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Our Menu</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
        </ul>
    </div>
  )
}

export default Slider