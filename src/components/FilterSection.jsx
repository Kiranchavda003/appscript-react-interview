import React, { useState } from 'react';
import './FilterSection.css'; 

function FilterSection() {
  const filterData = {
    "IDEAL FOR": ["Men", "Women", "Baby & Kids"],
    "OCCASION": ["Casual", "Formal", "Party"],
    "WORK": ["Office", "Outdoor", "Home"],
    "FABRIC": ["Cotton", "Silk", "Wool"],
    "SEGMENT": ["Luxury", "Casual", "Sport"],
    "SUITABLE FOR": ["Summer", "Winter", "All Seasons"],
    "RAW MATERIALS": ["Organic", "Synthetic", "Blend"],
    "PATTERN": ["Solid", "Striped", "Printed"]
  };

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        [option]: !prev[filterName]?.[option]
      }
    }));
  };

  const handleUnselectAll = (filterName) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: {}
    }));
  };

  return (
    <aside className="filterSection">
      <div className="customizableFilter">
        <label className="filterCheckbox">
          <input type="checkbox" />
          <span className="checkboxLabel">Customizable</span>
        </label>
      </div>
      {Object.keys(filterData).map((filterName, index) => (
        <div key={index} className="filterGroup">
          <h3 className="filterTitle">
            {filterName}
            <img
              src="/assets/expand.png"
              alt="Expand"
              className="expandIcon"
              onClick={() => setSelectedFilters(prev => ({
                ...prev,
                [filterName]: prev[filterName] ? null : {}
              }))}
            />
          </h3>
          {selectedFilters[filterName] && (
            <ul className="filterOptions">
              <li className="unselectAll" onClick={() => handleUnselectAll(filterName)}>
                Unselect all
              </li>
              {filterData[filterName].map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="filterCheckbox">
                    <input
                      type="checkbox"
                      checked={!!selectedFilters[filterName]?.[option]}
                      onChange={() => handleFilterChange(filterName, option)}
                    />
                    <span className="checkboxLabel">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}

export default FilterSection;
