import {
  CardContent,
  DealCard,
  ItemImage,
  ItemTitle,
  ItemDetails,
} from "./DealItem.styled";

export const DealItem = ({ deal }) => {
  return (
    <DealCard>
      <ItemImage src={deal.image} alt="Building photo" />
      <CardContent>
        <ItemTitle>{deal.title}</ItemTitle>
        <ItemDetails>
          <p>{deal.price} Dhs</p>
          <p>Yield {deal.yield}%</p>
          <p>Sold {deal.sold}%</p>
          <p>Tiket - {deal.tiket} Dhs</p>
          <p>Days left {deal.days}</p>
        </ItemDetails>
      </CardContent>
    </DealCard>
  );
};
