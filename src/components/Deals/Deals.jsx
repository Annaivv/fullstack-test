import { DealsList } from "../DealsList/DealsList";
import { DealsSection, DealsTitle } from "./Deals.styled";

export const Deals = () => (
  <DealsSection>
    <DealsTitle>Open Deals</DealsTitle>
    <DealsList />
  </DealsSection>
);
