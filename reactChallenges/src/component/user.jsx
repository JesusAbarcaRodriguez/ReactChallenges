import React from "react";
import "../index.css";
function User({ name, email }) {
  console.log(name, email, "userComponet");
  return (
    <div className="bg-white text-black-100 py-300 my-300 mt-4 font-bold">
      <h3 class="my-5 font-bold">Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
export default User;
