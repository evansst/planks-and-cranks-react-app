export const baseURL = `http://localhost:3000`
export const listingsURL = `${baseURL}/listings`
export const loginURL = `${baseURL}/login`
export const usersURL = `${baseURL}/users`

export function parseJSON(response) {
  return response.json();
}

export function loggedIn() {
  return (localStorage.user_id)
    ? {
      user_id: localStorage.user_id,
      username: localStorage.username,
      token: localStorage.token,    
    }
    : false;
}

export function login(event) {
  const username = event.target.username.value;
  const password = event.target.password.value;

  fetch(loginURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
    .then(parseJSON)
    .then(response => {
      checkResponse(response)
      document.querySelector('#close-loginModal').click();
    });
}    

export function checkResponse(response) {
  const { user, token, message } = response;
  
  if(message) {
    alert(message);
  } else {
    saveUser(user)(token);

  }
}

const resetForm = (event) => {
  event.target.reset();
  document.querySelector('#close-loginModal').click();
}

const saveUser = (user) => {
  localStorage.setItem('username', user.username);
  localStorage.setItem('user_id', user.id);
  localStorage.setItem('name', user.name);
  
  return (token) => localStorage.setItem('token', token);
}