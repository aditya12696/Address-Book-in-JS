class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    deleteContact(email) {
        this.contacts = this.contacts.filter(contact => contact.email !== email);
    }

    updateContact(email, newContact) {
        const index = this.contacts.findIndex(contact => contact.email === email);
        if (index !== -1) {
            this.contacts[index] = newContact;
        }
    }

    searchContact(email) {
        return this.contacts.find(contact => contact.email === email) || null;
    }

    displayContacts() {
        console.log(`\nAddress Book: ${this.name}`);
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
