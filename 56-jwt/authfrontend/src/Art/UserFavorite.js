import UserPainting from "./UserPainting";
import React from 'react'
class UserFavorite extends React.Component {
  
  allPaintings = () => {
    if (this.props.paintings){
      return this.props.paintings.map(painting => (
        <UserPainting
          key={Math.random()}
          painting={painting}
        />
      )) 
    } 
  }

  render() {


    return (
      <div>
        <h1>All Paintings</h1>
        <div className="ui items">{this.allPaintings()}</div>
      </div>
    );
  }
}

export default UserFavorite;
  