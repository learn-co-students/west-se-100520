import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextSushi, eatThatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(soosh=> <Sushi sushi={soosh} key={soosh.id} eat={eatThatSushi}/>)
        }
        <MoreButton nextSushi={nextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer