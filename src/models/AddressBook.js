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

    searchByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    viewPersonsByCity() {
        return this.contacts.reduce((cityMap, contact) => {
            if (!cityMap[contact.city]) {
                cityMap[contact.city] = [];
            }
            cityMap[contact.city].push(`${contact.firstName} ${contact.lastName}`);
            return cityMap;
        }, {});
    }

    viewPersonsByState() {
        return this.contacts.reduce((stateMap, contact) => {
            if (!stateMap[contact.state]) {
                stateMap[contact.state] = [];
            }
            stateMap[contact.state].push(`${contact.firstName} ${contact.lastName}`);
            return stateMap;
        }, {});
    }

    countByCity() {
        return this.contacts.reduce((cityCount, contact) => {
            cityCount[contact.city] = (cityCount[contact.city] || 0) + 1;
            return cityCount;
        }, {});
    }

    countByState() {
        return this.contacts.reduce((stateCount, contact) => {
            stateCount[contact.state] = (stateCount[contact.state] || 0) + 1;
            return stateCount;
        }, {});
    }

    sortByName() {
        this.contacts.sort((a, b) => {
            const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });
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
