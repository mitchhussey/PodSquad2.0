import * as React from 'react';
import './materialize.css';
import './materialize.js';
import './mitch.css';

class Card extends React.Component {
    public favorite(){    
    }
  public render() {
    return (
        <div className="row left contactCard">
        <div className="col l4 m6 hide-on-small-and-down">
            <div className="card hoverable sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <button onClick={this.favorite} className="waves-effect waves-light btn-floating favBtn" id="notFavorite"><i
                            className="material-icons">star_border</i></button>
                    <button onClick={this.favorite} className="waves-effect waves-light btn-floating favBtn" id="favorite"><i
                            className="material-icons">star</i></button>
                    <img className="activator" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/23275741_10155914503929777_7875720261949730197_o.jpg?_nc_cat=0&oh=44aca1ca4085351b3b0d5580697b8330&oe=5C1D1637"></img>
                </div>
                <div className="card-content center">
                    <span className="card-title truncate activator grey-text text-darken-4">Mitch Hussey</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Mitch Hussey<i className="material-icons right">close</i></span>

                    <p>New York, New York</p>
                    <hr></hr>
                    <a href="#" className="waves-effect waves-light btn light blue darken 3">Add Note</a>
                    <div className="card yellow lighten-4">
                        <p>Has a golf tournament he is playing in soon.</p>
                        <p>Loves playing xbox</p>
                        <p>From Roosevelt Utah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Card;
