import "./App.css";
import Main from "./components/Main";
import Head from "./components/Head";

function App() {
  return (
    <section className="flex justify-center items-center flex-col min-w-[750px]:">
      <Head />
      <Main />
    </section>
  );
}

export default App;
