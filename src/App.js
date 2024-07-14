import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by Sarah Gray. It is open-sourced on{" "}
          <a href="https://github.com/SL-GW/dictionary-project" target="blank">
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-project-using-react.netlify.app/"
            target="blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
