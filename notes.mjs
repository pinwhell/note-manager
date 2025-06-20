import path from "path";
import fs from "fs";
const filePath = path.join("data", "notes.json");

function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

function loadNotes() {
  if (fs.existsSync(filePath) === false) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function addNote(note) {
  const notes = loadNotes();
  notes.push(note);
  saveNotes(notes);
}

export function listNotes() {
  const notes = loadNotes();
  notes.forEach((n, i) => {
    console.log(`${i + 1}. ${n.title}:\n${n.body}`);
  });
}

export function removeNote(index) {
  const notes = loadNotes();
  if (index >= notes.length) return;
  notes.splice(index, 1);
  saveNotes(notes);
}
