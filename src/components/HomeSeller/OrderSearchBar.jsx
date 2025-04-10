import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const OrderSearchBar = ({ onSearch }) => {
  const [searchOrder, setSearchOrder] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchOrder);
    }
  };

  return (
    <form className="flex max-w-2xl mx-auto items-center bg-white rounded-full px-5 py-3 shadow-md mb-6" onSubmit={handleSearch}>
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
      <input
        type="text"
        placeholder="Buscar por SKU, ID, día, persona..."
        className="w-full bg-transparent focus:outline-none ml-3 placeholder-gray-500 text-gray-900 text-base"
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
      />
    </form>
  );
};

export default OrderSearchBar;
