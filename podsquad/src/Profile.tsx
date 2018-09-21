import * as React from 'react';
import './materialize.css';
import './Profile.css';
import './materialize.js';
import Person from './Person';


interface IProfileProps extends Person{
    newNote(noteId: number, personId: number, text: string):void
}
class Profile extends React.Component<IProfileProps> {
    text = "";
    onchange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        this.text = e.target.value;
    }
     addNewNote = (e: React.MouseEvent<HTMLButtonElement>) =>{
        this.props.newNote(this.props.Notes.length, this.props.Id, this.text);

    }
    public render() {
        var NewNoteText = <textarea id="newNoteText" placeholder="Notes" onChange={this.onchange} className="materialize-textarea"></textarea>
        var newNoteButton = <button className="btn waves-effect waves-light right blue" type="submit" name="action" onClick={this.addNewNote}><i className="material-icons">note_add</i></button>



        var htmlNotes = this.props.Notes.map(n =>
            <div key={n.NoteId} id="note" className="row card yellow lighten-4 input-field">
                {/* <div className="col s8  m9 xl10 input-field"> */}
                <div className="col s11 input-field">
                    <textarea disabled id="disabledInput" className="validate materialize-textarea">{n.Text}</textarea>
                </div>
            </div>

        )


        return (

            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <img className="responsive-img z-depth-4 materialboxed" src={this.props.Image}></img>
                    </div>
                    <div className="col s12 m6">
                        <h3>
                            {this.props.Name}
                        </h3>
                        <blockquote>
                            {this.props.Location}
                            <br />
                            C1
              <br />
                            BYU
            </blockquote>
                    </div>
                </div>
                <div className="row">

                    <div className="input-field col s9 m10 l11">
                        {NewNoteText}
                    </div>
                    <div className="input-field col s3 m2 l1 right">
                        {newNoteButton}
                    </div>
                </div>
                <div className="notes">
                    {htmlNotes}
                </div>
            </div>



        );
    }
}

export default Profile;
