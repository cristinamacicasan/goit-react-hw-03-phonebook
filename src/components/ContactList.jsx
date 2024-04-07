

import React from 'react';
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <div className={styles.container}> 
      <ul>
        {contacts.map((contact) => (
            <li className={styles.contact} key={contact.id}>{contact.name}
                <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div> 
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
