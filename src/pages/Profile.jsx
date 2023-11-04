import Header from '../components/Header'
import Footer from '../components/Footer'
import Carts from '../components/Carts'
import { useSelector } from 'react-redux'
import TitleSection from '../components/TitleSection'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'


const Profile = () => {

  // const { title } = props;

  const isVisible = useSelector((state)=> state.cartUi.cartIsVisible)

  const [currentUser, setCurrentUser] = useState({fname: '', lname: '', email: '', password: ''});
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
      // console.log(resultApi)

      setCurrentUser({fname: resultApi.fname, lname: resultApi.lname, email: resultApi.email, password: resultApi.password})
      console.log(currentUser)

  }


  useEffect(() => {
    if(localStorage.getItem("token")){
      currentUserCheck()
    }
  }, [])

  return (
    <>
        <Header />
        {
          isVisible && <Carts />
        }
        <TitleSection title="Profile" />
        {/* <UserProfile /> */}
        <div className="profile-user">
        <Container className='container'>
          <Row className='row'>
            <Col className='col col-12'>
              <div className="main-wrapper">

                <div className="name">
                  <div>
                    <span>First Name: </span><span>{currentUser.fname}</span>
                  </div>
                  <div>
                    <span>Last Name: </span><span>{currentUser.lname}</span>
                  </div>
                </div>
                <div className="email">
                <div>
                    <span>Email: </span><span>{currentUser.email}</span>
                </div>
              </div>
              <div className="password">
                <div>
                    <span>Password: </span><span>{currentUser.password}</span>
                </div>
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

export default Profile