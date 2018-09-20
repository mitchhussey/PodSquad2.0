import * as React from 'react';
import './App.css';
import Card from './Card'
import logo from './logo.svg';
import Modal from './Modal';
import Person from './Person';
import Profile from './Profile';

class App extends React.Component {
  public render() {
var myPerson : Person= {Name: "Mitch Hussey", Location: "New York", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/23275741_10155914503929777_7875720261949730197_o.jpg?_nc_cat=0&oh=44aca1ca4085351b3b0d5580697b8330&oe=5C1D1637", IsFavorite: true} 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PodSqad</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="row left contactCard">
        <div className="col l4 m6 hide-on-small-and-down">
        <Card Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite = {myPerson.IsFavorite}/>
        </div>
        <div className="col l4 m6 hide-on-small-and-down">
        <Card Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite = {myPerson.IsFavorite}/>
        </div>
        <Card Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite = {myPerson.IsFavorite}/>
        <Modal/>
        </div>
        <Profile Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite = {myPerson.IsFavorite}/>
      </div>
    );
  }
}

export default App;
