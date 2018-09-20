import * as React from 'react';
import './App.css';
import Card from './Card'
import logo from './logo.svg';
import Modal from './Modal';
import Person from './Person';
import Profile from './Profile';

class App extends React.Component {
  public render() {
    let people = [
      { Id: 1, Name: "Mitch Hussey", Location: "New York", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/23275741_10155914503929777_7875720261949730197_o.jpg?_nc_cat=0&oh=44aca1ca4085351b3b0d5580697b8330&oe=5C1D1637", IsFavorite: true, Notes: [] },
      { Id: 2, Name: "Mark Oelkers", Location: "Dallas", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/13901400_10153363537012255_1903444876443362835_n.jpg?_nc_cat=111&oh=4613ae458dba6efc83040e4fdeb8b66f&oe=5C29A2F9", IsFavorite: true, Notes: [] },
    ];

    let people2 = [];
    let myPerson: Person = { Id: 2, Name: "Mark Oelkers", Location: "Dallas", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/13901400_10153363537012255_1903444876443362835_n.jpg?_nc_cat=111&oh=4613ae458dba6efc83040e4fdeb8b66f&oe=5C29A2F9", IsFavorite: true, Notes: [] }
    people2.push(myPerson);

    var htmlCards = people.map(p => <div className="col l4 m6 hide-on-small-and-down">
      <Card Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
    </div>)

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

          {htmlCards}

          {/* <Card Id={myPerson.Id} Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite={myPerson.IsFavorite} Notes={myPerson.Notes} /> */}
          <Modal />
        </div>
        <Profile Id={myPerson.Id} Name={myPerson.Name} Location={myPerson.Location} Image={myPerson.Image} IsFavorite={myPerson.IsFavorite} Notes={myPerson.Notes} />
      </div>
    );
  }
}

export default App;
