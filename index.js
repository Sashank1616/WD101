document.addEventListener("DOMContentLoaded", function () {
  const detailsForm = document.getElementById("details");
  const userEntries = JSON.parse(localStorage.getItem("user_details")) || [];

  const displayData = () => {
      const tableBody = document.querySelector("#userData tbody");
      tableBody.innerHTML = userEntries.map((val) => {
          return `
          <tr>
              <td>${val.name}</td>
              <td>${val.email}</td>
              <td>${val.password}</td>
              <td>${val.dob}</td>
              <td>${val.accepted ? "Yes" : "No"}</td>
          </tr>`;
      }).join("");
  };

  const saveData = () => {
      localStorage.setItem("user_details", JSON.stringify(userEntries));
      displayData();
  };

  const addEntry = (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const dob = document.getElementById("dob").value;
      const accepted = document.getElementById("accept").checked;

      const entryData = {
          name,
          email,
          password,
          dob,
          accepted
      };

      userEntries.push(entryData);
      saveData();
      detailsForm.reset();
  };

  detailsForm.addEventListener('submit', addEntry);
  displayData();
});
