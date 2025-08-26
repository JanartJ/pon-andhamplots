import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import "./projectTab.css";
/**
* @author
* @function ProjectTabs
**/

const ProjectTabs = (props) => {
  
  const [projectActive, setProjectActive] = useState(0);
  const projectsList = [
    {"id":0,"title":"Our Office","content":"Office Anadham Plots, a trusted plot developer based in Chennai, offers premium residential plots at unbeatable prices in rapidly developing locations.",
        "MapLink":"https://maps.app.goo.gl/GW1pzZYiBQj2RdpG9","iframeLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.560084990099!2d80.2534259!3d13.043331699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa10888a37b785563%3A0xfb49584c762de63a!2sAnandham%20Plots!5e1!3m2!1sen!2sin!4v1747676607199!5m2!1sen!2sin"},
    {"id":1,"title":"Padappai","content":"Padappai Anadham Plots, a trusted plot developer based in Chennai, offers premium residential plots at unbeatable prices in rapidly developing locations.",
        "MapLink":"https://maps.app.goo.gl/We1kLVMEV1E5QtVT6","iframeLink":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14078.526685138102!2d80.0330963!3d12.8871589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7edcddad8af%3A0xaab3ad23b3682db0!2sRaunaq%20Foundations%20-%20Anandham%20-%20Plots%20in%20Padappai!5e1!3m2!1sen!2sin!4v1755963532322!5m2!1sen!2sin"},
    {"id":2,"title":"Kanchipuram","content":"Kanchipuram Anadham Plots, a trusted plot developer based in Chennai, offers premium residential plots at unbeatable prices in rapidly developing locations.",
        "MapLink":"https://maps.app.goo.gl/Bg8cauPBaxFfMGEz5","iframeLink":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14080.572558071908!2d79.7111061!3d12.8507169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c3df1806e2c3%3A0x21754d7d64da3ca1!2sAnandham%20Plots%20-%20Konnerikuppam!5e1!3m2!1sen!2sin!4v1755963456686!5m2!1sen!2sin"},
    {"id":3,"title":"Sholavaram","content":"Sholavaram Anadham Plots, a trusted plot developer based in Chennai, offers premium residential plots at unbeatable prices in rapidly developing locations.",
        "MapLink":"https://maps.app.goo.gl/grevNqB6iz8AxtvD8","iframeLink":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14058.496318192152!2d80.1564884!3d13.2387403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527de145ef4935%3A0xccfd18f693baecf2!2sAnandham%20Plots%20-%20Sholavaram!5e1!3m2!1sen!2sin!4v1755963347522!5m2!1sen!2sin"}
  ]
  return(
    <div className='project-tab-container'>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <Row><h2 className='heading-bold green-text'>How we Operate ?</h2></Row><br/>
                        <Row className='project-tab-btn-container'>
                            <Col className={`project-tab-btn ${projectActive === 0 ? 'active-tab-btn' : ""}`} onClick={()=>setProjectActive(0)}>Our Office</Col>
                            <Col className={`project-tab-btn ${projectActive === 1 ? 'active-tab-btn' : ""}`}  onClick={()=>setProjectActive(1)}>Padappai</Col>
                            <Col className={`project-tab-btn ${projectActive === 2 ? 'active-tab-btn' : ""}`}  onClick={()=>setProjectActive(2)}>Kanchipuram</Col>
                            <Col className={`project-tab-btn ${projectActive === 3 ? 'active-tab-btn' : ""}`}  onClick={()=>setProjectActive(3)}>Sholavaram</Col>
                        </Row>
                    </Col>
                    <Col md={6}></Col>
                </Row>
                <br/>
                <Row>
                    <Col md={6}>
                        {projectsList.map((data,ind)=>{
                            return(
                                <div style={{display: projectActive === ind ? "block":"none"}}>
                                    {data.title === "Padappai" ? (
                                    <div>
                                        <p>A environment of exclusive and affordable plots in padappai</p>
                                        <p>Anandham spans a generous 2.1 acres, offering a remarkable opportunity for both development and investment. Located along the bustling Tambaram – Mudichur – Oragadam Road near Padappai, next to the prestigious Alwin International School, this land enjoys a strategic and highly desirable position.</p>
                                        <p>The project comprises 60 plots, ideal for residential or commercial use, making it an appealing choice for investors and developers eager to tap into the area’s expanding prospects. With easy access to essential amenities, schools and residential complexes, Anandham.
                                        </p>
                                        <p>Serves as a promising foundation for diverse ventures. Whether for residential, commercial, or mixed-use purposes, this plot holds significant potential to foster a vibrant and thriving residential plots in padappai.</p>
                                    </div>)
                                    :
                                    data.title === "Kanchipuram" ?
                                    (<div>
                                        <p>Kanchipuram is renowned for its rich cultural heritage and burgeoning infrastructure. Here, buying residential plots for sale in Kanchipuram presents a lucrative investment opportunity for several compelling reasons.</p>
                                        <p>This historic city, located just a short drive from Chennai, combines the allure of traditional charm with the benefits of modern living. Investing in Kanchipuram means more than just acquiring property; it’s about becoming part of an excellent residential community.</p>
                
                                    </div>)
                                    : data.title === "Sholavaram" ?
                                    (
                                        <div>
                                            <p>Red Hills is a prominent locality in the northern part of Chennai. Due to its rapidly growing infrastructure and seamless connectivity to other parts of the city, it has emerged as the most preferred destination for homebuyers and real estate investors.</p>
                                            <p> With this project, AnandhamPlots has made residential land and plots available for sale near Red Hills at reasonable prices. The best thing about this project is the easy access it offers to world-class amenities and facilities along with the thriving social infrastructure that surrounds it.
                                            </p>
                                        </div>
                                    )
                                    :
                                    (<div>
                                        <p>At Anandham Plots, we believe that owning land is more than just a transaction—it’s a foundation for dreams, growth, and a secure future.
                                        </p>
                                        <p>Headquartered in the heart of Chennai at Ground Floor, 63/29, Poes Garden, Teynampet, we have proudly established ourselves as a trusted name in real estate, serving discerning customers across Padappai, Kanchipuram, and Red Hills.</p>
                                        <p>With a commitment to transparency, integrity, and excellence, we offer carefully curated plots that are not just investments but pathways to building your dream home or securing your legacy.</p>
                                        <p>Our experienced team is dedicated to guiding you through every step of the process—from site visits and legal clearances to final registration—ensuring a seamless and hassle-free experience.</p>
                                    </div>)}
                                    <a href={data.MapLink} target='_blank'>Visit Site</a>
                                </div>
                            )
                        })}   
                    </Col> 
                    <Col md={6}>
                        <h5 className='text-center'>Site Location</h5>
                        <iframe 
                            src={projectsList[projectActive]["iframeLink"]} 
                            height="300" 
                            style={{"border":"0"}}
                            allowfullscreen="" 
                            className='iframe-map'
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Col>                
                </Row>
            </Col>
        </Row>
    </div>
   )
  }

export default ProjectTabs;