var React = require('react');
var TaskTimerTime =  require('./TaskTimerTime');

var TaskTimer = React.createClass({
  getInitialState: function() {
    return {time: 0};
  },
startTimer: function () {
    this.setState({
      time: 0,
    });
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  },
  stopTimer: function ()  {
    clearInterval(this.timer);
    this.timer = null;
  },
  render: function() {
    return (
      <div>
        <button className="btn btn-warning btn-sm" type="button" onClick={this.startTimer}>Start</button>
        <button className="btn btn-warning btn-sm ml-1" type="button" onClick={this.stopTimer}>Stop</button>
        <TaskTimerTime time={this.state.time} />
      </div>
    );
  }
});

module.exports = TaskTimer;
