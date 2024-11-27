import React, { useState } from "react";
import { Select, Label, Button, Rating } from "flowbite-react";

export const FilterComponent = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: 0,
    rating: 0,
  });

  const categories = ["Electronics", "Fashion", "Home", "Beauty"];
  const [ratingChecked, setRatingChecked] = useState(new Array(5).fill(false));
  const [priceRangeValue, setPriceRangeValue] = useState(0);

  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRatingChange = (index) => {
    const newRatingChecked = ratingChecked.map((checked, i) => i <= index);
    setRatingChecked(newRatingChecked);
    setFilters((prevFilters) => ({ ...prevFilters, rating: index + 1 }));
  };

  const handlePriceRangeChange = (e) => {
    setPriceRangeValue(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      priceRange: 0,
      rating: 0,
    });
    setRatingChecked(new Array(5).fill(false));
    setPriceRangeValue(0);
  };

  return (
    <div className="rounded-lg bg-slate-100 p-4 shadow-md shadow-blue-500 dark:bg-slate-800 dark:shadow-emerald-500">
      <h2 className="mb-4 text-lg font-bold text-gray-500 dark:text-gray-50">
        Filter Products
      </h2>
      <form>
        <div className="-mx-3 mb-4 flex flex-wrap">
          <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
            <Label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
              htmlFor="category"
              value="Category"
            />
            <Select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
          <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
            <Label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="rating"
              value="Rating"
            />
            <Rating>
              {ratingChecked.map((checked, index) => (
                <Rating.Star
                  key={index}
                  filled={checked}
                  onClick={() => handleRatingChange(index)}
                />
              ))}
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {filters.rating} out of 5
              </p>
            </Rating>
          </div>
          <div className="mb-4 w-full px-3">
            <Label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="priceRange"
              value="Price Range"
            />
            <div className="relative">
              <input
                id="priceRange"
                type="range"
                min="100"
                max="1500"
                value={priceRangeValue}
                onChange={handlePriceRangeChange}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
              <span className="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">
                Min ($100)
              </span>
              <span className="absolute -bottom-6 start-1/2 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 rtl:translate-x-1/2">
                ${priceRangeValue}
              </span>
              <span className="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">
                Max ($1500)
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="reset" onClick={clearFilters} color="gray">
            Clear Filters
          </Button>
          <Button
            type="submit"
            className="ml-3 rounded-md border border-transparent bg-emerald-500  text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 dark:bg-indigo-600"
          >
            Apply Filters
          </Button>
        </div>
      </form>
    </div>
  );
};
