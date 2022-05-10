import "./App.css";
import Header from "./components/Header/Header";
import BigFish from "./components/BigFish/BigFish";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/FAQs/Faqs";
import HaveARead from "./components/HaveARead/HaveARead";
import Categories from "./components/Categories/Categories";
import Topics from "./components/Topics/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <BigFish />
      <Categories />
      <Faqs />
      <HaveARead />
      <Topics />
      <Footer />
    </div>
  );
}

export default App;
