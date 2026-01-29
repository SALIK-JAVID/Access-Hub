import { useEffect, useState } from "react";
import { getAllUsers, blockUser, unblockUser, createUser, deleteUser, restoreUser} from "../services/adminApi";
//where admin can add the new user.
import AddUserModal from "../components/AddUserModal";

import UserTable from "../components/UserTable";
import { toast } from "react-toastify";


const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // adding the pagination logic here!
  const[currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(""); //finding the user from email and name.
  const usersPerPage = 10;


  // where admin can add a new user:(add user)
  const[showModal, setShowModal] = useState(false);


  const [debouncedSearch, setDebouncedSearch] = useState("");
  // we need to add debouncing : limits how often a function is called! 
// putting a timeout function inside a useEffect


useEffect(() => {
const timerId = setTimeout(() => {
setDebouncedSearch(search.trim());

},600);
return () => clearTimeout(timerId) //this clear the timerid 
},[search]);


  const fetchUsers = async (searchText = "") => {
    try {
      setLoading(true);
      
      const data = await getAllUsers(searchText);
      setUsers(data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(debouncedSearch);
    setCurrentPage(1);
  }, [debouncedSearch]);   //use effect wether something happens return this code!

  const handleBlock = async (id) => {
    try {
      await blockUser(id);
      toast.success("User blocked");
      fetchUsers(debouncedSearch);
    } catch {
      toast.error("Failed to block user");
    }
  };

  const handleUnblock = async (id) => {
    try {
      await unblockUser(id);
      toast.success("User unblocked");
      fetchUsers(debouncedSearch);
    } catch {
      toast.error("Failed to unblock user");
    }
  };

  // handling the new user entered by the admin.
  const handleCreateUser = async (userData) => {
    try {
      await createUser(userData);
      toast.success("User created successfully");
      setShowModal(false);
      fetchUsers(debouncedSearch); // refresh table
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create user");
    }
  };

  // handling the deleted users :
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted");
      fetchUsers(debouncedSearch);
    } catch {
      toast.error("Failed to delete user");
    }
  };
  
  const handleRestore = async (id) => {
    try {
      await restoreUser(id);
      toast.success("User restored");
      fetchUsers(debouncedSearch);
    } catch {
      toast.error("Failed to restore user");
    }
  };
  

  // if (loading) return <p className="p-4">Loading users...</p>;

// pagination logic :
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = users.slice(
  indexOfFirstUser,
  indexOfLastUser
  ); //user.slice(0,2) for first page.

const totalPages = Math.ceil(users.length / usersPerPage) || 1;


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Access Hub : 
      Admin Panel</h1>
      <button 
      onClick={() => setShowModal(true)}
      className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Add User
      </button>
      {showModal && (
  <AddUserModal
    onClose={() => setShowModal(false)}
    onSubmit={handleCreateUser}
  />
)}

      </div>



      


      {/* search pannel */}
      <input 
      type ="text"
      placeholder="Search by name or email"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 mb-4 w-full rounded"
      />

      {loading?
      <div>Loading...</div> :
      <UserTable
        users={currentUsers}
        onBlock={handleBlock}
        onUnblock={handleUnblock}
        onDelete={handleDelete}
        onRestore={handleRestore}
      />}
      
      <div className="flex items-center gap-4 mt-4">
  <button
    onClick={() => setCurrentPage((prev) => prev - 1)}

    disabled={currentPage === 1}    //we can use currentPage+1
    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
  >
    Previous
  </button>

  <span className="font-semibold">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default Admin;


