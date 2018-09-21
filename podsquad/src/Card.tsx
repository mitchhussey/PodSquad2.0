import * as React from 'react';
import './materialize.css';
import './materialize.js';
import './mitch.css';
import Person from './Person';

interface ICardProps extends Person{
    sendProfile(Id: number):void
}

class Card extends React.Component<ICardProps> {
    public favorite = () => {
        let x = document.getElementById("notFavorite");
        let y = document.getElementById("favorite");

        console.log(x);
        console.log(y);

        console.log("Favorite triggered");
    }

    sendPerson = (e: React.MouseEvent<HTMLButtonElement>) =>{
        this.props.sendProfile(this.props.Id);
    }



    public render() {
        var detailsButton = <button className="btn blue darken-4" onClick={this.sendPerson}>Show Details</button>


        var htmlNotes = this.props.Notes.map(n =>
            <div className="card yellow lighten-4">
                        <p>{n.Text}</p>
                    </div>
            // <div key={n.NoteId} id="note" className="row card yellow lighten-4 input-field">
            //     {/* <div className="col s8  m9 xl10 input-field"> */}
            //     <div className="col s11 input-field">
            //         <textarea disabled id="disabledInput" className="validate materialize-textarea">{n.Text}</textarea>
            //     </div>
            // </div>

        )
        return (


            <div className="card hoverable sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <button onClick={this.favorite} className="waves-effect waves-light btn-floating favBtn" id="notFavorite"><i
                        className="material-icons">star_border</i></button>

                    <img className="activator" src={this.props.Image}></img>
                </div>
                <div className="card-content center">
                    <span className="card-title truncate activator grey-text text-darken-4">{this.props.Name}</span>
                    {detailsButton}
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.Name}<i className="material-icons right">close</i></span>

                    <p>{this.props.Location}</p>
                    <hr></hr>
                    {/* <a href="#" className="waves-effect waves-light btn light blue darken 3">Add Note</a> */}
                    {htmlNotes}
                </div>
            </div>
        );
    }
}

export default Card;
