import React from "react";

class TwitterMessage extends React.Component {

  state = {
    chars: ""
  };

  handleChange = (event) => {
    this.setState({chars: event.target.value})

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleChange(event)} value={this.state.chars}/>
        <p>{`${this.props.maxChars - this.state.chars.length} Characters left.`}</p>
      </div>
    );
  }
}

export default TwitterMessage;
