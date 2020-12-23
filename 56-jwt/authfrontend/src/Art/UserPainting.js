import React from 'react';
import {Link} from 'react-router-dom'

const UserPainting = props => {
  // console.log('Painting props', props);
  return (
    <div className="item">
      <div className="ui small image">
        <Link to={`paintings/${props.painting.id}`}> <img src={props.painting.image} alt={props.painting.slug} /></Link>
      </div>
      <div className="middle aligned content">
        <div className="description">
          <a onClick={() => props.handleVote(props.painting.id)}>
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
      </div>
    </div>
  );
};
export default UserPainting;
