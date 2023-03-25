import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <div class="flex-col">
    <form class="rounded-md bg-orange-600 flex flex-row items-center my-1 justify-center font-bold font-serif px-2" onSubmit={handleSubmit}>
      <label for="name" class="block mr-4">
      Name:
        <input class=" rounded-md px-2 py-1.5 text-gray-700 ml-1" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" />
      </label>
      <label for="email" class="block mr-4">
        Email:
        <input class="rounded-md px-2 py-1.5 text-gray-700 ml-1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
      </label>
      <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit">Add User</button>
    </form>
    <hr class="border border-black mt-1"></hr>
    </div>
  );
}
export default UserForm;
