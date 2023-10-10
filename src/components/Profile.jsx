import React from "react";
import { Container, Row, Col } from "reactstrap";

const Profile = () => {
  return (
    <>
      <section class="profile">
        <Container class="profile__container container">
          <Row class="profile__container__row row">
            <Col class="profile__container__row__col1 col col-md-6 col-lg-5 col-xl-5 col1">
              <div class="edit-profile">
                <span>Edit Profile</span>&ensp;
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="main">
                <h6>Contact Info</h6>
                <div class="image">
                  <img
                    src="./images/profile.png"
                    alt="profile"
                    class="img-fluid"
                  />
                  <h6>John Doe</h6>
                </div>
                <div class="name d-flex align-items-start justify-content-between gap-3">
                  <label>
                    <div>First Name</div>
                    <input type="text" />
                  </label>
                  <label>
                    <div>Last Name</div>
                    <input type="text" />
                  </label>
                </div>
                <div class="email">
                  <label class="w-100">
                    <div>Email</div>
                    <div>
                      <input type="email" class="w-100" />
                    </div>
                  </label>
                </div>
                <div class="phone">
                  <label class="w-100">
                    <div>Phone Number</div>
                    <input type="text" class="w-100" />
                  </label>
                </div>
                <button class="btn-pass">Reset Password</button>
              </div>
            </Col>
            <Col class="profile__container__row__col2 col col-md-6 col-lg-5 col-xl-5 col2">
              <div class="main">
                <h6>Payment Information</h6>
                <div class="email">
                  <label class="w-100">
                    <div>Email</div>
                    <div>
                      <input type="email" class="w-100" />
                    </div>
                  </label>
                </div>
                <div class="credit">
                  <label class="w-100">
                    <div>Credit Card Number</div>
                    <div>
                      <input type="email" class="w-100" />
                    </div>
                  </label>
                </div>
                <div class="issue-exp-date d-flex align-items-start justify-content-between gap-3">
                  <label>
                    <div>Exp Date</div>
                    <input type="text" />
                  </label>
                  <label>
                    <div>CSV</div>
                    <input type="text" />
                  </label>
                </div>
                <div class="payment">
                  <label class="w-100">
                    <div>Payment Plan</div>
                    <button class="w-100">Standard</button>
                  </label>
                </div>
                <div>
                  <label for="hour">
                    <div>Hours Remaining</div>
                  </label>
                  <div class="d-flex align-items-center justify-content-between gap-3 hour-remaining">
                    <input type="text" id="hour" />
                    <button class="hour-btn">
                      <i class="ri-add-line"></i> Add Hours
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Profile;
