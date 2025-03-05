import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Passport2 from "../../Assets/Passport2.jpg"
import Image from 'react-bootstrap/Image'


const Passport = () => {
    return (
        <div>
            <div className='div2 header-image mb-5'>
                <h1 className='display-4 fw-bold text-white mt-5'>Passport</h1>
            </div>
            <Container>
                <Row className='mb-5'>
                    <Col md={6}className='mt-3 mb-5 ps-4'>
                        <h1 className='mt-5'>New Passport</h1>
                       <p display-5>Applying for a new passport is a straightforward process! Simply provide the necessary documents, and our executives will handle everything, including scheduling your appointment. The application can be submitted online, and the essential documents required include age proof, proof of identity, residential address proof, two recent passport-sized photographs, and an appointment confirmation receipt. With our hassle-free service, getting your passport is quick and easy, ensuring you're ready for your international travels!</p>
                    </Col>
                    <Col md={6}>
                    <Image src={Passport2} alt="Passport" style={{width:"100% ", height:"100%", borderRadius:"20px"}} ></Image>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='mt-3 mb-5 ps-4'>
                        <h1>Emergency Certificate (EC) for Urgent Travel</h1>
                       <p display-5>An Emergency Certificate (EC) is a one-time travel document issued by the Indian Embassy or Consulate to Indian citizens who need to return to India urgently but do not have a valid passport. It is typically granted in cases of lost, stolen, or expired passports, deportation, or emergency situations. The EC allows the holder to travel only to India and cannot be used for onward travel to other countries. Applicants must provide identity proof, supporting documents, and a valid reason for emergency travel. The issuance of an EC is subject to verification and approval by the authorities.</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='mt-3 mb-5 ps-4'>
                        <h1>Passport Renewal</h1>
                       <p display-5>Renewing your passport is a simple process with our expert assistance. Just provide the required documents, and our team will take care of the rest, including scheduling your appointment. The application can be submitted online, and the essential documents include your original passport, self-attested copies of the first and last pages, proof of identity, proof of address, recent passport-sized photographs, and the appointment confirmation receipt. With our seamless process, you can renew your passport quickly and hassle-free, ensuring you’re ready for your next journey.</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='mt-3 mb-5 ps-4'>
                        <h1>Minor’s Passport</h1>
                       <p display-5>A Minor’s Passport is issued to individuals below 18 years of age, allowing them to travel internationally with valid identification. The application process requires the child's birth certificate, proof of address, and the consent of both parents or legal guardians. Minors under 15 years are typically issued a passport with a validity of 5 years or until they turn 18, whichever is earlier, while minors aged 15-18 can opt for a 10-year validity. In cases where one parent is unavailable, additional documentation may be required. The process is straightforward, ensuring hassle-free travel for young applicants.</p>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col className='mt-3 mb-5 ps-4'>
                        <h1>Change of Name/Address on Passport</h1>
                       <p display-5>A Minor’s Passport is issued to individuals below 18 years of age, allowing them to travel internationally with valid identification. The application process requires the child's birth certificate, proof of address, and the consent of both parents or legal guardians. Minors under 15 years are typically issued a passport with a validity of 5 years or until they turn 18, whichever is earlier, while minors aged 15-18 can opt for a 10-year validity. In cases where one parent is unavailable, additional documentation may be required. The process is straightforward, ensuring hassle-free travel for young applicants.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Passport