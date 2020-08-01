import React from 'react';
import SignUp from '../components/form/sign_up'
import SignIn from '../components/form/sign_in'

function Form() {
  return (
    <div className="form_wrapper">
      <SignUp />
      <SignIn />
      <div />

      <style jsx>{`
        input[type=text],input[type=email],input[type=password]{
          width: 247px;
          height: 20px;
        }
        ul {
          padding-left: 25px;
        }
        ul li {
          list-style: none;
          margin-top: 28px;
        }
        label {
          color: gray;
          margin-right: 10px;
          width: 110px;
          float: left;
        }
      .form_wrapper{
        display: flex;
        justify-content: center;
        padding: 20px;
        position: relative;
        height: 450px;
      }
      .form_area{
        display: flex;
        flex-direction:column;
        height: 250px;
        width: 400px;
        padding-right: 30px;

      }
      .btn_area {
        align-self:flex-end;
        float: right;
        margin-top: auto;
      }
      .sign_up::after{
        content: "";
        box-sizing: content-box;
        width: 1px;
        height: 200px;
        vertical-align: middle;
        position: absolute;
        top: 70px;
        bottom: 0;
        background-color: gray;
        left: 50%;
      } 
    `}</style>
    </div>
  );
}

export default Form;
