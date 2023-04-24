import React from 'react'

const HoveredMenu = () => {
  return (
    <div className='mouse-pos-list-image no-select'>
        {/* <li className='overlay mouse-pos-list-image-inner active'>
            <div className="overlay overlay-image">
                <img className='h-[30rem] w-[30rem]' src="https://images.unsplash.com/photo-1658933932348-5ba690e7c98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
        </li> */}
        
        <div className="w-full h-full overlay-image ">
        <img className='object-cover w-full h-full image-test ' data-src='' alt="" />
        </div>
    </div>
  )
}

export default HoveredMenu