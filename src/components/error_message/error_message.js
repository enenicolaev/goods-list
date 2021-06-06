import React, {Component} from "react";
import "./error_message.scss";

class ErrorMessage extends Component {
  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({
      error: true,
    })
  }

  render() {
    if (this.state.error) return (
      <div className="error-msg">
        Произошла ошибка
      </div>
    );
    return this.props.children;
  }
}

export default ErrorMessage;