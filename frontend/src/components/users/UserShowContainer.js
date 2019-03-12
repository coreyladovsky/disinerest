import { connect } from "react-redux";
import UserShow from "./UserShow";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
