import Accordion from 'react-bootstrap/Accordion';
import "./sholavaram.css";

function SholavaramLocation() {
  return (
    <div className='sholavaram-location-container'>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header><b>EDUCATIONAL INSTITUTIONS</b></Accordion.Header>
            <Accordion.Body>
            <ol>
            <li>Alwin International Public School - 200m</li>
            <li>Global Aero Kidz International Pre School - 1.7Km</li>
            <li>Shri Niketan padasalai - 3Km</li>
            <li>TMG College of Arts and Science - 5.4Km</li>
            <li>Dhanalakshmi College of Engineering - 6.2Km</li>
            <li>PERI College Of Arts and Science - 4.9Km</li>
            <li>Shri Natesan School - 4.8Km</li>
            <li>Crescent College - 9.6Km</li>
            <li>SRM Hospital - 15Km</li>
            <li>SRM University - 15Km</li>
            <li>MCC College - 12.0Km</li>
            <li>Valluvar Gurukulam School - 12.6Km</li>
            <li>Zoho Estancia IT Park - 13.5Km</li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><b>HOSPITAL</b></Accordion.Header>
            <Accordion.Body>
            <ol>
                <li>AG Hospital - 11.9Km</li>
                <li>Annai Arul Hospital - 9.4Km</li>
                <li>Hindu Mission Hospital - 12.2Km</li>
                
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header><b>IT SECTORS & FACTORIES</b></Accordion.Header>
            <Accordion.Body>
                <ol>
                    <li>Infac India Pvt.Ltd - 1.0Km</li>
                    <li>Shriram IT Gateway - 7.4Km</li>
                    <li>Tambaram MEPZ IT Park - 15.1Km </li>
                    <li>Mahindra World City - 28.5Km</li>
                </ol>
            </Accordion.Body>
        </Accordion.Item>

        </Accordion>
    </div>
  );
}

export default SholavaramLocation;