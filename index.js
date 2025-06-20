const { addNote, listNotes } = require("./notes");

const cmd = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

if (cmd === "add") addNote({ title: arg1, body: arg2 });
if (cmd === "list") listNotes();
