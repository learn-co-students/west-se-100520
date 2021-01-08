// action creators

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function increaseVotes(paintingId) {
  return { type: "INCREASE_VOTES", paintingId };
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday },
    paintingId
  };
}

export { changeSearchText, increaseVotes, updatePainting };
