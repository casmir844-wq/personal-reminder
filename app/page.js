'use client';

import { useState } from "react";

export default function Home() {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");

  function addReminder() {
    if (!title) return;

    setReminders([
      ...reminders,
      { title, done: false }
    ]);

    setTitle("");
  }

  function toggleDone(index) {
    const copy = [...reminders];
    copy[index].done = !copy[index].done;
    setReminders(copy);
  }

  function remove(index) {
    setReminders(reminders.filter((_, i) => i !== index));
  }

  return (
    <main style={{ padding: 20 }}>

      <h1>📬 We-Mail</h1>

      {/* INPUT */}
      <div className="glass" style={{ padding: 15, marginBottom: 20 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New productivity mail..."
        />

        <button onClick={addReminder}>
          Send Mail
        </button>
      </div>

      {/* LIST */}
      {reminders.map((r, i) => (
        <div key={i} className="glass" style={{ padding: 15, marginBottom: 10 }}>

          <h3 style={{ textDecoration: r.done ? "line-through" : "none" }}>
            {r.title}
          </h3>

          <button onClick={() => toggleDone(i)}>
            ✔ Done
          </button>

          <button onClick={() => remove(i)}>
            ❌ Delete
          </button>

        </div>
      ))}

    </main>
  );
}
