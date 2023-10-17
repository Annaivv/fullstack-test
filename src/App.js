import "./App.css";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./components/GlobalStyle";
import { Hero } from "./components/Hero/Hero";
import { Deals } from "./components/Deals/Deals";

function App() {
  return (
    <Layout>
      <Hero />
      <Deals />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
