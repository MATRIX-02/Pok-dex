import { useState } from "react";

const Search = ({setSearch}) => {
  const [inputValue, setInputValue] = useState(""); 
  

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputValue);
    setInputValue('');
  };

  return (
    <div className="w-full my-5">
      <form>
        <input
          className="w-11/12 p-2 border"
          type="text"
          name="search"
          id="search"
          value={inputValue} // Bind input value to state
          onChange={handleChange} // Update state on input change
        />
        <button onClick={handleSubmit} className="border p-2">Submit</button>
      </form>
    </div>
  );
};

export default Search;