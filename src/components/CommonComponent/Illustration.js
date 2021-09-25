import React from "react";
import IllustrationImg from "../../assets/images/login illustration.jpg";
import Classes from "../../Styles/Illustration.module.css";

const Illustration = () => {
  return (
    <>
      <div className={Classes.illustrationImg}>
        <img src={IllustrationImg} alt="" />
      </div>
    </>
  );
};

export default Illustration;
