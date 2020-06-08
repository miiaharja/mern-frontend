import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Miia Harja",
      image:
        "https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3
    },
    {
      id: "u2",
      name: "Sami Honkasalo",
      image:
        "https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
