import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { increaseVotes as vote } from "../redux/actions";

class PaintingDetail extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {
            this.props.vote(this.props.painting.id);
          }}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

// ownProps == props that are passed in from the parent
const mapStateToProps = (state, propsFromParent) => {
  return {
    painting: state.paintings.find(p => p.id === propsFromParent.paintingId)
  };
};

// want a 'vote' prop
// it should dispatch an action to increase the votes on the painting
// const mapDispatchToProps = dispatch => {
//   return {
//     vote: paintingId => {
//       dispatch(increaseVotes(paintingId));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  { vote }
)(PaintingDetail);
