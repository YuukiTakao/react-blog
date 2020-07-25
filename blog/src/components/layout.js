import React from 'react';

function BaseLayout(props) {
  return (
    <>
      <div className="wrapper">
        <header>
          <h2>Implementing login forms with React</h2>
        </header>
        {props.children}
        <footer>
          Its footer
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
      `}</style>
    </>
  );
}

export default BaseLayout;
