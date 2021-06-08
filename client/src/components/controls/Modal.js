import React from 'react';
import { CgClose } from 'react-icons/cg';
import './Modal.css';
const Modal = ({children}) => {

    console.log(children)
    return (
       <div className="modal">
           <div className="close-modal">
                <CgClose icon="icon" />
           </div>
           <div className="modal-content">
                {children}
           </div>
       </div>
    )
};

export default Modal;