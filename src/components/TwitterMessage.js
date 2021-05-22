import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "", 
    charsRemain: this.props.maxChars
    }
  }

  handleChange = (e) => {
    let total = this.props.maxChars - e.target.value.length
    this.setState(
      { [e.target.name]: e.target.value, charsRemain: total }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        <p>Characters Remaining: {this.state.charsRemain}</p>
      </div>
    );
  }
}

export default TwitterMessage;
