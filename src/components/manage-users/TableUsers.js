import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TableUser = (props) => {
    const [listUsers, setListUsers] = useState([]);
    
    const getListUsers = async () => {
        return await axios.get('http://localhost:8081/api/v1/participant/all');
    }

    const fetchListUser = async () => {
        let res = await getListUsers();
        if(res.data.EC === 0) {
            setListUsers(res.data.DT);
        }
    }
    
    useEffect(() => {
        fetchListUser();
    }, []);


    return (
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
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
                    <td>{index+1}</td>
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