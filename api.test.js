
// api.test.js
const axios = require("axios");
const { fetchUsers, addUser, updateUser, deleteUser, fetchPosts, addPost, updatePost, deletePost } = require("./index");

jest.mock("axios");

describe("User case", () => {

  // Clear cash after tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  //Testing get users
  it("should fetch posts", async () => {
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

describe("Post case", () => {

  // Clear cash after tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  //Testing get posts
  it("should fetch posts", async () => {
    const users = [{ id: 1, name: "John" }];
    axios.get.mockResolvedValue({ data: { data: users } });

    const result = await fetchPosts();
    expect(result).toEqual(users);
  });

  //Testing add post case
  it("should add a post", async () => {
    const post ={
        user_id: 6804036,
        title: 'Campana tandem eveniet voluptatem accusamus deduco.',
        body: 'Vos tersus trans. Contra antepono crur. Delinquo sum velit. Magni attero claudeo. Sint una animadverto. Sub dolorem tres. Delinquo cerno varius. Vespillo cogito validus. Velit iusto omnis. Suffoco amor suppellex. Umerus voluptate benigne. Qui thorax adinventitias. Complectus bellicus usitas. Provident tametsi curtus. Maiores auris demergo. Possimus tutamen totam.'
      }
    axios.post.mockResolvedValue({ data: { data: post } });

    const result = await addPost(post);
    expect(result).toEqual(post);
  });

  //Testing update post case
  it("should update a post", async () => {
    const id = 1;
    const user = { 
      user_id: 6804036,
      title: 'Campana tandem eveniet voluptatem accusamus deduco.'
    };
    axios.put.mockResolvedValue({ data: { data: user } });

    const result = await updatePost(id, user);
    expect(result).toEqual(user);
  });

  //Testing delete post case
  it("should delete a post", async () => {
    const id = 1;
    axios.delete.mockResolvedValue({ data: {} }); // No need to mock data for delete

    const result = await deletePost(id);
    expect(result).toEqual({});
  });
});