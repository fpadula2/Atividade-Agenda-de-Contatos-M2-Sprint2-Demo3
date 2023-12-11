const contactsList = [
    { name: "joão", contact: "joao@mail.com", type: "email" },
    { name: "pedro", contact: "999999999", type: "phone" },
    { name: "joana", contact: "888888888", type: "phone" },
    { name: "raissa", contact: "raissa@mail.com", type: "email" },
    { name: "maicon", contact: "maicon@mail.com", type: "email" },
    { name: "sandra", contact: "777777777", type: "phone" },
    { name: "lívia", contact: "livia@mail.com", type: "email" },
    { name: "caio", contact: "666666666", type: "phone" },
    { name: "larissa", contact: "555555555", type: "phone" },
    { name: "sávio", contact: "savio@mail.com", type: "email" },
];

function createCard(object) {
    const liCard = document.createElement("li");
    const divContainer = document.createElement("div");
    const spanType = document.createElement("span");
    const pName = document.createElement("p");
    const pContact = document.createElement("p");
    const btnRemove = document.createElement("button");

    pName.innerText = object.name;
    pContact.innerText = object.contact;
    btnRemove.innerText = "X";

    divContainer.classList.add("card__container");
    btnRemove.classList.add("card__remove-button");
    liCard.classList.add("card");

    if (object.type === "email") {
        spanType.classList.add("email");
    } else {
        spanType.classList.add("phone");
    }

    btnRemove.addEventListener("click", function () {
        const index = contactsList.indexOf(object);

        contactsList.splice(index, 1);

        renderContacts(contactsList);
    });

    divContainer.append(spanType, pName, pContact);
    liCard.append(divContainer, btnRemove);

    return liCard;
}

function renderContacts(array) {
    const list = document.querySelector("ul");

    list.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const currentContact = array[i];

        const card = createCard(currentContact);

        list.appendChild(card);
    }
}

function createNewContact() {
    const form = document.querySelector(".create__form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputName = document.querySelector("#input-name");
        const inputContact = document.querySelector("#input-contact");
        const selectType = document.querySelector("#select-type");

        const newContact = {
            name: inputName.value.toLowerCase(),
            contact: inputContact.value.toLowerCase(),
            type: selectType.value,
        };

        contactsList.push(newContact);
        renderContacts(contactsList);
    });
}

function searchContact() {
    const form = document.querySelector(".search__form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const searchInput = document.querySelector(".search__input");

        const searchArray = [];

        for (let i = 0; i < contactsList.length; i++) {
            const currentContact = contactsList[i];

            // if (currentContact.name === searchInput.value.toLowerCase()) {
            //   searchArray.push(currentContact);
            // }

            if (currentContact.name.includes(searchInput.value.toLowerCase())) {
                searchArray.push(currentContact);
            }
        }

        renderContacts(searchArray);
    });
}

function searchByTyping() {
    const searchInput = document.querySelector(".search__input");

    searchInput.addEventListener("keyup", function () {
        const searchArray = [];

        for (let i = 0; i < contactsList.length; i++) {
            const currentContact = contactsList[i];

            // if (currentContact.name === searchInput.value.toLowerCase()) {
            //   searchArray.push(currentContact);
            // }

            if (currentContact.name.includes(searchInput.value.toLowerCase())) {
                searchArray.push(currentContact);
            }
        }

        renderContacts(searchArray);
    });
}

renderContacts(contactsList);
createNewContact();
searchContact();
searchByTyping();