import React from "react";
import SignupForm from "../../CommonComponent/SignupForm";
import Illustration from "../../CommonComponent/Illustration";

const Signup = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div className="col-md-6">
            <Illustration />
          </div>
          <div className="col-md-6">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
