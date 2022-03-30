
import { useEffect, useRef, useState } from "react";

const Modal=({closeModal, children}) =>{

        const [isBrowser, setIsBrowser] = useState(false);
    
        // create ref for the StyledModalWrapper component
        const modalWrapperRef = useRef();
    
        // check if the user has clickedinside or outside the modal
        const backDropHandler = e => {
          if (!modalWrapperRef?.current?.contains(e.target)) {
              closeModal();
          }
        }
      
        useEffect(() => {
          setIsBrowser(true);
          window.addEventListener('click', backDropHandler);
    
          return () => window.removeEventListener('click', backDropHandler);
        }, []);
      
      

    return (
      <div className="modal-logout">
        <div className="content-modal">
        {/* <Button onClick={()=>{closeModal(false)}} className='X-button'>X</Button> */}
        {children}
        </div>
      </div>
    )
      
    // eslint-disable-next-line no-unreachable
    if (isBrowser) {
        // eslint-disable-next-line no-undef
        return ReactDOM.createPortal(
          // eslint-disable-next-line no-undef
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
  }
  export default Modal
