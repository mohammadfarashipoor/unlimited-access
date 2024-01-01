import { useState } from "react";
import "./styles/App.css";
import { Url } from "./utils/baseUrl";
import Guide from "./components/Guide";
import Candles from "./components/Candles";
function App() {
  const [formData, setFormData] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFormData(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cacheUrl = `${Url + formData}`;
    const win = window.open(cacheUrl, "_blank");
    win?.focus();
  }
  return (
    <>
      <Candles />
      <Guide />
      <form onSubmit={handleSubmit} className="search-bar" autoComplete="off">
        <input
          name="url"
          pattern="https://.*"
          value={formData}
          onChange={handleInputChange}
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}

export default App;
