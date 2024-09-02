document.getElementById('searchBtn').addEventListener('click', async () => {
    const username = document.getElementById('search').value;
    const main = document.getElementById('main');

    if (username) {
        try {
            // Request roast from the server
            const response = await fetch(`/roast/${username}`);
            const data = await response.json();

            if (response.ok) {
                const { roast } = data;

                // Clear previous content
                main.innerHTML = '';

                // Create and append the profile card
                const card = document.createElement('div');
                card.className = 'card';
                
                const avatar = document.createElement('img');
                avatar.src = `https://github.com/${username}.png`;
                avatar.className = 'avatar';
                
                const userInfo = document.createElement('div');
                userInfo.className = 'user-info';
                
                const userName = document.createElement('h2');
                userName.textContent = username;
                
                const roastMessage = document.createElement('div');
                roastMessage.className = 'roast';
                roastMessage.textContent = roast;

                userInfo.appendChild(userName);
                card.appendChild(avatar);
                card.appendChild(userInfo);
                card.appendChild(roastMessage);

                main.appendChild(card);
            } else {
                throw new Error(data.error || 'User not found');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    } else {
        alert('Please enter a GitHub username');
    }
});
