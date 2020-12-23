import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import Navbar from './Navbar'
import PaintingList from './Art/PaintingList'
import ArtistList from './Art/ArtistList'
import Home from './Home'
import NotFound from './NotFound'
import Form from './Auth/Form'
import UserFavorite from './Art/UserFavorite'



class App extends React.Component{
  state ={
    user: "",
    token:""
  }
//render components 
  dynamicPaintings = (routerProps) =>   <PaintingList paintingId={routerProps.match.params.id} />
  handleHome = () => <Home username={this.state.user.username} />
  handleAllPaintings = () =>  <PaintingList addToCollection={this.addToCollection} />
  handleUserPaintings = () =>  <UserFavorite paintings={this.state.user.arts} />
  renderForm = (routerProps) => {
    console.log(routerProps)
    if(routerProps.location.pathname === "/login"){
      return <Form name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />
    }
  }
//auth
  handleLogin = (info) => {
    console.log('login')

  }

  handleSignup = (info) => {
    console.log('sign up')
    
  }
  
  handleAuthFetch = (info, request) => {  
    
  }
  
  addToCollection = (art) => {


  }

  
  render(){
    return (
      <div className="App">
        <Navbar icon="paint brush" title="Painterest" description="out app" />
     
        <Switch>
        <Route path="/" exact component={this.handleHome} />
        <Route path="/login" exact component={this.renderForm} />
        <Route path="/signup" exact component={this.renderForm} />
        <Route path="/paintings" exact component={this.handleAllPaintings}/>
        <Route path="/paintings/:id" render={this.dynamicPaintings} />
        <Route path="/favorites" exact component={this.handleUserPaintings} />
        <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
