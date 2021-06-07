import React, {Component} from "react";
import "./error_boundary.scss";

class ErrorBoundary extends Component {

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
        {this.props.message}
      </div>
    );
    return this.props.children;
  }
}

export default ErrorBoundary;