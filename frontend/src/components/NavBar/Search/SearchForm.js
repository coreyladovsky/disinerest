import React from "react";
import { withRouter } from 'react-router-dom'
import '../../../css/SearchForm.css'

class SearchForm extends React.Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value, outline: true });
  };

  updateBorder = (e) => {
    this.setState({outline: !this.state.outline})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchQueryPins({query: this.state.query});
    this.setState({query: ""})
    this.props.history.push("/")
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="SearchForm">
        <div className={this.state.outline ? "outline" : "noOutline"}>
          <i className="fa fa-search" ></i>
          <input
            type="text"
            onChange={this.handleChange}
            onFocus={this.updateBorder}
            onBlur={this.updateBorder}
            value={this.state.query}
            placeholder="Search"
          />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
