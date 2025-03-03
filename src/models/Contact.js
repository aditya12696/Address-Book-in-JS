const { isValidName, isValidAddress, isValidCityOrState, isValidZip, isValidPhoneNumber, isValidEmail } = require("../utils/validation");

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!isValidName(firstName)) throw new Error("Invalid First Name: Must start with a capital letter and have at least 3 characters.");
        if (!isValidName(lastName)) throw new Error("Invalid Last Name: Must start with a capital letter and have at least 3 characters.");
        if (!isValidAddress(address)) throw new Error("Invalid Address: Must have at least 4 characters.");
        if (!isValidCityOrState(city)) throw new Error("Invalid City: Must have at least 4 characters.");
        if (!isValidCityOrState(state)) throw new Error("Invalid State: Must have at least 4 characters.");
        if (!isValidZip(zip)) throw new Error("Invalid Zip: Must be 5 or 6 digits.");
        if (!isValidPhoneNumber(phoneNumber)) throw new Error("Invalid Phone Number: Must be 10 digits and start with 6-9.");
        if (!isValidEmail(email)) throw new Error("Invalid Email: Must be a valid email format.");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber}, ${this.email}`;
    }
}

// Use `module.exports = Contact;` to correctly export the class
module.exports = Contact;
