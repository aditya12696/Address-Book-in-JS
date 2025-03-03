const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const personalBook = new AddressBook("Personal Contacts");

// Add contacts
try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    personalBook.addContact(contact1);

    // Trying to add a duplicate contact
    const duplicateContact = new Contact("John", "Doe", "9999 Another St", "Boston", "Massachusetts", "02108", "8765432109", "john.duplicate@example.com");
    personalBook.addContact(duplicateContact);
    
    const contact2 = new Contact("Alice", "Smith", "5678 Avenue", "Los Angeles", "California", "90001", "9988776655", "alice@example.com");
    personalBook.addContact(contact2);
} catch (error) {
    console.error("Error:", error.message);
}

// Display contacts
personalBook.displayContacts();

// Get contact count
console.log(`\nTotal Contacts: ${personalBook.getContactCount()}`);
