import * as React from 'react';
import './App.css';
import Card from './Card';
// import ContactList from './ContactList';
import Note from './Note';
import './mitch.css';
// import Person from './Person';
import Profile from './Profile';
import Person from './Person';
interface IAppState {
  showContacts: boolean;
  showDetails: boolean;
  people: Array<Person>;
  activeProfileID: number | undefined;
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
      people: people,
      activeProfileID: undefined,
    }
  }

  sendProfile = (id: number) => {
    var people = this.state.people;
    people.map(p => {
      if (p.Id === id) {
        <Profile Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} newNote={this.onNewNote} />
       
        this.setState({ showDetails: true });
        this.setState({ showContacts: false });
        this.setState({activeProfileID: p.Id})
      }
    }
    )
  }

  onNewNote = (noteId: number, personId: number, text: string) => {
    var people = this.state.people;
    var myNote: Note = { NoteId: noteId, PersonId: personId, Text: text };
    people.map(p => {
      if (p.Id === personId) {
        p.Notes.push(myNote);
      }
    }
    )
    this.setState({ people });
  }
  public render() {

    var htmlCards = this.state.people.map(p =>
      <div className="container">
        <div className="col l3 m6 s12">
          <Card Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} sendProfile={this.sendProfile} />
        </div>
        {/* <ul className="collection hide-on-med-and-up">
          <ContactList Id={p.Id} Name={p.Name} Location={p.Location} Image={p.Image} IsFavorite={p.IsFavorite} Notes={p.Notes} />
        </ul> */}
      </div>
    );
      if (this.state.activeProfileID != undefined){
        var singlePerson = this.state.people.filter(p => p.Id === this.state.activeProfileID)[0]
      console.log(singlePerson.Name)
      htmlProfile = <div>
        <Profile Id={singlePerson.Id} Name={singlePerson.Name} Location={singlePerson.Location} Image={singlePerson.Image} IsFavorite={singlePerson.IsFavorite} Notes={singlePerson.Notes} newNote={this.onNewNote} />
        </div>
      }

      var htmlProfile
      
        
      
    console.log(this.state.activeProfileID)

    let transition = ""
    let transition2 = ""
    // let content;
    if (this.state.showContacts) {
      // content = htmlCards
      transition = "scale-transition"
      transition2 = "scale-transition scale-out"
     
    }
    else if (this.state.showDetails) {
      // content = htmlProfile
      console.log()
      transition = "scale-transition scale-out"
      transition2 = "scale-transition "
      
    }

    // if (this.state.showDetails) {
    //   transition = "scale-transition"
    // }

    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}
        <nav>
          <div className="nav-wrapper valign-wrapper blue darken-4">
            <a href="#" className="brand-logo "><img height="30px" src="https://cdn0.iconfinder.com/data/icons/animal-icons-flat/128/dolphin-512.png" alt="p.Name" ></img>     PodSquad</a>
            
          </div>
        </nav>
        <div className="row ">
          <div>
            
            <br></br>
            <div className= "centeredButton">
            
            </div>
            <br></br>
          </div>
          <div className={transition}>
            {htmlCards}
          </div>
          <div className={transition2}>
          <button className="btn blue" onClick={this.onAClick}>Home</button>
          <hr></hr>
            {htmlProfile}
          </div>
          {/* <div className={transition2}>
            {content}
          </div> */}
        </div>
      </div>
    );
  }
  private onAClick = () => {
    this.setState({ showContacts: true });
    this.setState({ showDetails: false });
    
  }
  // private onBClick = () => {
  //   this.setState({ showDetails: true });
  //   this.setState({ showContacts: false });
  // }
}

export default App;
