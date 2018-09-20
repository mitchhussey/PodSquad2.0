class Person {
    Name: string;
    Location: string;
    Image: string;
    IsFavorite: boolean;

    constructor(Name: string, Location: string, Image: string, IsFavorite: boolean) {
        this.Name = Name;
        this.Location = Location;
        this.Image = Image;
        this.IsFavorite = IsFavorite;
    }
    getName() {
        return this.Name;
    }
    getLocation() {
        return this.Location;
    }
    getImage() {
        return this.Image;
    }
    getIsFavorite(){
        return this.IsFavorite;
    }
    
}

export default Person;