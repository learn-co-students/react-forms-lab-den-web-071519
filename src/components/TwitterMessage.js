import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      maxLength: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      maxLength: this.state.maxLength - event.target.value.length
    })
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.state.maxLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
