import React from "react";
import SearchIcon from "../assets/icons/search-24px.svg";

export const SearchInput = ({
  className = "",
  suggestions,
  onSuggestionSelect,
  ...props
}) => {
  const areSuggestionsAvailable =
    Array.isArray(suggestions) && suggestions.length > 0;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          className="shadow appearance-none border rounded-full w-full py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="search"
          autoCapitalize="false"
          autoComplete="false"
          {...props}
        />

        {/* 🔎 Search Icon */}
        <div className="absolute right-0 top-0 mt-3 mr-4 text-purple-lighter">
          <SearchIcon
            className="fill-black cursor-pointer"
            onClick={() => alert("hello")}
          />
        </div>
      </div>

      {/** 🕵️ Results */}
      {areSuggestionsAvailable && (
        <div className="absolute mt-2 px-2 py-1 rounded-2xl w-full bg-white text-black">
          <ul className="max-h-44 overflow-auto">
            {suggestions.map((text) => (
              <li
                className="py-3 px-3 hover:bg-gray-200 rounded cursor-pointer"
                onClick={() => onSuggestionSelect(text)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
