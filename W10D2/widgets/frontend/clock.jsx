import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this._tick = this._tick.bind(this);
    this.days = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat"
    ];

    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ]
  }

  render(){
    //save hours mins and seconds as constant
    //then call in div
    return (
      <div className="clock">
          <h1>Clock</h1>
          <div className="util">
            <div className="time">
              <h2>Time:</h2> 
              <h2>{`${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()} PDT`}</h2>
            </div>

            <div className="Date">
              <h2>Date:</h2> 
              <h2>{`${this.days[this.state.time.getDay()]} ${this.months[this.state.time.getMonth()]}  ${this.state.time.getUTCDate()} ${this.state.time.getFullYear()} `}</h2>
            </div>
          </div>

      </div>
    )
  }

  _tick() {
    this.setState({time: new Date()})
  }

  
  componentDidMount(){
    this.interval = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}


export default Clock;