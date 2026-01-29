const UserTable = ({ users, onBlock, onUnblock, onDelete, onRestore }) => {
    return (
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
            {/* <th className="border p-2">Account Status</th> */}
            {/* <th className="boder p-2">Edit</th> */}
          </tr>
        </thead>
  
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                {user.status === "active" && "🟢 Active" }
                {user.status ==="blocked" &&"🔴 Blocked"}
                {user.status ==="deleted" && "🫷🏻Deleted"}
              </td>
              
              <td className="border p-2 flex justify-center gap-2">
                    {/* ACTIVE */}
  {user.status === "active" && (
    <>
      <button
        onClick={() => onBlock(user._id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Block
      </button>

      <button
        onClick={() => onDelete(user._id)}
        className="bg-gray-700 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </>
  )}

  {/* BLOCKED */}
  {user.status === "blocked" && (
    <>
      <button
        onClick={() => onUnblock(user._id)}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Unblock
      </button>

      <button
        onClick={() => onDelete(user._id)}
        className="bg-gray-700 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </>
  )}

  {/* DELETED */}
  {user.status === "deleted" && (
    <button
      onClick={() => onRestore(user._id)}
      className="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Restore
    </button>
  )}
</td>

              {/* implementing the delete logic here : */}
              

            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;
  
