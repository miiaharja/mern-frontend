import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Koti",
    description: "asd",
    imageUrl:
      "https://images.pexels.com/photos/3563888/pexels-photo-3563888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "Osoite 2",
    location: {
      lat: 62.243692,
      lng: 25.751761
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Paikka",
    description: "asd",
    imageUrl:
      "https://images.pexels.com/photos/3563888/pexels-photo-3563888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "Osoite 2",
    location: {
      lat: 62.243692,
      lng: 25.751761
    },
    creator: "u2"
  }
];

const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
