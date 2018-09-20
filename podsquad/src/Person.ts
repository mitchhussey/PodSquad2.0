import Note from './Note'

class Person {
    Id: number;
    Name: string;
    Location: string;
    Image: string;
    IsFavorite: boolean;
    Notes: Array<Note>;
}

export default Person;