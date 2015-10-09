var React = require('react'),
    ReactDOM = require('react-dom');

// Module to capture microphone input
var InputCaptureModule = React.createClass({
  render: function () {
    if (this.hasGetUserMedia()) {
      // Do stuff
    } else {
      alert('getUserMedia() is not supported in your browser');
    }
    return (<div></div>)
  },

  hasGetUserMedia: function () {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }
})

ReactDOM.render(<InputCaptureModule />, document.getElementById('capture'));
