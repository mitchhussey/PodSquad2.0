class Person {
    Name: string;
    Location: string;
    Image: string;

    constructor(Name: string, Location: string, Image:string) {
        this.Name = Name;
        this.Location = Location;
        this.Image = Image;
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
    
}