import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  displayCounter = () => {
    return (
      <p>{this.props.maxChars - this.state.value.length}</p>
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        {this.displayCounter()}
      </div>
    );
  }
}

export default TwitterMessage;
