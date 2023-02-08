function setAge() {
  const today = new Date();
  const birthday = new Date("1987-12-22T07:00:00");
  const age = calculateAge(today, birthday);

  document.getElementById("age").textContent = age;
}

function calculateAge(today, birthday) {
  const actualDay = today.getDate();
  const actualMonth = today.getMonth();
  const actualYear = today.getFullYear();
  const birthDay = birthday.getDate();
  const birthMonth = birthday.getMonth();
  const birthYear = birthday.getFullYear();
  let age = actualYear - birthYear;

  if (actualMonth < birthMonth) {
    return age - 1;
  }

  if (actualMonth == birthMonth && actualDay < birthDay) {
    return age - 1;
  }

  return age;
}

console.log(setAge());
