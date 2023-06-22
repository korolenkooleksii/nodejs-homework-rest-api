const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} = require("./contacts");

const { register, login, getCurrent, logout } = require("./auth");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
};
