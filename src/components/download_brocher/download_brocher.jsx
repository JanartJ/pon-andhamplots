import React,{useState} from 'react';
import { Modal  } from "react-bootstrap";
import ContactForm from '../footer/contactForm';
import CustomButton from '../shared/button/button';
import "./download.css";
/**
* @author
* @function DownloadBroucher
**/

export const DownloadBroucher = (props) => {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return(
    <div className='download-brocher'>
        <CustomButton
            title="Download Brocher"
            textcolor="green"
            btnBg="light"
            textWeight={700}
            btnMinWidth="8rem"
            btnBorderRadius="5px"
            handleClick={handleShow}
        />
        <Modal show={show} size="lg" style={{background:"transparent"}} onHide={handleClose}>
            <Modal.Header closeButton>
                {/* <Modal.Title className='green-text'><b>Download Broucher Form</b></Modal.Title> */}
            </Modal.Header>
            <Modal.Body>                
                <ContactForm type="modal"/>                
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer> */}
        </Modal>
    </div>
   )
  }
