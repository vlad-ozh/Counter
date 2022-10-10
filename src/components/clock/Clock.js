import React from 'react';
import './style.css'

export class Clock extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }
  
  componentDidMount() {
    this.setTimeRef = setInterval(() => this.setDate(), 1000);
  }

  setDate() {
    this.setState(() => ({date: new Date()}));
  }

  renderCurrentDate = () => {
    const { date } = this.state;

    const currentDate =
      date.toDateString().slice(0, 3) + ', ' +
      date.toLocaleDateString();

    return currentDate;
  };

  renderCurrentTime = () => {
    const { date } = this.state;

    const currentHours =
      date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const currentMinutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const currentSeconds =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

    return currentTime;
  };


  render() {
    return (
      <div className='clock'>
        <h2 className='clockTitle'>
          {this.renderCurrentDate()}
          {'.....'}
          {this.renderCurrentTime()}
        </h2>
      </div>
    );
  }
}
