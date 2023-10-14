import { CardContent, DealCard } from "./DealItem.styled";

export const DealItem = ({ deal }) => {
  return (
    <DealCard>
      <CardContent>{deal.name}</CardContent>
    </DealCard>
  );
};
