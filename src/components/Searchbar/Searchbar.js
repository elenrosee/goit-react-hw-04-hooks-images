import { useState } from "react";
import PropTypes from "prop-types";
import "./Searchbar.scss";

export default function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(request);
    setRequest("");
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="request"
          autoComplete="off"
          onChange={(e) => {
            setRequest(e.currentTarget.value);
          }}
          value={request}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
