import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const UserProfile = () => {
  return (
    <>
      <div className="profile-user">
        <Container className='container'>
          <Row className='row'>
            <Col className='col col-12'>
              <div className="main-wrapper">

                <div className="name">
                  <div>
                    <span>First Name: </span><span>Yasir</span>
                  </div>
                  <div>
                    <span>Last Name: </span><span>Khan</span>
                  </div>
                </div>
                <div className="email">
                <div>
                    <span>Email: </span><span>iamyasirniazi@gmail.com</span>
                </div>
              </div>
              <div className="password">
                <div>
                    <span>Password: </span><span>345675</span>
                </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UserProfile