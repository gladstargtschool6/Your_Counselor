import React, { Component } from 'react';
import logo from './ggts1.jpg';
import './App.css';
import firebase from 'firebase'
import FileUpload from './FileUpload'
import chat from './chat'
import api from './api'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      pictures: []
    }
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
      console.log(user)
    })

    firebase.database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      })
    })
  }
  handleUpload (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`/pictures/${file.name}`)
    const task = storageRef.put(file)

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      console.log(error.message)
    }, () => {
      const record = {
        photoURL: this.state.user.photoURL,
        displayName: this.state.user.displayName,
        image: task.snapshot.downloadURL
      }

      const dbRef = firebase.database().ref('pictures')
      const newPicture = dbRef.push()
      newPicture.set(record)
    })
  }
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  renderLogin () {
    if (this.state.user) {
      return (
        <div>
          <img className='App-user' src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
          <FileUpload
            onUpload={this.handleUpload}
          />
          {
            this.state.pictures.map(picture => {
              return (
                <div>
                  <img src={picture.image} alt='' width='320' />
                  <br />
                  <div className='author'>
                    <img className='avatar' src={picture.photoURL} alt={picture.displayName} />
                    <span>{picture.displayName}</span>
                  </div>
                </div>
              )
            }).reverse()
          }
        </div>
      )
    } else {
      return (
        <button onClick={this.handleAuth}>Login with Google</button>
      )
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Spidergram</h2>
        </div>
        <div className='App-intro'>
          { this.renderLogin() }
        </div>
      </div>
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.gladstar.sch.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gladstar Gifted and Talented School
          </a>
        </header>
      </div>
    );
  }
}

export default App;
