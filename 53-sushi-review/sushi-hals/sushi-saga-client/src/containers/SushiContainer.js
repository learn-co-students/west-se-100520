import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import MoreMoney from '../components/MoreMoney'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushi.length ?
          props.sushi.map(soosh => <Sushi sushi={soosh} key={soosh.id} eatOne={props.eatOne}/>)
          :
          <h1>Loading....</h1>
        }

        <MoreButton showFourMore={props.showFourMore}/>
        <MoreMoney addMoney={props.addMoney}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer