import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFormData(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // onSubmit(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" value={formData} onChange={handleInputChange} required/>
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}

export default App;
