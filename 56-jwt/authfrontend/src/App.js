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
    this.handleAuthFetch(info, 'http://localhost:3000/login')
  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info, 'http://localhost:3000/users')
    
  }
  
  handleAuthFetch = (info, request) => {  
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({user: data.user, token: data.token}, () => {
        this.props.history.push('/')
      })
    })
  }
  
  addToCollection = (art) => {
    fetch('http://localhost:3000/userarts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${this.state.token}`
      },
      body: JSON.stringify({art_id: art.id})
    })
    .then(res => res.json())
    .then(console.log)
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
