import React from "react";
import User from "./user";

function UserList({ users }) {
  return (
    <div class="grid grid-cols-3 gap-4 mx-5 my-5 font-bold font-arial">
      <h2 className="align-middle col-span-3 h-4 text-2xl text-center px-2 mt-2 mb-8 font-arial">Users List:</h2>
      {users.map((user) => (
        <User key={user.email} name={user.name} email={user.email} />
      ))}
    </div>
  );
}
export default UserList;
