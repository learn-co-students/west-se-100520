import React from 'react';

const Artist = ({artist}) => {
  return (
    <div className="item">
      <div className="ui small ">
      <h2>{artist.name}</h2>
      <p>{artist.hometown}</p>
      <p>{artist.birthday}</p>
      <p>{artist.deathday}</p>
      </div>
    </div>
  );
};
export default Artist;
