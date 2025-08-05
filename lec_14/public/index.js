let userContainer = document.querySelector(".user-container");

function getUser(URL) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      userContainer.innerHTML = ""; // Clear list
      data.forEach((user) => {
        displayUser(user);
      });
    })
    .catch((err) => {
      console.log("Fetch error:", err);
    });
}

function displayUser(user) {
  let li = document.createElement("li");
  li.innerHTML = `
    <div class="user-info">
      <h1>${user.id}</h1>
      <p>${user.name}</p>
    </div>
    <div class="user-btn">
      <button class="delete">del</button>
      <button class="edit">edit</button>
    </div>
  `;
  userContainer.appendChild(li);
}

getUser("http://localhost:3900/users");
