import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateUsersModal from './UpdateUsersModal';

const TableUser = (props) => {
    
    const {listUsers} = props;

    return (
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length > 0 && 
            listUsers.map((user) => { 
                return (
                <tr key={``}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <UpdateUsersModal user={user} fetchListUser={props.fetchListUser}/>
                        <button className="btn btn-danger mx-3">Delete</button>
                    </td>
                </tr>
                )
            }
            )
        }
        {listUsers && listUsers.length === 0 &&
        <tr>
            <td colSpan="4">No data</td>
        </tr>
        }
      </tbody>
    </Table>
        </>
    );
};

export default TableUser;