class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    showContacts = () => {
        const contacts = this.model.getContacts();
        if (contacts.length) {
            contacts.map((contact, id) => {
                const contactComponent = this.view.createContactComponent({ id, ...contact });
                this.view.contactsTable.append(contactComponent);
            });
        } else {
            this.view.contactsTable.append(this.view.createEmptyTableMessage());
        }
    };

    setEditAndRemoveBtnsOnClick = () => {
        const editBtns = document.querySelectorAll('.edit');
        editBtns.forEach((btn, id) => {
            btn.onclick = () => {
                const name = this.view.getEditInputValue('name', id);
                const number = this.view.getEditInputValue('phone', id);
                const cityandCountry = this.view.getEditInputValue('city_country', id);
                this.model.editContact(id, {
                    name,
                    number,
                    cityandCountry
                });
                location.reload();
            };
        });

        const removeBtns = document.querySelectorAll('.remove');
        removeBtns.forEach((btn, id) => {
            btn.onclick = () => {
                this.model.removeContact(id);
                location.reload();
            };
        });
    };

    setOnSubmitCreateContactForm = () => {
        this.view.createContactForm.addEventListener('submit', () => {
            const name = this.view.getNewContactInputValue('name');
            const number = this.view.getNewContactInputValue('phone');
            const cityandCountry = this.view.getNewContactInputValue('city_country');

            this.model.addContact({ name, number, cityandCountry });
        });
    };
}
const App = new Controller();
