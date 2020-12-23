import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import paintingsData from "../paintings.json";
import { Route, Switch } from 'react-router-dom'

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPaintingId: null,
      paintings: paintingsData.paintings,
      editing: false
    };
  }

  selectPainting = id => {
    if (this.state.editing) {
      alert("you need to save before switching paintings");
    } else {
      this.setState({ selectedPaintingId: id });
    }
  };

  voteForPainting = id => {
    // make an exact copy
    // except for the things we are changing
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
        // update the votes
        let newPainting = {
          ...painting,
          votes: painting.votes + 1
        };
        return newPainting;
      } else {
        return painting;
      }
    });
    this.setState({ paintings: updatePaintings });
  };

  updatePaintingInfo = (paintingId, info) => {
    let newPaintingsArray = this.state.paintings.map(painting => {
      if (painting.id === paintingId) {
        // update the painting
        // naive way
        // wrong! painting.title = info.title
        // console.log(painting);
        return {
          ...painting,
          title: info.title,
          artist: {
            name: info.name,
            birthday: info.birthday,
            deathday: info.deathday
          }
        };
      } else {
        return painting;
      }
    });

    this.setState({ paintings: newPaintingsArray, editing: false });
  };

  edit = () => {
    this.setState({ editing: true });
  };

  cancel = () => {
    this.setState({ editing: false });
  };

  render() {
    let onePainting = {
      "id": "59bd5a519c18db5297a32479",
      "collecting_institution": "",
      "date": "1446",
      "dimensions": {
        "text": "11 1/2 Ã— 8 1/2 in",
        "height": 11.5,
        "width": 8.5,
        "depth": null,
        "diameter": null
      },
      "slug": "petrus-christus-portrait-of-a-carthusian",
      "title": "Portrait of a Carthusian",
      "image": "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
      "artist": {
        "name": "Petrus Christus",
        "hometown": "Baarle-Hertog, Belgium",
        "birthday": "1410",
        "deathday": "1475"
      },
      "votes": 64
    }
    let selectedPainting = this.state.paintings.find(
      painting => painting.id === this.state.selectedPaintingId
    );
    let paintingToShow = this.state.editing ? (
      <PaintingForm
        cancel={this.cancel}
        painting={selectedPainting}
        updatePaintingInfo={this.updatePaintingInfo}
      />
    ) : (
      <PaintingDetail
        edit={this.edit}
        vote={this.voteForPainting}
        painting={selectedPainting}
      />
    );
    return (
      <div>
        <Switch>
          <Route 
            path='/paintings/:slug'
            render={({match}) => {
              console.log(match)
              const chosenPainting = this.state.paintings.find(painting => painting.slug === match.params.slug)
              
              return chosenPainting ? <PaintingDetail painting={chosenPainting} />: <div>Loading...</div>
            }
            }  />
          <Route path='/paintings' render={() => {
            return <PaintingsList paintings={this.state.paintings}/>
          }} />
        </Switch> 
      </div>
    );
  }
}

export default PaintingsContainer;
