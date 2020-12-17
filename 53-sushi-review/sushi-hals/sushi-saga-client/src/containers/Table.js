import React, { Fragment } from 'react'

const Table = ({money, numEaten}) => {

  const renderPlates = () => {
    let plates = []
    for (let i = 0; i < numEaten; i++) {
      // for however many we've eaten, add another plate div to the array
      plates.push(<div className="empty-plate" style={{ top: -7 * i }}/>)
    }
    return plates
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates()
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table