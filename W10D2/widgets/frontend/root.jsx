import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const names = [
      {title: "one", content: "I'm one"},
      { title: "two", content: "I'm two" },
      { title: "three", content: "I'm three" }
    ];
    return (
      <div>
        <div><Clock /></div>
        <div><Tabs names={names} /></div>
      </div>
    )

  }
}

// const Root = (props) => {
// };

export default Root;