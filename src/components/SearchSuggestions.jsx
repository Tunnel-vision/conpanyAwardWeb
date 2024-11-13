import React from 'react';

function SearchSuggestions({ suggestions, onSelect }) {
  return (
    <ul className="search-suggestions">
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => onSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default SearchSuggestions;
