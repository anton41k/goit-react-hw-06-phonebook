import { useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import css from "./App.module.css";

//import formSubmitHandle from './redux/actions';

export default function App() {
  /*const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? []; //render только один раз в начале
  });
  const [filter, setFilter] = useState("");*/

  /*useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);*/

  /*const resFilter = () => {
    setFilter("");
  };*/

  return (
    <div>
      <h2 className={css.title_phonebook}>Phonebook</h2>
      <Form />
      <h2 className={css.title_contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
