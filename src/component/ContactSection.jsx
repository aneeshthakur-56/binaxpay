


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPaperPlane, FaEnvelope, FaClock, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <>
      <style>{`
        body {
          background-color: #0d0d0d;
        }
        .contact-section {
          background-color: #0d0d0d;
          color: white;
          padding: 60px 0;
        }

        .contact-section h2 {
          font-weight: 700;
        }

        .highlight {
          color: #00eaff;
         }

        .form-control, .form-control:focus {
          background-color: #111;
          border: 1px solid #333;
          color: white;
        }

        .send-btn {
          background-color: #00008B;
          color: white;
          border: none;
          transition: transform 0.3s ease;
        }

        .send-btn:hover {
          transform: translateY(-2px);
          background-color:black;
          // border-color:aqua;
            border-color: aqua !important;
          color:aqua;
        }
        

        .info-card {
          background-color: #111;
          border-radius: 15px;
          padding: 30px;
          color: white;
          transition: transform 0.3s ease-in-out;
         
        }
  

        .info-card:hover .hover-animate {
          animation: floatUpDown 1.5s infinite ease-in-out;
      
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        .icon-style {
          color: #00eaff;
          margin-right: 10px;
        }
          .social-icons{
           display: flex;
          }

          .social_icons_new{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--text);
             margin-right: 10px;
            transition: all 0.3s ease;
          }
       
        

        .social_icons_new :hover {
          transform: translateY(-5px);
          
        }
      `}</style>

      <div className="contact-section">
        <Container>
          <div className="text-center mb-5">
            <h2>
              Get In <span className="highlight">Touch</span>
            </h2>
            <p>Have questions? Our team is here to help you with any inquiries.</p>
          </div>
          <Row>
            {/* Form */}
            <Col md={7}>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control placeholder="Your Name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Your Email" />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                </Form.Group>
                <Button className="send-btn">
                  <FaPaperPlane className="me-2" /> Send Message
                </Button>
              </Form>
            </Col>

            {/* Info Card */}
            <Col md={5} className="mt-4 mt-md-0">
              <Card className="info-card hover-animate">
               <div className='d-flex align-items-center justify-content-between'>
                <div className="d-flex mb-3 align-items-start">
                  <FaEnvelope className="icon-style" />
                  <div className='container'> 
                    <h5>Email</h5>
                    <div>info@Bitsfar.com</div>
                    <div>support@Bitsfar.com</div>
                  </div>
                </div>

                <div className="d-flex mb-4 align-items-start " >
                  <FaClock className="icon-style" />
                  <div>
                    <h5>Working Hours</h5>
                    <div>Mon–Fri: 9am–6pm (UTC)</div>
                    <div>Sat–Sun: Closed</div>
                  </div>
                </div>
                </div>

                <div>
                  <h5>Follow Us</h5>
                  <div className="social-icons mt-2">
                    <div className='social_icons_new'>
                    <FaTwitter />
                     
                    </div>
                      <div className='social_icons_new'>
                          <FaLinkedin />
                      </div>
                   <div className='social_icons_new'>
                    <FaGithub />
                   </div>
                     <div className='social_icons_new'>
                    {/* <FaTwitter style={{ opacity: 0.2 }} /> */}
                    </div>
                     <div className='social_icons_new'>
                    {/* <FaLinkedin style={{ opacity: 0.2 }} /> */}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactSection;


