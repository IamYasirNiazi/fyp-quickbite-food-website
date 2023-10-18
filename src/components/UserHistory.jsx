import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const UserHistory = () => {

  

  return (
    <>
      <div className="history">
        <Container className='container'>
          <Row className='row'>
            <Col className='col col-12'>
              <div className="main-wrapper">

                <div className="data">
                  <table className='table'>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Date</th>
                    </tr>
                    <tr>
                      <td>Burger</td>
                      <td>$20</td>
                      <td>3</td>
                      <td>$100</td>
                      <td>date</td>
                    </tr>
                    <tr>
                      <td>Burger</td>
                      <td>$20</td>
                      <td>3</td>
                      <td>$100</td>
                      <td>date</td>
                    </tr>
                    <tr>
                      <td>Burger</td>
                      <td>$20</td>
                      <td>3</td>
                      <td>$100</td>
                      <td>date</td>
                    </tr>
                    <tr>
                      <td>Burger</td>
                      <td>$20</td>
                      <td>3</td>
                      <td>$100</td>
                      <td>date</td>
                    </tr>

                  </table>

                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UserHistory