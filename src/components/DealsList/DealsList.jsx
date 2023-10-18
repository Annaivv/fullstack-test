import axios from "axios";
import { useEffect, useState } from "react";
import { DealItem } from "../DealItem/DealItem";
import { List } from "./DealsList.styled";

const BASIC_API = "http://localhost:4000/api";

const getData = async () => {
  try {
    const response = await axios.get(`${BASIC_API}/deals`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DealsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      if (data.length === 0) {
        alert("No data");
        return;
      }
      setItems(data);
    });
  }, []);

  return (
    <List>
      {items.map((item) => (
        <li key={item._id}>
          <DealItem deal={item} />
        </li>
      ))}
    </List>
  );
};
