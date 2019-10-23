import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }


  render() {
    
    const tabs = this.props.names.map((tab) => {
      return (
        <li>
          <h1>{tab.title}</h1>
          {/* <article>{tab.content}</article> */}
        </li>
      )
    })
    
    return (
      <div>
        <ul>
          {tabs}
          <article>{this.props.names[this.state.tabIndex].content}</article>


        </ul>
      </div>
    )
  }

}

export default Tabs;