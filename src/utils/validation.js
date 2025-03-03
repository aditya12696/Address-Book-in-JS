function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidPhoneNumber(phone) {
    return /^\d{10}$/.test(phone);
}

module.exports = { isValidEmail, isValidPhoneNumber };
