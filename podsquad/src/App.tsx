import * as React from 'react';
import './App.css';
import Card from './Card'
import ContactList from './ContactList'
import Note from './Note'
// import Person from './Person';
import Profile from './Profile';
interface IAppState {
  showContacts: boolean;
  showDetails: boolean;
}

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      showContacts: true,
      showDetails: false
    }
  }

  public render() {

    var notes = [];
    var myNote: Note = { Id: 1, PersonId: 2, Text: "Mitch rulz" };
    notes.push(myNote);
    var myNote: Note = { Id: 2, PersonId: 2, Text: "Marc rulz" };
    notes.push(myNote);

    let people = [
      { Id: 1, Name: "Mitch Hussey", Location: "New York", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/23275741_10155914503929777_7875720261949730197_o.jpg?_nc_cat=0&oh=44aca1ca4085351b3b0d5580697b8330&oe=5C1D1637", IsFavorite: true, Notes: [] },
      { Id: 2, Name: "Mark Oelkers", Location: "Dallas", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/13901400_10153363537012255_1903444876443362835_n.jpg?_nc_cat=111&oh=4613ae458dba6efc83040e4fdeb8b66f&oe=5C29A2F9", IsFavorite: true, Notes: notes },
    ];

    var htmlCards = people.map(p =>
      <div>
        <div className="col l4 m6 hide-on-small-and-down">
          <Card Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
        </div>
        <ul className="collection hide-on-med-and-up">
          <ContactList Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
        </ul>
      </div>
    );

    var htmlProfile = people.map(p =>
      <div className="col s12">
        <Profile Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
      </div>
    )

    let content;
    if (this.state.showContacts) {
      content = htmlCards
    }
    else if (this.state.showDetails) {
      content = htmlProfile
    }

    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}

        <div className="row left contactCard">
          <div>
            <button className="btn" onClick={this.onAClick}>A</button>
            <button className="btn" onClick={this.onBClick}>B</button>
          </div>
          {content}
        </div>
      </div>
    );
  }
  private onAClick = () => {
    this.setState({ showContacts: true });
    this.setState({ showDetails: false });

  }
  private onBClick = () => {
    this.setState({ showDetails: true });
    this.setState({ showContacts: false });
  }
}

export default App;
