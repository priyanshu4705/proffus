import "./App.css";
import Header from "./components/Header/Header";
import BigFish from "./components/BigFish/BigFish";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/FAQs/Faqs";
import HaveARead from "./components/HaveARead/HaveARead";
import Categories from "./components/Categories/Categories";
import Topics from "./components/Topics/Topics";
import { useEffect, useState } from "react";

function App() {
  // Made with 💜 by Priyanshu Srivastava
  const [data, setData] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [reads, setReads] = useState([]);
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchdata = async () => {
    try {
      let response = await fetch(
        "https://raw.githubusercontent.com/priyanshu4705/proffus/master/src/assets/data.json"
      );

      if (!response.ok) {
        console.log("error", response.status);
        throw new Error("Something went wrong");
      }

      let actualdata = await response.json();
      setData(actualdata);

      setFaqs(actualdata.faqs);
      setCategories(actualdata.categories);
      setReads(actualdata.reads);
      setTopics(actualdata.topics);
    } catch (err) {
      console.log("error", err);
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [data]);

  return (
    <div className="App">
      <Header />
      <BigFish />
      <Categories categories={categories} />
      <Faqs faqs={faqs} />
      <HaveARead reads={reads} />
      <Topics topics={topics} />
      <Footer />
    </div>
  );
}

export default App;
