import React from "react";
import { Link } from 'react-router-dom'

const PaintingListItem = props => (
  <Link to={`/paintings/${props.painting.slug}`} className="item" >
    <div className="content">
      <h2>{props.painting.title}</h2>
      <em>
        {props.painting.artist.name}·{props.painting.date}
      </em>
    </div>
  </Link>
);

export default PaintingListItem;
