import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {img_url, eaten, name, price} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatOne(props.sushi)}>
        { 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi