import { DealItem } from "../DealItem/DealItem";
import { List } from "./DealsList.styled";

export const DealsList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <li key={item.id}>
          <DealItem deal={item} />
        </li>
      ))}
    </List>
  );
};
