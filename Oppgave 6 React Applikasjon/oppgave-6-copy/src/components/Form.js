import Input from "./Input";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form({ setTodos }) {
  // Lagrer endringene i input name="title" via useState
  const [title, setTitle] = useState("");

  // Lagrer endringene i input name="content" via useState
  const [content, setContent] = useState("");

  // Genererer random Id
  const createId = () => Math.floor(Math.random(0, 1) * 1000);

  // Funksjonen trigges når vi skriver i input name="title" i Input komponenten
  const handleTitleChange = (event) => {
    // console.log("title: ", event.currentTarget.value);
    setTitle(event.currentTarget.value);
  };

  // Funksjonen trigges når vi skriver i input name="content" i Input komponenten
  const handleContentChange = (event) => {
    // console.log("content: ", event.currentTarget.value);
    setContent(event.currentTarget.value);
  };

  // Funksjon som legger til en ny todo i lista setTodos
  const onSubmit = (event) => {
    event.preventDefault();
    // const id = createId();
    // Installerte uuid og brukte det for å lage en ny id
    const id = uuid();
    setTodos((prev) => [...prev, { id, title, content }]);
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <Input
          name="title"
          id="title"
          type="text"
          label="Title"
          onChange={handleTitleChange}
          value={title}
        />
        <Input
          name="content"
          id="content"
          type="text"
          label="Content"
          onChange={handleContentChange}
          value={content}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}
