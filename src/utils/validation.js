function isValidName(name) {
    return /^[A-Z][a-zA-Z]{2,}$/.test(name);
}

function isValidAddress(address) {
    return /^[a-zA-Z0-9\s]{4,}$/.test(address);
}

function isValidCityOrState(value) {
    return /^[a-zA-Z\s]{4,}$/.test(value);
}

function isValidZip(zip) {
    return /^\d{5,6}$/.test(zip);
}

function isValidPhoneNumber(phone) {
    return /^[6-9]\d{9}$/.test(phone);
}

function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

module.exports = { isValidName, isValidAddress, isValidCityOrState, isValidZip, isValidPhoneNumber, isValidEmail };
