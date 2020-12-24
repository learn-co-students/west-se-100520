import React from 'react';
import {Link} from 'react-router-dom'

const Painting = props => {
  // console.log('Painting props', props);
  return (
    <div className="item">
      <div className="ui small image">
        <Link to={`paintings/${props.painting.id}`}> <img src={props.painting.image} alt={props.painting.slug} /></Link>
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}" by ${props.painting
          .artist.name}`}</div>
        <div className="description">
          <a onClick={() => props.handleVote(props.painting.id)} href="#!">
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div onClick={props.handleDelete} className="ui red basic button">
          Delete It
        </div>
        <div onClick={() => props.addToCollection(props.painting)} className="ui red basic button">
          add
        </div>
      </div>
    </div>
  );
};
export default Painting;
