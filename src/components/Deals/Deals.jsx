import { DealsList } from "../DealsList/DealsList";
import { DealsSection, DealsTitle } from "./Deals.styled";

const items = [
  { id: "id-1", name: "Deal 1" },
  { id: "id-2", name: "Deal 2" },
  { id: "id-3", name: "Deal 3" },
  { id: "id-4", name: "Deal 4" },
];

export const Deals = () => (
  <DealsSection>
    <DealsTitle>Open Deals</DealsTitle>
    <p>Test server</p>
    <DealsList items={items} />
  </DealsSection>
);
