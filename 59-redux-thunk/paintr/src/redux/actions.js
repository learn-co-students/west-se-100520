const URL = "http://localhost:3000/paintings"

// action creators

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function increaseVotes(paintingId) {
  // return { type: "INCREASE_VOTES", paintingId };
  return (dispatch, getState) => {
    const votes = getState().paintings.find(p => p.id === paintingId).votes
    console.log('votes: ', votes)
    fetch(URL + `/${paintingId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: paintingId,
        votes
      })
    })
    .then(() => dispatch({ type: "INCREASE_VOTES", paintingId }))
  }
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday },
    paintingId
  };
}

const loadingPaintings = () => {
  return {type: "LOADING_PAINTINGS"}
}

const loadedPaintings = () => {
  return {type: "LOADED_PAINTINGS"}
}

// plain old action creator
const fetchedPaintings = (paintings) => {
  return {type: "FETCHED_PAINTINGS", paintings }
}

// Thunk action creator
const fetchPaintings = () => {
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
      .then(res => res.json())
      .then(paintings => {
        dispatch(fetchedPaintings(paintings))
      })
      .then(() => dispatch(loadedPaintings()))
  }
}

export { changeSearchText, increaseVotes, updatePainting, fetchPaintings };
