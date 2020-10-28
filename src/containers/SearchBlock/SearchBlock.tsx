import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { debounce } from "lodash";
import CatwikiLogoWhite from "../../assets/CatwikiLogoWhite.svg";
import { SearchInput } from "@components/SearchInput";
import QUERY_BREEDS_SEARCH from "./BreedsSearch.graphql";

export const SearchBlock = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [findBreeds, { loading, data }] = useLazyQuery(QUERY_BREEDS_SEARCH, {
    onCompleted: (data) => {
      console.log('called??');
      const result = data?.breedsSearch.map(({ name }) => name) || [];
      setSearchResult(result);
    },
  });
  const findBreedsDebounced = debounce(findBreeds, 500);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const shouldTriggerSearch = value?.length > 2;

    if (!shouldTriggerSearch && searchResult.length > 0) {
      setSearchResult([]);
    } else {
      findBreedsDebounced({ variables: { name: value } });
    }
  };

  const handleSuggestionSelect = (item) => {
    console.log("item", item);
  };

  return (
    <div className="SearchBlock rounded-t-3xl py-32 px-20 relative bg-hero bg-cover">
      <div className="text-white max-w-xs">
        <CatwikiLogoWhite className="h-20 fill-white" />
        <h1 className="text-2xl mt-4">Get to know more about your cat breed</h1>
        <SearchInput
          className="mt-12"
          placeholder="Enter your breed"
          onChange={handleSearchChange}
          onSuggestionSelect={handleSuggestionSelect}
          suggestions={searchResult}
        />
      </div>
      {/* <div className="absolute inset-0 overflow-hidden z-0">
        <img src="/HeroImagelg.png" alt="Cat photo in dark room" />
      </div> */}
    </div>
  );
};
