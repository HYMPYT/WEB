class Model {
    constructor() {
        this.contacts = JSON.parse(localStorage.getItem('contacts')).sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    getContact = id => {
        return this.contacts[id];
    };

    getContacts = () => {
        return this.contacts;
    };

    addContact = contact => {
        this.contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    };

    editContact = (id, editedContact) => {
        console.log(id, editedContact);
        this.contacts[id] = editedContact;
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    };

    removeContact = id => {
        this.contacts = this.contacts.filter((_, idx) => idx !== id);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    };
}
