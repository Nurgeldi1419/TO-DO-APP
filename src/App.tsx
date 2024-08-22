import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Head from "./components/Head";

export interface ListItem {
  text: string;
  isChecked: boolean;
  id: string;
}

function App() {
  const [textList, setTextList] = useState<ListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const storedData = localStorage.getItem("");
    if (storedData) {
      setTextList(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textList", JSON.stringify(textList));
  }, [textList]);

  return (
    <section
      className={`flex justify-center items-center flex-col w-[800px] h-screen `}
    >
      <Head
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilter={setFilter}
      />
      <Main
        searchTerm={searchTerm}
        textList={textList}
        setTextList={setTextList}
        filter={filter}
      />
    </section>
  );
}

export default App;
