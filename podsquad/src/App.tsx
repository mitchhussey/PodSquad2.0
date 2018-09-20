import * as React from 'react';
import './App.css';
import Card from './Card'
import ContactList from './ContactList'
import Note from './Note'
// import Person from './Person';
import Profile from './Profile';
import Person from './Person';
interface IAppState {
  showContacts: boolean;
  showDetails: boolean;
  people: Array<Person>;
}

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    var notes = [];
    var myNote: Note = { NoteId: 1, PersonId: 2, Text: "Mitch rulz" };
    notes.push(myNote);
    var myNote: Note = { NoteId: 2, PersonId: 2, Text: "Marc rulz" };
    notes.push(myNote);

    let people = [
      // { Id: 1, Name: "Mitch Hussey", Location: "New York", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/23275741_10155914503929777_7875720261949730197_o.jpg?_nc_cat=0&oh=44aca1ca4085351b3b0d5580697b8330&oe=5C1D1637", IsFavorite: true, Notes: [] },
      { Id: 2, Name: "Mark Oelkers", Location: "Dallas", Image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/13901400_10153363537012255_1903444876443362835_n.jpg?_nc_cat=111&oh=4613ae458dba6efc83040e4fdeb8b66f&oe=5C29A2F9", IsFavorite: true, Notes: notes },
      { Id: 3, Name: "Bruce Ballengee", Location: "Dallas", Image: "https://theoceanapi.azurewebsites.net/people/bruce-ballengee/image_2x?dateTime=636016716887400000", IsFavorite: true, Notes: [] },
      { Id: 4, Name: "Kerry Stover", Location: "Unknown", Image: "https://theoceanapi.azurewebsites.net/people/kerry-stover/image_2x", IsFavorite: true, Notes: [] },
      { Id: 5, Name: "Dbrav Dunkley", Location: "Dallas", Image: "https://theoceanapi.azurewebsites.net/people/dbrav-dunkley/image_2x?dateTime=636012715844130000", IsFavorite: true, Notes: [] },
      { Id: 6, Name: "Brandon Buchanan", Location: "Houston", Image: "https://theoceanapi.azurewebsites.net/people/brandon-buchanan/image_2x", IsFavorite: true, Notes: [] },
      { Id: 7, Name: "Shelby Blue", Location: "Dallas", Image: "https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x", IsFavorite: true, Notes: [] },
      { Id: 8, Name: "Ryan Carter", Location: "Dallas", Image: "https://theoceanapi.azurewebsites.net/people/ryan-carter/image_2x", IsFavorite: true, Notes: [] },
      { Id: 9, Name: "Mike Evans", Location: "New York", Image: "https://theoceanapi.azurewebsites.net/people/mike-evans/image_2x?dateTime=636012716484430000", IsFavorite: true, Notes: [] },
    ];
    this.state = {
      showContacts: true,
      showDetails: false,
      people: people
    }
  }
  onNewNote = (noteId: number, personId: number, text: string) => {
    var people = this.state.people;
    var myNote: Note = { NoteId: noteId, PersonId: personId, Text: text };
    people.map(p=>
      {if(p.Id === personId){
        p.Notes.push(myNote);
      }}
    )
    this.setState({ people });
  }
  public render() {

    var htmlCards = this.state.people.map(p =>
      <div>
        <div className="col l4 m6 hide-on-small-and-down">
          <Card Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
        </div>
        <ul className="collection hide-on-med-and-up">
          <ContactList Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
        </ul>
      </div>
    );

    var htmlProfile = this.state.people.map(p =>
      <div className="col s12">
        <Profile Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} newNote={this.onNewNote} />
      </div>
    )

    let transition = ""
    let content;
    if (this.state.showContacts) {
      content = htmlCards
      // transition = "scale-transition"
    }
    else if (this.state.showDetails) {
      content = htmlProfile
      // transition = "scale-transition scale-out"
    }

    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}

        <div className="row left contactCard">
          <div>
            <button className="btn " onClick={this.onAClick}>Show Contacts</button>
            <br></br>
            <br></br>
            <button className="btn" onClick={this.onBClick}>Show Profile</button>
          </div>
          <div className={transition}>
            {content}
          </div>
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
