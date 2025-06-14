let btn = document.getElementById('btn');

btn.addEventListener('click', async () => {

    let username = document.getElementById('username').value;
    
    if(username === ''){
        alert('Enter a username');
        return;
    }

    let URL = `https://api.github.com/users/${username}`;
    let response = await fetch(URL);

    if (!response.ok) {
        alert('User not found. Please enter a valid GitHub username.');
        return;
    }


    let data = await response.json();

    // Remove existing content box
    let existing = document.querySelector('.content');
    if (existing) {
        existing.remove();
    }

    let contentbox = document.createElement('div');
    contentbox.classList.add('content');
    contentbox.innerHTML = '';

    document.body.appendChild(contentbox);

    let avatar = document.createElement('img');
    avatar.src = data.avatar_url;
    avatar.alt = "User Avatar";
    avatar.style.width = "100px"; // You can adjust size
    avatar.style.borderRadius = "50%"; // Optional: makes it circular
    avatar.style.border = "2px solid rgb(118, 115, 115)";

    let para = document.createElement('p');
    para.innerHTML = `Name: ${data.name}`;   

    let header_div = document.createElement('div');
    header_div.style.display = 'flex';
    header_div.style.alignItems = 'center';
    header_div.style.gap = '20px';

    header_div.appendChild(avatar);
    header_div.appendChild(para);
    contentbox.appendChild(header_div);

    let bio = document.createElement('p');
    bio.innerHTML = `Bio: ${data.bio}`;
    contentbox.appendChild(bio);

    
    let public_rep = document.createElement('p');
    public_rep.innerHTML = `Public Repos: ${data.public_repos}`;
    contentbox.appendChild(public_rep);

});

