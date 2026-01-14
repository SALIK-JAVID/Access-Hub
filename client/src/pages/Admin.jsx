import { useEffect, useState } from "react";
import { getAllUsers, blockUser, unblockUser } from "../services/adminApi";
import UserTable from "../components/UserTable";
import { toast } from "react-toastify";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlock = async (id) => {
    try {
      await blockUser(id);
      toast.success("User blocked");
      fetchUsers();
    } catch {
      toast.error("Failed to block user");
    }
  };

  const handleUnblock = async (id) => {
    try {
      await unblockUser(id);
      toast.success("User unblocked");
      fetchUsers();
    } catch {
      toast.error("Failed to unblock user");
    }
  };

  if (loading) return <p className="p-4">Loading users...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <UserTable
        users={users}
        onBlock={handleBlock}
        onUnblock={handleUnblock}
      />
    </div>
  );
};

export default Admin;


