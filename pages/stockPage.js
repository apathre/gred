import React, { Component } from "react";
import { Link } from "react-router-dom";

class Stock extends Component {
  handleSubmit(sym) {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&apikey=XRKJ74TU6IIBBN4Y`
    )
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }

  render() {
    return (
      <div>
        <p>Hello to Stock Page!! </p>
        <p onLoad={this.handleSubmit(this.props.match.params.id)} />
        <br />
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Stock;
