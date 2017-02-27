var React = require('react');

var TaskTimerTime = React.createClass({
    getDefaultProps: function() {
        return {
        time: 0
        };
    },
    formatTime: function(t) {
    const seconds = Math.floor(t % 60);
    const minutes = Math.floor(t / 60 % 60);
    const hours = Math.floor(t / 3600 % 60);
    return {
      seconds: seconds,
      minutes: minutes,
      hours: hours
    };
  },
  pad: function(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  },
  render: function(){
      const seconds = this.pad(this.formatTime(this.props.time).seconds, 2);
      const minutes = this.pad(this.formatTime(this.props.time).minutes, 2);
      const hours = this.pad(this.formatTime(this.props.time).hours, 2);
      return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
      )
  }
});
module.exports = TaskTimerTime;

