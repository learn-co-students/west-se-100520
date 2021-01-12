import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";

class PaintingsContainer extends React.Component {

  handleLoading = () => {
    if (this.props.loading) {
      return <h2>Loading...</h2>
    } else {
      return <PaintingsList />
    }
  }
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
                {this.handleLoading()}
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {loading: state.loading}
}
export default connect(mapStateToProps)(PaintingsContainer);
