import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { jobDetails } from "./jobDetails";
import { IoIosArrowBack } from "react-icons/io";

export default function CareerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobDetails[id];

  if (!job) return <h3 className="text-center mt-5 p-5">Job not found</h3>;

  return (
    <Container className="my-5">
      {/* <span><IoIosArrowBack /></span> */}
      <h2 className="green-text">{job.title}</h2>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
        {job.details}
      </pre>
      {/* Added Resume Instruction */}
      <p className="fw-bold text-primary mt-3 green-text">
        <span className="green-text">📧 Kindly share your resume to{" "}</span>
        <a href="mailto:marketing@anandhamplots.com" className="green-text">
          marketing@anandhamplots.com
        </a>
      </p>
    </Container>
  );
}
