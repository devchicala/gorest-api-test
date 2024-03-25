
// api.test.js
const axios = require("axios");
const { fetchUsers, addUser, updateUser, deleteUser } = require("./index");

jest.mock("axios");

describe("Users", () => {

  // Clear cash after tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  //Testing get users
  it("should fetch users", async () => {
    const users = [{ id: 1, name: "John" }];
    axios.get.mockResolvedValue({ data: { data: users } });

    const result = await fetchUsers();
    expect(result).toEqual(users);
  });

  //Testing add user case
  it("should add a user", async () => {
    const user = {
      name: "Jane",
      gender: "male",
      email: "akinsiku18@gmail.com",
      status: "active",
    };
    axios.post.mockResolvedValue({ data: { data: user } });

    const result = await addUser(user);
    expect(result).toEqual(user);
  });

  //Testing update user case
  it("should update a user", async () => {
    const id = 1;
    const user = { name: "Jane" };
    axios.put.mockResolvedValue({ data: { data: user } });

    const result = await updateUser(id, user);
    expect(result).toEqual(user);
  });

  //Testing delete user case
  it("should delete a user", async () => {
    const id = 1;
    axios.delete.mockResolvedValue({ data: {} }); // No need to mock data for delete

    const result = await deleteUser(id);
    expect(result).toEqual({});
  });

  
});