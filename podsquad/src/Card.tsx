import * as React from 'react';
import './materialize.css';
import './materialize.js';
import './mitch.css';
import Person from './Person';

class Card extends React.Component<Person> {
    public favorite=()=>{ 
        let x = document.getElementById("notFavorite");
        let y = document.getElementById("favorite"); 
        
        console.log(x);
        console.log(y);

        console.log("Favorite triggered");
    }
    
  public render() {
    return (
       
        
            <div className="card hoverable sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <button onClick={this.favorite} className="waves-effect waves-light btn-floating favBtn" id="notFavorite"><i
                            className="material-icons">star_border</i></button>
                    <button onClick={this.favorite} className="waves-effect waves-light btn-floating favBtn" id="favorite"><i
                            className="material-icons">star</i></button>
                    <img className="activator" src={this.props.Image}></img>
                </div>
                <div className="card-content center">
                    <span className="card-title truncate activator grey-text text-darken-4">{this.props.Name}</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.Name}<i className="material-icons right">close</i></span>

                    <p>{this.props.Location}</p>
                    <hr></hr>
                    <a href="#" className="waves-effect waves-light btn light blue darken 3">Add Note</a>
                    <div className="card yellow lighten-4">
                        <p>Has a golf tournament he is playing in soon.</p>
                        <p>Loves playing xbox</p>
                        <p>From Roosevelt Utah</p>
                    </div>
                    
               
            
        </div>
    </div>
    );
  }
}

export default Card;
