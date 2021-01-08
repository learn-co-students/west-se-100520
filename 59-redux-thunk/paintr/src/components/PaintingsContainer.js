import React from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";

class PaintingsContainer extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            render={data => {
              return (
                <PaintingForm
                  paintingId={data.match.params.paintingId}
                />
              );
            }}
          />
          <Route
            path="/paintings/:paintingId"
            render={data => {
              return (
                <PaintingDetail paintingId={data.match.params.paintingId} />
              );
            }}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar />
                <PaintingsList />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
