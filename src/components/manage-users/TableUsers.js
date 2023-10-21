import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
            listUsers.map((user, index) => {
                return (
                <tr key={``}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.roles}</td>
                    <td>
                        <button className="btn btn-primary mx-3">Edit</button>
                        <button className="btn btn-danger">Delete</button>
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