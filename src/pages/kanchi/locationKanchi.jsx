import Accordion from 'react-bootstrap/Accordion';
import "./kanchi.css";

function KanchiLocation() {
  return (
    <div className='kanchi-location-container'>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header><b>SCHOOLS</b></Accordion.Header>
            <Accordion.Body>
            <ol>
                <li>Gurukshetra Public School - 3.5 km (10 mins)</li>
                <li>Shikshaa Public School 115' CBSE School - 4.5 km (8 mins)</li>
                <li>Brimming High International School - 6.7 km (12 mins)</li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><b>COMMON</b></Accordion.Header>
            <Accordion.Body>
            <ol>
                <li>Kanchipuram Railway Station - 1.3 kms (4 mins)</li>
                <li>Ponneri Karai Bridge - 1.4 kms (5 mins)</li>
                <li>Sri Ulagalanda Perumal Temple - 1.9 kms (6 mins)</li>
                <li>Sri Kanchi Kamakshi Amman Temple - 2.5 kms (7 mins)</li>
                <li>Sri Ekambaranathar Temple - 2.8 kms (8 mins)</li>
                <li>Sri Kachabeswarar Temple - 3.2 kms (10 mins)</li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header><b>HOSPITALS</b></Accordion.Header>
            <Accordion.Body>
                <ol>
                    <li>Sri Mamallan Hospital - 3.6 kms (8 mins)</li>
                    <li>Meenakshi Medical College & Hospital - 4.5 kms (10 mins)</li>
                    <li>Arignar Anna Cancer Hospital - 4.5 kms (10 mins)</li>
                </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header><b>COLLEGE</b></Accordion.Header>
            <Accordion.Body>
                <ol>
                    <li>Kanchi College of Education - 4.1 kms (9 mins)</li>
                    <li>Arignar Anna Cancer Hospital - 4.5 kms (10 mins)</li>
                    <li>Bhaktavatsalam Polytechnic - 4 kms (9 mins)</li>
                    <li>University College of Engineering - 3.9 kms (8 mins)</li>
                    <li>Upcoming Paranthur Airport - 12.5 kms (23 mins)</li>
                </ol>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default KanchiLocation;