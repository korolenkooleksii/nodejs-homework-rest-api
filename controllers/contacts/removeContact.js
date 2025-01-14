const { Contact } = require("../../models");
const { wrapper } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  
  await Contact.findByIdAndRemove(contactId);

  res.json({ message: "Contact deleted" });
};

module.exports = wrapper(removeContact);
