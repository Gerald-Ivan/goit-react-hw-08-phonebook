import React from 'react';
import { ContactListItem } from '../Items/Items';
import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'


export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TableContainer>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Phone</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            filteredContact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </Tbody>
    </Table>
    </TableContainer>

  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};