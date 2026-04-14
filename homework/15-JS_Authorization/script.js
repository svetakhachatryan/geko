const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];

function login (username, password){

  let foundUser = users.find(user => user.username === username);

  if (!foundUser){
    return "Օգտատերը չի գտնվել"
  }

  if (foundUser.isBlocked){
    return "Օգտատերը արգելափակված է"
  }

  if (foundUser.password !== password){
    return "Սխալ գաղտնաբառ"
  }

  return "Բարի գալուստ," + foundUser.username
}

console.log(login("john", "qwerty"));
console.log(login("anna", "wrong"));
console.log(login("admin", "1234"));



