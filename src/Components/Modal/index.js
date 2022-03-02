import React from 'react'
import Button from '../Button/Index'
const Modal=({closeModal}) =>{

  return (
    <div className="modal-notif">
      <Button onClick={()=>{closeModal(false)}} className='X-button'>X</Button>
    </div>
  )
}
export default Modal
