// src/components/Alert.js

import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "1px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "5px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }


  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = '#43b4d6'; // white
      this.bgColor = '#ffffff'; // light blue
    }
  }

  class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = '#ef3a7c'; // red
      this.bgColor = '#ffffff'; // light red
    }
  }

  class WarningAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = '#7f34c6'; // purple
      this.bgColor = '#ffffff'; // light purple
    }
  }

export { InfoAlert, ErrorAlert, WarningAlert};