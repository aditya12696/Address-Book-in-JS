const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const personalBook = new AddressBook("Personal Contacts");

// Add contacts
try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    const contact2 = new Contact("Alice", "Smith", "5678 Avenue", "Los Angeles", "California", "90001", "9988776655", "alice@example.com");
    const contact3 = new Contact("Bob", "Brown", "9101 Road", "New York", "New York", "10002", "9123456789", "bob@example.com");
    const contact4 = new Contact("Charlie", "Johnson", "1213 Lane", "Los Angeles", "California", "90002", "9111223344", "charlie@example.com");
    const contact5 = new Contact("David", "Williams", "1415 Blvd", "New York", "New York", "10003", "9222334455", "david@example.com");

    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
    personalBook.addContact(contact3);
    personalBook.addContact(contact4);
    personalBook.addContact(contact5);
} catch (error) {
    console.error("Error:", error.message);
}

// Display unsorted contacts
console.log("\nUnsorted Contacts:");
personalBook.displayContacts();

// Sort contacts by name
personalBook.sortByName();

// Display sorted contacts
console.log("\nSorted Contacts:");
personalBook.displayContacts();
