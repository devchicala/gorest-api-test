
// api.test.js
const axios = require("axios");
const { fetchUsers, addUser, updateUser, deleteUser } = require("./index");

jest.mock("axios");

describe("Users Cases", () => {

  // Clear cash after tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  // 
  it("should fetch users", async () => {
    const users = [{ id: 1, name: "John" }];
    axios.get.mockResolvedValue({ data: { data: users } });

    const result = await fetchUsers();
    expect(result).toEqual(users);
  });

  
});