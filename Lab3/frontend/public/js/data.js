const data = [
  {
    name: "Evgen Levchuk",
    tel: "+38099332233",
    place: "Kyiv, Ukraine",
  },
  {
    name: "Ivan Kucher",
    tel: "+38099111111",
    place: "Kyiv, Ukraine",
  },
  {
    name: "Dmitriy Glozda",
    tel: "+38099222222",
    place: "Kyiv, Ukraine",
  },
];

// if (!localStorage.getItem("users")) {
//   localStorage.setItem(
//     "users",
//     JSON.stringify([
//       {
//         username: "test",
//         email: "test@test.com",
//         password: "111",
//         sex: "female",
//         birthday: "2000-11-11",
//         contacts: data,
//       },
//     ])
//   );
// }

localStorage.setItem(
  "currentUser",
  JSON.stringify({
    username: "test",
    email: "test@test.com",
    password: "111",
    sex: "female",
    birthday: "2000-11-11",
    contacts: data,
  })
);
