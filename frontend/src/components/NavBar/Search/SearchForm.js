import React from "react";
import mag from "../../../assets/mag.png";
import { withRouter } from 'react-router-dom'

class SearchForm extends React.Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchQueryPins(this.state);
    this.setState({query: ""})
    this.props.history.push("/")
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <img src={mag} alt="mag" />
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
