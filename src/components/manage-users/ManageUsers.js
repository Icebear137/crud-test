import AddUsersModal from "./AddUsersModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import TableUser from "./TableUsers";
import { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {

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
        <div className="user-container">
            <AddUsersModal fetchListUser={fetchListUser}/>
            <div>
                <TableUser listUsers={listUsers} fetchListUser={fetchListUser}/>  
            </div>    
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />    
        </div>
    )
};

export default ManageUsers;
