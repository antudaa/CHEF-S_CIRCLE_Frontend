"use client"
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '@/zustand/store/recipeStore';
import { TRecipe } from '@/types';
import DebounceSearch from "@/hook/debounceSearchHook";
import PublishRecipeButton from '../Buttons/PublishRecipeButton';
import UnpublishRecipeButton from '../Buttons/UnpublishRecipeButton';
import DeleteRecipeButton from '../Buttons/DeleteRecipeButton';
import { RecipeCategory } from '@/types';
import { RecipeDetailsModel } from '../Model/RecipeDetailsModel';
import GlobalLoading from '@/app/loading';
import { useFetchRecipesByAuthorQuery } from '@/redux/features/recipes/recipeApi';
import { useUserData } from '@/hook/auth.hook';

const ITEMS_PER_PAGE = 5;

const UserRecipeTable: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const debouncedSearchKeyword = DebounceSearch(searchKeyword, 500);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState("");
    const { data, setData } = useRecipeStore();
    const [currentPage, setCurrentPage] = useState(1);
    const { userData } = useUserData();
    const authorId = userData?._id as string;

    // Use the fetchPublishedRecipes query hook
    const { data: fetchedData, isLoading, error } = useFetchRecipesByAuthorQuery(
        authorId ? {
            authorId,
            searchTerm: debouncedSearchKeyword,
            sort: sortOption,
            category: selectedCategory,
            page: currentPage,
            limit: ITEMS_PER_PAGE
        } : { authorId: '', searchTerm: '', sort: '', category: '', page: 1, limit: ITEMS_PER_PAGE }
    );

    useEffect(() => {
        if (fetchedData) {
            setData(fetchedData.data.recipes); // Update Zustand store with fetched recipes
        }
    }, [fetchedData, setData]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    if (isLoading) return <GlobalLoading />;
    if (error) return <p>Error fetching recipes.</p>

    return (
        <div className="flex flex-col">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row justify-between items-center px-6">
                <input
                    type="text"
                    placeholder="Search by recipe name or author..."
                    value={searchKeyword}
                    onChange={handleSearchChange}
                    className="py-2 px-4 border rounded-md flex-1"
                />

                <div className='flex gap-4'>
                    <div className="relative w-[200px]">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="py-2 pl-8 pr-4 border rounded-md w-full appearance-none"
                        >
                            {/* <option value={'all'}>{'All'}<option/> */}
                            {RecipeCategory.map((category) => (
                                <option key={category} value={category === "All" ? '' : category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className="py-2 pl-8 pr-4 border rounded-md w-full appearance-none"
                    >
                        <option value="">Sort by</option>
                        <option value="rating">Rating</option>
                        <option value="date">Date</option>
                        <option value="upvotes">Upvotes</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto pb-4 md:mx-6">
                <div className="block">
                    <div className="overflow-x-auto w-full border rounded-lg border-gray-300">
                        <table className="w-full rounded-xl">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Name</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Author</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Rating</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Category</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Up Vote</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Down Vote</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Details</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th className="p-5 text-left text-sm font-semibold text-gray-900">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {data.map((recipe: TRecipe, index) => {
                                    if (data.length === index + 1) {
                                        return (
                                            <tr
                                                className="bg-white hover:bg-gray-50"
                                                key={recipe._id}
                                            >
                                                <td className="p-5 text-sm text-gray-900">{recipe.name}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.author?.name}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.rating}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.category}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.upvotes}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.downvotes}</td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    <RecipeDetailsModel recipe={recipe} />
                                                </td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    {recipe?.publishStatus === 'publish' ? (
                                                        <UnpublishRecipeButton recipeId={recipe._id} />
                                                    ) : (
                                                        <PublishRecipeButton recipeId={recipe._id} />
                                                    )}
                                                </td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    <DeleteRecipeButton recipeId={recipe._id} />
                                                </td>
                                            </tr>
                                        );
                                    } else {
                                        return (
                                            <tr className="bg-white hover:bg-gray-50" key={recipe._id}>
                                                <td className="p-5 text-sm text-gray-900">{recipe.name}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.author?.name}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.rating}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.category}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.upvotes}</td>
                                                <td className="p-5 text-sm text-gray-900">{recipe.downvotes}</td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    <RecipeDetailsModel recipe={recipe} />
                                                </td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    {recipe.publishStatus === 'publish' ? (
                                                        <UnpublishRecipeButton recipeId={recipe._id} />
                                                    ) : (
                                                        <PublishRecipeButton recipeId={recipe._id} />
                                                    )}
                                                </td>
                                                <td className="p-5 text-sm text-gray-900">
                                                    <DeleteRecipeButton recipeId={recipe._id} />
                                                </td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        </table>

                        <div className="flex align-center items-center my-4 justify-end">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 border rounded-md disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="mx-2 text-sm">Page {currentPage}</span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={!fetchedData || fetchedData.data.recipes.length < ITEMS_PER_PAGE}
                                className="px-4 py-2 mx-1 border rounded-md disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRecipeTable;