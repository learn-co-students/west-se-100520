import UserPainting from "./UserPainting";
import React from 'react'
class UserFavorite extends React.Component {

    render() {
  
      const allPaintings = this.props.paintings.map(painting => (
        <UserPainting
          key={Math.random()}
          painting={painting}
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
  export default UserFavorite;
  