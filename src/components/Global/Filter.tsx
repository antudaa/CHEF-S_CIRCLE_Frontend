"use client";  // This marks the component as a Client Component

import { useForm, SubmitHandler } from "react-hook-form";

interface FilterFormData {
  category: string;
}

const Filter = ({ onFilter }: { onFilter: (category: string) => void }) => {
  const { register, handleSubmit } = useForm<FilterFormData>();

  const onSubmit: SubmitHandler<FilterFormData> = (data) => {
    onFilter(data.category);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex py-3 px-4 text-gray-500 font-semibold cursor-pointer border rounded-full">
      <span>All categories</span>
      <select {...register('category')} className="ml-4 outline-none">
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <button type="submit" className="ml-2">Apply</button>
    </form>
  );
};

export default Filter;
