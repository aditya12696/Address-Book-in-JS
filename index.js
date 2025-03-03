const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const personalBook = new AddressBook("Personal Contacts");

// Add a contact
try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    personalBook.addContact(contact1);
} catch (error) {
    console.error("Error:", error.message);
}

// Find and update a contact
const nameToSearch = "John";
const existingContact = personalBook.findContactByName(nameToSearch);

if (existingContact) {
    try {
        const updatedContact = new Contact("John", "Doe", "5678 New Street", "Boston", "Massachusetts", "02108", "9876543210", "john.doe@updated.com");
        if (personalBook.editContact(nameToSearch, updatedContact)) {
            console.log(`\n${nameToSearch} has been updated successfully.`);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
} else {
    console.log(`\nContact with name '${nameToSearch}' not found.`);
}

// Display updated contacts
personalBook.displayContacts();
