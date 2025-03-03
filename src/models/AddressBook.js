class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        const isDuplicate = this.contacts.some(existingContact =>
            existingContact.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            existingContact.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (isDuplicate) {
            console.log(`\nDuplicate Contact: ${contact.firstName} ${contact.lastName} already exists.`);
            return false;
        }

        this.contacts.push(contact);
        return true;
    }

    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    sortByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }

    displayContacts() {
        console.log(`\nAddress Book: ${this.name}`);
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        } else {
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

module.exports = AddressBook;
