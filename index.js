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


module.exports = { fetchUsers };