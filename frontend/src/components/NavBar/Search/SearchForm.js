import React from "react";
import mag from "../../../assets/mag.png";

class SearchForm extends React.Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchQueryPins(this.state);
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

export default SearchForm;
