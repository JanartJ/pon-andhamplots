import Accordion from 'react-bootstrap/Accordion';
import "./sangamam.css";

function PadappaiLocation() {
  return (
    <div className='sangamam-location-container'>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header><b>EDUCATIONAL INSTITUTIONS</b></Accordion.Header>
            <Accordion.Body>
            <ol>
            <li>Sri Sathya Sai Medical College - 6.6 Km</li>
            <li>SSN College of Engineering, Kalavakkam, OMR - 7.5 Km</li>
            <li>Jagannath vidyalaya CBSE school, Thaiyur, OMR - 10.2 Km</li>
            <li>Chettinad Hospital and Research Institute - 12.9 Km</li>
            <li>Hindustan University, Padur, OMR - 13.4 Km</li>            
            <li>Sushil Hari International school, Kelambakkam - 14.9 Km</li>
            <li>Velammal Vidhyashram School, Mambakkam - 19.6 Km</li>            
            <li>VIT University,Mambakkam - 21.7Km</li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><b>HOSPITAL</b></Accordion.Header>
            <Accordion.Body>
            <ol>
                <li>Sri Sathya Sai Hospital - 6.6 Km</li>
                <li>Swaram Hospital, Kelambakkam - 8.5 Km</li>
                <li>Chettinad super speciality Hospital, Padur - 12.3 Km</li>
                <li>Global Hospitals - 28 Km</li>
                <li>Apollo Hospitals, Karapakkam - 28 Km</li>
                <li>Apollo Hospitals, Perungudi - 32.8 Km</li>              
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header><b>IT SECTORS & FACTORIES</b></Accordion.Header>
            <Accordion.Body>
                <ol>                    
                    <li>1450 acres Integrated Township-OneHub, Paiyanur - 10.2 Km</li>
                    <li>Siruseri SIPCOT - 17 Km</li>
                    <li>Chennai International Airport - 42 Km </li>
                    <li>Mahindra World City - 28.5Km</li>
                </ol>
            </Accordion.Body>
        </Accordion.Item>

        </Accordion>
    </div>
  );
}

export default PadappaiLocation;