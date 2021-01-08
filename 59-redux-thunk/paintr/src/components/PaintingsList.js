import React from "react";
import PaintingListItem from "./PaintingListItem";
import { connect } from "react-redux";

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          key={painting.id}
          selectPainting={props.selectPainting}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

// state: { paintings: [], searchText: "" }
const mapStateToProps = state => {
  return {
    paintings: state.paintings.filter(
      p =>
        p.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
        p.artist.name.toLowerCase().includes(state.searchText.toLowerCase())
    )
  };
};

export default connect(mapStateToProps)(PaintingsList);
