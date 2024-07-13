const apiUrl = 'https://reqres.in/api/users';

document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error('Error fetching users:', error);
        alert('Failed to fetch users. Please try again later.');
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <img class="user-avatar" src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
        `;
        usersList.appendChild(userCard);
    });
}
