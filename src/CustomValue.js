import React, { useState } from 'react';
import Select from "react-select";
import { colourOptions } from './data.ts';
import MultiValue from "./MultiValue";



const CustomSelect = () => {
  const [values, setValues] = useState([]);
  const selectedVals = values.map((x) => x.value);
  const hiddenOptions = selectedVals.length > 3 ? selectedVals.slice(0, 3) : [];
  const options = colourOptions.filter((x) => !hiddenOptions.includes(x.value));

  const handleChange = (selectedValues) => {
    setValues(selectedValues);
  };

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '500px',
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f8f8f8' : '#ffffff',
      border: state.isFocused ? '1px solid #ccc' : '1px solid #ddd',
      boxShadow: state.isFocused ? '0 0 0 1px #ccc' : 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      padding: '2px 6px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#f0f0f0' : '#ffffff',
      color: state.isSelected ? '#333' : '#666',
      cursor: 'pointer',
    }),
  };

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={options}
        onChange={handleChange}
        value={values}
        components={{ MultiValue}}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomSelect;
