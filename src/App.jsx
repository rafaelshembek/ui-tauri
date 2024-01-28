import { useState } from "react";

import { ClipboardIcon } from "@heroicons/react/24/outline";
import "./App.css";
import DataGridDemo from "./DataGrid";

function App() {

  const [items, setItems] = useState([])


  const addItems = () => {
    setItems(
      {
        title: nome_item,
        done: false
      }

    )
  }

  return (
    <>
      <header className="header-title">
        <h1><ClipboardIcon className="icons-hero-ClipboardIcon" />Notas</h1>
      </header>
      <section id="view-left-side">
        <DataGridDemo />
      </section>
      <section id="view-right-input-side">
        <input value={items} onChange={e => setItems(e.target.value)} type="text" placeholder="text.." />
        <button onClick={addItems} type="button">adicionar</button>
      </section>
    </>
  );
}

export default App;
