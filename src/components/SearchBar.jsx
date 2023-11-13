/* eslint-disable react/prop-types */
const SearchBar = ({ debouncedOnChange }) => {
  return (
    <div className="mt-4  w-full h-16 flex justify-center items-center text-white font-semibold text-lg">
      <input
        type="text"
        placeholder="Input Location"
        className="px-3 py-3 w-60 rounded-full  font-semibold shadow-xl bg-bluePrimary"
        onChange={debouncedOnChange}
      />
    </div>
  );
};

export default SearchBar;
