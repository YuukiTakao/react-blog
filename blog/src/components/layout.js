import React from 'react';

function BaseLayout(props) {
  return (
    <>
      <header>
        Its header
      </header>
      {props.children}
      <footer>
        Its footer
      </footer>
    </>
  );
}

export default BaseLayout;
