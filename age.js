let currentYear = 2022;
let year = parseInt(prompt("Enter your date of birth"));
let dateOfBirth = document.getElementById("dob");
let presentAge = document.getElementById("age");

if (year >= currentYear) {
  prompt("Enter your date of birth");
} else {
  dateOfBirth.textContent = year;
}

presentAge.textContent = currentYear - year;
