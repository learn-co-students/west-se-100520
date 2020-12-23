import React from 'react';
import Artist from './Artists';
import artworks from './artworks';

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paintings: artworks
    };

  }



  render() {

    const allPaintings = this.state.paintings.map(painting => (
      <Artist
        key={Math.random()}
        artist={painting.artist}
      />
    ));
    return (
      <div>
        <h1>All Paintings</h1>
        <div className="ui items">{allPaintings}</div>
      </div>
    );
  }
}
export default ArtistList;
