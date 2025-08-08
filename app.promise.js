function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Bhim Debnath",
        age: 24,
        mobile: "9876543210",
        dob: "2003-08-18",
        email: "bhim@example.com"
      });
    }, 1000); // simulate API delay
  });
}