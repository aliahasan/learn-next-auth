const users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "john123",
  },
  {
    name: "Jane Smith",
    email: "jane@gmail.com",
    password: "jane123",
  },
  {
    name: "Michael Johnson",
    email: "mike@gamil.com",
    password: "mike123",
  },
];

export const getUserByEmail = (email) => {
  const user = users.find((user) => user.email === email);
  return user;
};
