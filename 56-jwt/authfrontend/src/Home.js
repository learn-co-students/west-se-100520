import React from 'react';

const Home = props => {
  console.log(props);
  return (
    <div className="item">
       Welcome {props.username}!
    </div>
  );
};
export default Home;
