

import React, { useState } from 'react';
import styles from './ContactForm.module.css'

const ContactForm = ({ contacts, onAddContact }) => {
    const [name, setName] = useState('');
     const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
      
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
      alert(`Contact with name '${name}' already exists! Please choose a different name.`);
      return;
    }


    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <label htmlFor="number">Number:</label>
        <input
        type="tel"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
