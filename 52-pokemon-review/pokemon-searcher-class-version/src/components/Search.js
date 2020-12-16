import React from 'react'

const Search = ({christmas}) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={christmas}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
