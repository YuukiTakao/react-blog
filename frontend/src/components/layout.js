import React from 'react';

function BaseLayout(props) {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>Implementing login in React</h1>
        </header>
        {props.children}
        <footer>
          <span className="copyright">
            ©Yuuki Takao. 2020
          </span>
        </footer>
      </div>
      <style jsx>{`
        header{
          text-align: center;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wrapper{
          width: 1002px;
          margin: 0 auto;
        }
        .copyright {
          float: right;
        }
      `}</style>
    </>
  );
}

export default BaseLayout;
