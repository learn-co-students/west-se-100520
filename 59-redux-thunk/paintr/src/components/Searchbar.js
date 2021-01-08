import React from "react";
import { connect } from "react-redux";
import { changeSearchText } from "../redux/actions";

const Searchbar = props => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

const mapStateToProps = state => {
  return {
    value: state.searchText
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: value => dispatch(changeSearchText(value))
//   };
// };

export default connect(
  mapStateToProps,
  { onChange: changeSearchText }
)(Searchbar);
