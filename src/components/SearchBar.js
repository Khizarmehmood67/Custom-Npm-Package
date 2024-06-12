import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchResults, searchValue, handleChange }) => {
  return (
    <div className="position-relative">
      <div
        className="position-absolute start-50 translate-middle bg-white w-50"
        style={{ bottom: "-17px" }}
      >
        <div className="input-group">
          <span className="input-group-text border-0 bg-transparent ">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0 rounded-0 outline-0"
            placeholder="Search resources, services & docs..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
      {searchValue?.length > 0 && (
        <div className="position-absolute start-50 translate-middle-x bg-white p-3 rounded border shadow w-50 ">
          <h5 className="mb-3">Search history</h5>
          {searchResults?.length > 0 ? (
            <ul className="list-group">
              {searchResults.map((result, index) => (
                <li key={index} className="list-group-item">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchResults: PropTypes.array,
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
