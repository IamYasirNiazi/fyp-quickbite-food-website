import React, { useRef, useState } from 'react'
import {Container, Row, Col, NavLink} from 'reactstrap'
import logo from '../assets/images/logo.png'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../store/cartSlice/cartUiSlice'

const Header = () => {

    const totalQuantity = useSelector(state=>state.cart.totalQuantity);
    const cartQuantityLocalStorage = JSON.parse(localStorage.getItem('cartProducts')).totalQuantity


    const dispatch = useDispatch()
    const toggleCart = ()=>{
      dispatch(cartUiActions.toggle());
    }
  
  
    const [signUpData, setSignUpData] = useState({fname:'', lname:'', email:'', password:''});
    const [signInData, setSignInData] = useState({email:'', password:''});
    const [forgetPassData, setForgetPassData] = useState({email:'', password:'', confirmPassword:''});
    const [currentUser, setCurrentUser] = useState({id: '', email: '', name: ''});
    const refCloseSignup = useRef(null);
    const refCloseLogin = useRef(null);
    const refCloseForgetPass = useRef(null);
    
    const OnChangeFunc = (event)=>{
        setSignUpData({...signUpData, [event.target.name] : event.target.value})
    }
    console.log(signUpData)


    const submitFunc = async (event)=>{
      
      event.preventDefault()

      const res =  await fetch(`http://127.0.0.1:5001/api/user/register`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      //   'Authorization': 'Bearer kfjdklfjkfjdlfkjdlfkdjflkdjfkldfjlfk'
      },
      body: JSON.stringify({fname: signUpData.fname, lname: signUpData.lname, email: signUpData.email, password: signUpData.password})
    })

    setSignUpData({fname:'', lname:'', email:'', password:''})
    refCloseSignup.current.click()

    // if(res){
    //   alert("User Registered Successfully");
    // }
    
    const result = await res.json()
  
    console.log("User is registered successfully", result)

    }




    const OnChangeSignInFunc = (event)=>{
      setSignInData({...signInData, [event.target.name] : event.target.value})
    }
    console.log(signInData)


    const loginFunc = async (event)=>{
      
      event.preventDefault()

      const res =  await fetch(`http://127.0.0.1:5001/api/user/login`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      //   'Authorization': 'Bearer kfjdklfjkfjdlfkjdlfkdjflkdjfkldfjlfk'
      },
      body: JSON.stringify({email: signInData.email, password: signInData.password})
    })

    setSignInData({fname:'', lname:'', email:'', password:''})
    refCloseLogin.current.click();

    // if(res){
    //   alert("User Logged In Successfully");
    // }

    const authToken = await res.json()
    console.log("User is logged successfully", authToken)
    localStorage.setItem('token', authToken)
    currentUserCheck()

    }


    const currentUserCheck = async ()=>{

      let token = localStorage.getItem('token')

        const userLoggedIn = await fetch(`http://127.0.0.1:5001/api/user/current`, {
          method : 'GET',
          headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
          }
        })

        const result = await userLoggedIn.json()
        console.log(result)
  
        setCurrentUser({id: result.id, email: result.email, name: result.name})
        console.log(currentUser)

    }

    
    // useEffect(() => {
      const logoutFunc = ()=>{
     
        // localStorage.clear()
        // setCurrentUser({id: '', email: '', name: ''})

        localStorage.setItem('token', '')
        setCurrentUser({id: '', email: '', name: ''})
        // alert("User Logged Out");

      }
      
    // }, [setCurrentUser])




    const OnChangeForgetPassFunc = (event)=>{
      setForgetPassData({...forgetPassData, [event.target.name] : event.target.value})
  }
  console.log(forgetPassData)


  const submitForgetPassFunc = async (event)=>{
    
    event.preventDefault()

    const res =  await fetch(`http://127.0.0.1:5001/api/user/forget-pass`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    //   'Authorization': 'Bearer kfjdklfjkfjdlfkjdlfkdjflkdjfkldfjlfk'
    },
    body: JSON.stringify({email: forgetPassData.email, password: forgetPassData.password, confirmPassword: forgetPassData.confirmPassword})
  })

  setForgetPassData({fname:'', lname:'', email:'', password:'', confirmPassword:''})
  refCloseForgetPass.current.click()

  // if(res){
  //   alert("User Registered Successfully");
  // }
  
  const result = await res.json()

  console.log("User Password successfully changed.", result)

  }



  const activeMenu = ()=>{
    const profile_icon = document.getElementById("profile-icon")
    const profile_sub_menu = document.getElementById("profile-sub-menu")
    profile_sub_menu.classList.toggle("submenu-active")
  }
    


  return (
    <>
    <header className='header' id='header-section'>
        <Container className='header__container'>
            <Row className='header__container__row'>
                <Col className='header__container__row__col col col-md-12'>
                    <div className='header__container__row__col__main'>

                        <Link to={`/`}>
                          <img src={logo} alt="Logo" className='img-fluid' />
                        </Link>
                        {/* <ul>
                            <li>
                                Why QuickBite?
                            </li>
                            <li className='services'>
                                Services
                            </li>
                            <li className='menu'>
                                Menu
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul> */}
                        <ul className='nav-links'>
                            <li>
                              <NavLink href='/#header-section'>
                                Home
                              </NavLink>
                            </li>
                            <li>
                            <NavLink href='/#pizza-section'>
                                Pizza
                              </NavLink>
                            </li>
                            <li>
                                <NavLink href='/#burger-section'>
                                Burger
                              </NavLink>
                            </li>
                            {/* <li>
                                Salads
                            </li> */}
                            {/* <li>
                                Fries
                            </li> */}
                            <li>
                            <NavLink href='/#drinks-section'>
                                Drinks
                              </NavLink>
                            </li>
                        </ul>
                        <div>
                            {/* {currentUser.email && <h6>Hi, {(currentUser.email).charAt(0).toUpperCase() + (currentUser.email).slice(1).toLowerCase()}</h6>} */}
                            {/* {currentUser.name && <h6>Hi, {(currentUser.name).charAt(0).toUpperCase() + (currentUser.name).slice(1).toLowerCase()}</h6>} */}
                            { currentUser.email && <div className="profile">
                              <i className="ri-user-line profile-icon" id="profile-icon" onClick={activeMenu}></i>
                              <ul className='submenu' id='profile-sub-menu'>
                                <li><Link to={`/profile`}>Profile</Link></li>
                                <li><Link to={`/history`}>History</Link></li>
                                {/* <li>Logout</li> */}
                              </ul>
                            </div>}
                            {/* <i className="ri-search-line search"></i> */}
                            <div className='cart-and-notify'>
                              <i className="ri-shopping-bag-line cart" onClick={toggleCart}></i>
                              <span className='notify'>{cartQuantityLocalStorage}</span>
                            </div>
                            {!currentUser.email && <button className='btn' data-bs-toggle="modal" data-bs-target="#exampleModalSignIn">Log In</button>}   
                            {currentUser.email && <button className='btn' onClick={logoutFunc}>Log Out</button>}   
                        </div>
                        <i className="ri-menu-fill hamburger"></i>

                    </div>
                </Col>
            </Row>
        </Container>
    </header>


    {/* Modal Sign up */}
    <div className="modal fade" id="exampleModalSignUp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refCloseSignup}></button>
          </div>
          <div className="modal-body">
              <div className="sign-up">
                  <div className="sign-up__container">
                    
                      <div className="sign-up__container__row">
                              
                              <div className="sign-up__container__row__col col col-sm-11 col-md-11">

                                <form onSubmit={submitFunc}>
                                  {/* <div class="name"> */}
                                    <label>
                                      <h6>First Name</h6>
                                      <input type="text" className="text" name='fname' value={signUpData.fname} onChange={OnChangeFunc}/>
                                    </label>
                                  {/* </div> */}

                                  {/* <div class="name"> */}
                                  <label>
                                      <h6>Last Name</h6>
                                      <input type="text" className="text" name='lname' value={signUpData.lname} onChange={OnChangeFunc}/>
                                    </label>
                                  {/* </div> */}

                                  {/* <div class="email"> */}
                                    <label>
                                      <h6>Email</h6>
                                      <input type="email" className="email" name='email' value={signUpData.email} onChange={OnChangeFunc}/>
                                    </label>
                                  {/* </div> */}

                                  {/* <div class="password"> */}
                                    <label>
                                      <h6>Password</h6>
                                      <input type="password" className="password" name='password' value={signUpData.password} onChange={OnChangeFunc}/>
                                    </label>
                                  {/* </div> */}

                                  <div>
                                    <input type="submit" className="btn btn-submit" value="Sign Up"/>

                                    <p>
                                      Already a User? <span data-bs-toggle="modal" data-bs-target="#exampleModalSignIn" id="signIn">Sign In</span>
                                    </p>

                                  </div>
                                  
                                </form>

                              </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> */}
        </div>
      </div>
    </div>


    {/* Modal Sign in */}
    <div className="modal fade" id="exampleModalSignIn" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" ref={refCloseLogin} aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="sign-up">
                  <div className="sign-up__container">
                    
                      <div className="sign-up__container__row">
                              
                              <div className="sign-up__container__row__col col col-sm-11 col-md-11">

                                <form onSubmit={loginFunc}>
                                  {/* <div class="name"> */}
                                    {/* <label>
                                      <h6>Username</h6>
                                      <input type="text" class="text"/>
                                    </label> */}
                                  {/* </div> */}

                                  {/* <div class="email"> */}
                                    <label>
                                      <h6>Email</h6>
                                      <input type="email" className="email" name='email' value={signInData.email} onChange={OnChangeSignInFunc} />
                                    </label>
                                  {/* </div> */}

                                  {/* <div class="password"> */}
                                    <label>
                                      <h6>Password</h6>
                                      <input type="password" className="password" name='password' value={signInData.password} onChange={OnChangeSignInFunc}/>
                                    </label>
                                    <p>
                                      <span data-bs-toggle="modal" data-bs-target="#exampleModalForgetPass" id="forget-pass">Forget Password?</span>
                                    </p>
                                  {/* </div> */}

                                  <div>
                                    <input type="submit" className="btn btn-submit" value="Sign In"/>

                                    <p>
                                      Don't have an account? <span  data-bs-toggle="modal" data-bs-target="#exampleModalSignUp" id="signUp">Sign Up</span>
                                    </p>

                                  </div>
                                  
                                </form>

                              </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> */}
        </div>
      </div>
    </div>


    {/* Modal Forget Password */}
    <div className="modal fade" id="exampleModalForgetPass" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Forget Password</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" ref={refCloseForgetPass} aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="sign-up">
                  <div className="sign-up__container">
                    
                      <div className="sign-up__container__row">
                              
                              <div className="sign-up__container__row__col col col-sm-11 col-md-11">

                                <form onSubmit={submitForgetPassFunc}>
                                  {/* <div class="name"> */}
                                    {/* <label>
                                      <h6>Username</h6>
                                      <input type="text" class="text"/>
                                    </label> */}
                                  {/* </div> */}

                                  {/* <div class="email"> */}
                                    <label>
                                      <h6>Email</h6>
                                      <input required type="email" className="email" name='email' value={forgetPassData.email} onChange={OnChangeForgetPassFunc} />
                                    </label>
                                  {/* </div> */}

                                  {/* <div class="password"> */}
                                    <label>
                                      <h6>New Password</h6>
                                      <input required type="password" className="password" name='password' value={forgetPassData.password} onChange={OnChangeForgetPassFunc}/>
                                    </label>
                                  {/* </div> */}

                                  <label>
                                      <h6>Confirm Password</h6>
                                      <input type="password" className="password" name='confirmPassword' value={forgetPassData.confirmPassword} onChange={OnChangeForgetPassFunc}/>
                                    </label>

                                  <div>
                                    <input required type="submit" className="btn btn-submit" value="Reset Password"/>

                                    <p>
                                      Don't have an account? <span  data-bs-toggle="modal" data-bs-target="#exampleModalSignUp" id="signUp">Sign Up</span>
                                    </p>
                                  </div>
                                  
                                </form>

                              </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> */}
        </div>
      </div>
    </div>

    </>
  )
}

export default Header