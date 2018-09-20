import * as React from 'react';
import './Modal.css';
import './materialize.css';
import './materialize.js';

class Modal extends React.Component {
  public render() {
    return (
      
        <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <img className="responsive-img z-depth-4 materialboxed" src="http://3.bp.blogspot.com/-o83LIHahkTI/ThG8K1JYrcI/AAAAAAAAADI/T8a2XZ5n_J0/s1600/Kanye-west-1.1.jpg"></img>
          </div>
          <div className="col s12 m6">
            <h3>
              Kanye West
            </h3>
            <blockquote>
              Chicago, Illinois
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
      
        <div id="note" className="row card yellow lighten-4 input-field">
          <div className="col s8  m9 xl10 input-field">
              <textarea disabled id="disabledInput" className="validate materialize-textarea">Kanye is very talented Kanye is very talented Kanye is very talented Kanye is very talented Kanye is very talented Kanye is very talented</textarea>
          </div>
          <div className="col s4 m3  xl2">
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
          </div>
        </div>
        </div>



    );
  }
}

export default Modal;
