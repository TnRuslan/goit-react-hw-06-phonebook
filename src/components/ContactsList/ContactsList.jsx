import { Contact } from './Contact';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contactsFromStore = useSelector(state => state.myContacts.contacts);
  console.log(contactsFromStore);
  const filter = useSelector(state => state.myFilter);

  const filteredContacts = contactsFromStore.filter(contact => {
    console.log(contact.payload);
    return contact.payload.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.contacts__list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            name={contact.payload.name}
            number={contact.payload.number}
            key={contact.payload.id}
            id={contact.payload.id}
          />
        );
      })}
    </ul>
  );
};
