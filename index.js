const API_URL = "https://api.escuelajs.co/api/v1/users";
const container = document.getElementById("user-cards-container");

fetch(API_URL)
    .then(response => response.json())
    .then(users => {
        const limitedUsers = users.slice(0, 5);
        renderUsers(limitedUsers);
    })
    .catch(error => console.error("Klaida gaunant vartotojus:", error));

function renderUsers(users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${user.avatar}" alt="Vartotojo nuotrauka">
            <h3>${user.name}</h3>
            <p>${user.email || "El. paštas neprieinamas"}</p>
            <button onclick="deleteCard(this)">Ištrinti</button>
        `;
        container.appendChild(card);
    });
}

function deleteCard(button) {
    const card = button.parentElement;
    card.remove();
}

