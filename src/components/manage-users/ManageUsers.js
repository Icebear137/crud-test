import AddUsersModal from "./AddUsersModal";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import TableUser from "./TableUsers";

const ManageUsers = () => {
    return (
        <div className="user-container">
            <AddUsersModal/>
            <div>
                <TableUser/>  
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
