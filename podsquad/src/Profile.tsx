import * as React from 'react';
import './materialize.css';
import './Profile.css';
import './materialize.js';
import Person from './Person';


class Modal extends React.Component<Person> {
  
    public render() {

        var htmlNotes = this.props.Notes.map(n => 
            <div id="note" className="row card yellow lighten-4 input-field">
            {/* <div className="col s8  m9 xl10 input-field"> */}
            <div className="col s11 input-field">
                <textarea disabled id="disabledInput" className="validate materialize-textarea">{n.Text}</textarea>
            </div>


            {/* <div className="col s4 m3  xl2">
              <button className="left btn-floating btn-small waves-effect waves-light blue" type="submit" id="update"
                name="action">
                <i className="material-icons right">save</i>
              </button>
              <button className="left btn-floating btn-small waves-effect waves-light red" type="submit" id="cancelEdit"
                name="action">
                <i className="material-icons right">cancel</i>
              </button>
            </div>
            <div className="fixed-action-btn horizontal col s2 m1" id="menu">
              
              <a className="btn-floating btn-medium teal lighten-1">
                <i className="material-icons">more_horiz</i>
              </a>
              <ul>
                <li><a id="delete" className="btn-floating btn-small red" ><i className="material-icons">delete_forever</i></a>
                </li>
                <li><a id="edit" className="btn-floating btn-small yellow darken-1"><i className="material-icons">mode_edit</i></a>
                </li>
              </ul>
            </div> */}
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
              C2
              <br />
              University of Texas
            </blockquote>
          </div>
        </div>
      
        <div className="row">
      
          <div className="input-field col s9 m10 l11">
            <textarea id="textarea1" placeholder="Notes" className="materialize-textarea"></textarea>
          </div>
          <div className="input-field col s3 m2 l1 right">
            <button className="btn waves-effect waves-light right blue" type="submit" name="action">
              <i className="material-icons">note_add</i>
            </button>
          </div>
        </div>
        <div className="notes">
        {htmlNotes}
        </div>
        </div>



    );
  }
}

export default Modal;
