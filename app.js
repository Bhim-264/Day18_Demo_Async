async function getUser() {
  const userDiv = document.getElementById("userInfo");
  userDiv.innerHTML = "Loading user data...";

  try {
    const user = await fetchUserData();
    userDiv.innerHTML = `
      <strong>Name:</strong> ${user.name}<br>
      <strong>Age:</strong> ${user.age}<br>
      <strong>Mobile:</strong> ${user.mobile}<br>
      <strong>DOB:</strong> ${user.dob}<br>
      <strong>Email:</strong> ${user.email}
    `;
  } catch (error) {
    userDiv.innerHTML = "Failed to fetch user data.";
  }
}