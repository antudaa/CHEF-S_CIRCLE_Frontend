"use client";  // This marks the component as a Client Component

import { useForm, SubmitHandler } from "react-hook-form";

interface SearchFormData {
  keyword: string;
}

const Search = ({ onSearch }: { onSearch: (searchKeyword: string) => void }) => {
  const { register, handleSubmit } = useForm<SearchFormData>();

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    onSearch(data.keyword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center p-2 space-x-6 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7z" />
        </svg>
        <input
          {...register('keyword')}
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Search by keyword..."
        />
      </div>
      <button type="submit" className="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default Search;
