import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

// ReactDOM.render(<Tabs name={[{ title: "one", content: "I am one" }]} />, root)

//[ {title: , content: }, ]