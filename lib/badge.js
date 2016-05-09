import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" type="button">
        {this.props.message} <span class="badge">{this.props.number}</span>
      </button>
    );
  }
}

export default Badge;
