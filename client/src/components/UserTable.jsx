const UserTable = ({ users, onBlock, onUnblock }) => {
    return (
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
  
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                {user.status === "active" ? "🟢 Active" : "🔴 Blocked"}
              </td>
              <td className="border p-2">
                {user.status === "active" ? (
                  <button
                    onClick={() => onBlock(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Block
                  </button>
                ) : (
                  <button
                    onClick={() => onUnblock(user._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Unblock
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;
  
