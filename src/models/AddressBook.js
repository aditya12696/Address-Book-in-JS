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

    editContact(name, updatedContact) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === name.toLowerCase() || 
            contact.lastName.toLowerCase() === name.toLowerCase()
        );
        
        if (index !== -1) {
            this.contacts[index] = updatedContact;
            return true;
        }
        return false;
    }

    displayContacts() {
        console.log(`\nAddress Book: ${this.name}`);
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
