import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/shared/button/button";

const jobs = [
  {
    id: 1,
    path:"sales-executive",
    title: "Sales Executive",
    description: "0-3 Years of experience in sales, Customer Relationship Management, Excellent communication skills...",
  },
  {
    id: 2,
    path:"sales-manager",
    title: "Sales Manager",
    description: "Develop and execute sales strategy for residential/commercial projects, manage sales team, drive revenue growth...",
  },
  {
    id: 3,
    path:"site-engineer",
    title: "Site Engineer",
    description: "We are looking for a skilled Site Engineer to manage day-to-day construction activities....",
  },
  {
    id: 4,
    path:"accounts-executive",
    title: "Accounts Executive",
    description: "We are seeking a detail-oriented Accounts Executive to manage day-to-day accounting operations, maintain accurate financial records, and support...",
  },
  {
    id: 5,
    path:"land-acquisition-bd",
    title: "Land Acquisition – Business Development",
    description: "We are looking for a Land Acquisition professional to support our real estate/infrastructure projects by identifying and acquiring suitable land parcels...",
  }

];

export default function Careers() {
  const navigate = useNavigate();
  const handleReadmoreClick = (val)=>{        
    // window.location.href=val.toLowerCase(); 
    navigate(`/career/${val}`);
  }
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 green-text">Career</h2>
      <Row className="g-4">
        {jobs.map((job) => (
          <Col md={6} key={job.id}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="green-text">{job.title}</Card.Title>
                <Card.Text>{job.description.slice(0, 100)}...</Card.Text>
                <div style={{display:"flex",justifyContent:"center",margin:"auto"}}>
                    <div style={{width:"50%"}}>
                    <CustomButton
                        title={"View more"}
                        value={job.path}
                        textcolor={"light"}
                        btnBg={"green"}
                        textWeight={700}
                        btnMinWidth={"10rem"}
                        btnBorderRadius={"20px"}
                        handleClick={handleReadmoreClick}
                    />
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
