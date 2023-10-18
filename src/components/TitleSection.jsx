import React from 'react'
import { Container, Row, Col } from 'reactstrap';


const TitleSection = (props) => {

    const { title } = props;

  return (
    <>
        <div className="title-section">
            <Container className='container'>
                <Row className='row'>
                    <Col className='col'>
                        <div className="wrapper">
                            <h2>{title}</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default TitleSection