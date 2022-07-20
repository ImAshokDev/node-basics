var createNote = (title, body) => {
  console.log("Create Note ....", title, body);
};

var getAllNotes = () => {
  console.log("Listing Alll Notes...");
};

var readNote = (title) => {
  console.log("Reading  Notes...", title);
};
var removeNote = (title) => {
  console.log("Removing  Notes...", title);
};

module.exports = {
  createNote,
  getAllNotes,
  readNote,
  removeNote,
};
