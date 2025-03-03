class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    findContactByName(name) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === name.toLowerCase() || 
            contact.lastName.toLowerCase() === name.toLowerCase()
        ) || null;
    }

    deleteContactByName(name) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === name.toLowerCase() || 
            contact.lastName.toLowerCase() === name.toLowerCase()
        );

        if (index !== -1) {
            this.contacts.splice(index, 1);
            return true;
        }
        return false;
    }

    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
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
