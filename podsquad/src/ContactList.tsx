import * as React from 'react';
import './materialize.css';
import './materialize.js';
import './mitch.css';
import Person from './Person';

class ContactList extends React.Component<Person> {
    public favorite = () => {
        let x = document.getElementById("notFavorite");
        let y = document.getElementById("favorite");

        console.log(x);
        console.log(y);

        console.log("Favorite triggered");
    }

    public render() {
        return (
            <li className="collection-item avatar">
                <img src={this.props.Image} alt="p.Name" className="circle"></img>
                <span className="title left">{this.props.Name}</span>
                <p></p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        );
    }
}

export default ContactList;
