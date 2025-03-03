const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const personalBook = new AddressBook("Personal Contacts");

// Add contacts
try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    const contact2 = new Contact("Alice", "Smith", "5678 Avenue", "Los Angeles", "California", "90001", "9988776655", "alice@example.com");
    const contact3 = new Contact("Bob", "Brown", "9101 Road", "New York", "New York", "10002", "9123456789", "bob@example.com");
    
    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
    personalBook.addContact(contact3);
} catch (error) {
    console.error("Error:", error.message);
}

// Search by city
const cityToSearch = "New York";
const contactsInCity = personalBook.searchByCity(cityToSearch);
console.log(`\nContacts in ${cityToSearch}:`);
contactsInCity.forEach(contact => console.log(contact.toString()));

// Search by state
const stateToSearch = "California";
const contactsInState = personalBook.searchByState(stateToSearch);
console.log(`\nContacts in ${stateToSearch}:`);
contactsInState.forEach(contact => console.log(contact.toString()));
