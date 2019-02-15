import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import { fetchQueryPins } from "../../../actions/pins_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchQueryPins: query => dispatch(fetchQueryPins(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
