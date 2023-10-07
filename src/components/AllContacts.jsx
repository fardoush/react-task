import { useEffect, useState } from "react";

const ContactItem = ({ contact, handleContact }) => {
    return (
        <tr
            key={contact.id}
            onClick={() => {
                handleContact(contact);
            }}
        >
            <td>{contact.id}</td>
            <td>{contact.phone}</td>
            <td>{contact.country.name}</td>
        </tr>
    );
};

const AllContacts = ({ onlyEven = false, handleContact }) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
            .then((response) => response.json())
            .then((data) => setContacts(data.results));
    }, []);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Phone</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {onlyEven &&
                    contacts.length !== 0 &&
                    contacts
                        .filter((item) => item.id % 2 == 0)
                        .map((item) => (
                            <ContactItem
                                contact={item}
                                handleContact={handleContact}
                            />
                        ))}
                {!onlyEven &&
                    contacts.length !== 0 &&
                    contacts.map((item) => (
                        <ContactItem
                            contact={item}
                            handleContact={handleContact}
                        />
                    ))}
            </tbody>
        </table>
    );
};
export default AllContacts;
