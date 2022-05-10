import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/FAQs/Faqs";
import HaveARead from "./components/HaveARead/HaveARead";

function App() {
  return (
    <div className="App">
      <Header />
      <Faqs />
      <HaveARead />
      <Footer />
    </div>
  );
}

export default App;
