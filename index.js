// api.js
const axios = require("axios");

const fetchUsers = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/users");
    console.log(response.data);
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};
const addUser = async (data) => {
  try {
    const response = await axios.post(
      "https://gorest.co.in/public/v2/users",
      data
    );
    console.log({ response: response.data, context: "addUser" });
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await axios.put(
      `https://gorest.co.in/public/v2/users/${id}`,
      data
    );
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `https://gorest.co.in/public/v2/users/${id}`
    );
    return response.data; // No need to extract 'data' property as it doesn't return deleted data
  } catch (error) {
    throw error;
  }
};

const fetchPosts = async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts");
    console.log(response.data);
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};
const addPost = async (data) => {
  try {
    const response = await axios.post(
      "https://gorest.co.in/public/v2/posts",
      data
    );
    console.log({ response: response.data, context: "addPost" });
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};

const updatePost = async (id, data) => {
  try {
    const response = await axios.put(
      `https://gorest.co.in/public/v2/posts/${id}`,
      data
    );
    return response.data.data; // Extracting the 'data' property from the response
  } catch (error) {
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const response = await axios.delete(
      `https://gorest.co.in/public/v2/posts/${id}`
    );
    return response.data; // No need to extract 'data' property as it doesn't return deleted data
  } catch (error) {
    throw error;
  }
};


module.exports = { fetchUsers, addUser, updateUser, deleteUser, fetchPosts, addPost, updatePost, deletePost };