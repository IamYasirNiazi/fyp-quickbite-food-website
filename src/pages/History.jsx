import Header from '../components/Header'
import Footer from '../components/Footer'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'
import TitleSection from '../components/TitleSection'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'



const History = () => {

  // const { title } = props;

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)

  const initialized = useRef(false);
  const [apiHistory, setApiHistory] = useState([]);
  const [currentUser, setCurrentUser] = useState({user: ''});
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("token")===''){
      navigate('/')
      alert("Please Login First.")
    }
  })


  const currentUserCheck = async ()=>{

    let token = localStorage.getItem('token')

      const userLoggedIn = await fetch(`http://127.0.0.1:5001/api/user/current`, {
        method : 'GET',
        headers : {
          'Authorization' : `Bearer ${token}`,
          'Content-Type' : 'application/json'
        }
      })

      const resultApi = await userLoggedIn.json()
      // console.log(result)

      setCurrentUser({resultApi})
      // console.log(currentUser.resultApi._id)

  }


  useEffect(() => {
    if(localStorage.getItem("token")){
      currentUserCheck()
    }
  })


  useEffect(() => {
    const history = async ()=>{
    if(initialized.current===false){
        const token = localStorage.getItem('token')
        const result =  await fetch(`http://127.0.0.1:5001/api/user/history`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({user: currentUser.resultApi._id})
        });
    
        const res = await result.json()
        setApiHistory(res)

      }
      initialized.current = true
    }
    
    history();
  })

  // console.log(apiHistory)
  


  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        <TitleSection title="History" />

        <div className="history">
        <Container className='container'>
          <Row className='row'>
            <Col className='col col-12'>
              <div className="main-wrapper">

                <div className="data">
                  <table className='table'>
                    <tr>
                      <th>Sr#</th>
                      <th>Order ID</th>
                      <th>Product(s) Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Order Date</th>
                    </tr>
                    {
          apiHistory.map((data, index)=>{
            
            const timestampFromMongo = new Date(data.createdAt);
            const formattedDate = timestampFromMongo.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            });

            return <tr key={index}>
              <td>{index+1}</td>
              <td>{data._id}</td>
              <td>{data.product}</td>
              <td>{data.price}</td>
              <td>{data.quantity}</td>
              <td>{data.total}</td>
              <td>{formattedDate}</td>
            </tr>
          })
        } 
                    
                  </table>

                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
       
        <Footer />
    </>
  )
}

export default History