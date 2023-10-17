import {
  CardContent,
  DealCard,
  ItemImage,
  ItemTitle,
  ItemDetails,
  ItemDetail,
} from "./DealItem.styled";

export const DealItem = ({ deal }) => {
  return (
    <DealCard>
      <ItemImage src={deal.image} alt="Building photo" />
      <CardContent>
        <ItemTitle>{deal.title}</ItemTitle>
        <ItemDetails>
          <ItemDetail>{deal.price} Dhs</ItemDetail>
          <ItemDetail>Yield {deal.yield}%</ItemDetail>
          <ItemDetail>Sold {deal.sold}%</ItemDetail>
          <ItemDetail>Tiket - {deal.tiket} Dhs</ItemDetail>
          <ItemDetail>Days left {deal.days}</ItemDetail>
        </ItemDetails>
      </CardContent>
    </DealCard>
  );
};
