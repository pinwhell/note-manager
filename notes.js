const path = require("path");
const fs = require("fs");
const filePath = path.join("data", "notes.json");

function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

function loadNotes() {
  if (fs.existsSync(filePath) === false) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function addNote(note) {
  const notes = loadNotes();
  notes.push(note);
  saveNotes(notes);
}

function listNotes() {
  const notes = loadNotes();
  notes.forEach((n, i) => {
    console.log(`${i + 1}. ${n.title}:\n${n.body}`);
  });
}

module.exports = { addNote, listNotes };
