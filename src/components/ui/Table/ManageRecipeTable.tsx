// "use client"
// import React, { useState, useEffect, useCallback } from 'react';
// import { useRecipeStore } from '@/zustand/store/recipeStore';
// import { TRecipe } from '@/types';
// import DebounceSearch from "@/hook/debounceSearchHook";
// import PublishRecipeButton from '../Buttons/PublishRecipeButton';
// import UnpublishRecipeButton from '../Buttons/UnpublishRecipeButton';
// import DeleteRecipeButton from '../Buttons/DeleteRecipeButton';
// import { RecipeCategory } from '@/types';
// import { RecipeDetailsModel } from '../Model/RecipeDetailsModel';
// import GlobalLoading from '@/app/loading';

// // const ITEMS_PER_PAGE = 5;

// const RecipeTable: React.FC = () => {
//     const [searchKeyword, setSearchKeyword] = useState("");
//     const { data, setData } = useRecipeStore();
//     const debouncedSearchKeyword = DebounceSearch(searchKeyword, 500);
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [filteredData, setFilteredData] = useState<TRecipe[]>([]);
//     const [sortOption, setSortOption] = useState("");
//     const [recipes, setRecipes] = useState<TRecipe[]>([]);
//     const [hasMore, setHasMore] = useState(true);
//     const [isLoading, setIsLoading] = useState(false);
//     console.log(filteredData)l
//     // const observer = useRef<IntersectionObserver | null>(null);

//     const fetchRecipes = useCallback(async (pageNum: number) => {
//         setIsLoading(true);
//         try {
//             const query = new URLSearchParams({
//                 ...(debouncedSearchKeyword && { searchTerm: debouncedSearchKeyword }),
//                 ...(selectedCategory && selectedCategory !== "All" && { category: selectedCategory }),
//                 ...(sortOption && { sort: sortOption }),
//                 page: pageNum.toString(),
//             }).toString();

//             const response = await fetch(
//                 `${process.env.NEXT_PUBLIC_BASE_API}/recipe?${query}`
//             );
//             if (!response.ok) throw new Error(`Error: ${response.status}`);

//             const data = await response.json();

//             if (data.data.recipes.length === 0) {
//                 setHasMore(false);
//             } else {
//                 setRecipes((prevRecipes) => [...prevRecipes, ...data.data.recipes]);
//                 setData(data.data.recipes); // Set in Zustand store
//             }
//         } catch (error) {
//             console.error("Failed to fetch recipes:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }, [debouncedSearchKeyword, selectedCategory, sortOption, setData]);

//     useEffect(() => {
//         setCurrentPage(1);
//         setRecipes([]);
//         setHasMore(true);
//         fetchRecipes(1);
//     }, [debouncedSearchKeyword, selectedCategory, sortOption, fetchRecipes]);

//     useEffect(() => {
//         let filtered = data || [];

//         if (selectedCategory !== 'All') {
//             filtered = filtered.filter(recipe => recipe.category === selectedCategory);
//         }

//         if (debouncedSearchKeyword) {
//             filtered = filtered.filter(
//                 recipe =>
//                     recipe.name.toLowerCase().includes(debouncedSearchKeyword.toLowerCase()) ||
//                     (recipe.author?.name &&
//                         recipe.author.name.toLowerCase().includes(debouncedSearchKeyword.toLowerCase()))
//             );
//         }

//         setFilteredData(filtered);
//     }, [data, debouncedSearchKeyword, selectedCategory]);

//     // const lastRecipeRef = useCallback(
//     //     (node: HTMLDivElement) => {
//     //         if (isLoading) return;
//     //         if (observer.current) observer.current.disconnect();

//     //         observer.current = new IntersectionObserver((entries) => {
//     //             if (entries[0].isIntersecting && hasMore) {
//     //                 setCurrentPage((prevPage) => prevPage + 1);
//     //             }
//     //         });

//     //         if (node) observer.current.observe(node);
//     //     },
//     //     [isLoading, hasMore]
//     // );

//     useEffect(() => {
//         if (currentPage > 1 && hasMore) {
//             fetchRecipes(currentPage);
//         }
//     }, [currentPage, fetchRecipes, hasMore]);

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchKeyword(e.target.value);
//         setCurrentPage(1);
//     };

//     const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCategory(e.target.value);
//         setCurrentPage(1);
//     };

//     const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setSortOption(e.target.value);
//         setCurrentPage(1);
//     };

//     if (isLoading && currentPage === 1) return <GlobalLoading />;

//     return (
//         <div className="flex flex-col">
//             <div className="mb-4 flex justify-between items-center px-6">
//                 <input
//                     type="text"
//                     placeholder="Search by recipe name or author..."
//                     value={searchKeyword}
//                     onChange={handleSearchChange}
//                     className="py-2 px-4 border rounded-md w-1/3"
//                 />

//                 <div className="relative w-1/4">
//                     <select
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                         className="py-2 pl-8 pr-4 border rounded-md w-full appearance-none"
//                     >
//                         {RecipeCategory.map((category) => (
//                             <option key={category} value={category}>
//                                 {category}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <select
//                     value={sortOption}
//                     onChange={handleSortChange}
//                     className="py-2 pl-8 pr-4 border rounded-md w-full appearance-none"
//                 >
//                     <option value="">Sort by</option>
//                     <option value="rating">Rating</option>
//                     <option value="date">Date</option>
//                     <option value="upvotes">Upvotes</option>
//                 </select>
//             </div>

//             <div className="overflow-x-auto pb-4 md:mx-6">
//                 <div className="block">
//                     <div className="overflow-x-auto w-full border rounded-lg border-gray-300">
//                         <table className="w-full rounded-xl">
//                             <thead>
//                                 <tr className="bg-gray-50">
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Name</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Author</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Rating</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Category</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Up Vote</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Down Vote</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Details</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Status</th>
//                                     <th className="p-5 text-left text-sm font-semibold text-gray-900">Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-300">
//                                 {recipes.map((recipe: TRecipe, index) => {
//                                     if (recipes.length === index + 1) {
//                                         return (
//                                             <tr
//                                                 // ref={lastRecipeRef}
//                                                 className="bg-white hover:bg-gray-50"
//                                                 key={recipe._id}
//                                             >
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.name}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.author?.name}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.rating}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.category}</td>
//                                                 {/* <td className="p-5 text-sm text-gray-900">{recipe.upVotes}</td> */}
//                                                 {/* <td className="p-5 text-sm text-gray-900">{recipe.downVotes}</td> */}
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     <RecipeDetailsModel recipe={recipe} />
//                                                 </td>
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     {recipe?.publishStatus === 'publish' ? (
//                                                         <UnpublishRecipeButton recipeId={recipe._id} />
//                                                     ) : (
//                                                         <PublishRecipeButton recipeId={recipe._id} />
//                                                     )}
//                                                 </td>
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     <DeleteRecipeButton recipeId={recipe._id} />
//                                                 </td>
//                                             </tr>
//                                         );
//                                     } else {
//                                         return (
//                                             <tr className="bg-white hover:bg-gray-50" key={recipe._id}>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.name}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.author?.name}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.rating}</td>
//                                                 <td className="p-5 text-sm text-gray-900">{recipe.category}</td>
//                                                 {/* <td className="p-5 text-sm text-gray-900">{recipe.upVotes}</td> */}
//                                                 {/* <td className="p-5 text-sm text-gray-900">{recipe.downVotes}</td> */}
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     <RecipeDetailsModel recipe={recipe} />
//                                                 </td>
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     {recipe.publishStatus === 'publish' ? (
//                                                         <UnpublishRecipeButton recipeId={recipe._id} />
//                                                     ) : (
//                                                         <PublishRecipeButton recipeId={recipe._id} />
//                                                     )}
//                                                 </td>
//                                                 <td className="p-5 text-sm text-gray-900">
//                                                     <DeleteRecipeButton recipeId={recipe._id} />
//                                                 </td>
//                                             </tr>
//                                         );
//                                     }
//                                 })}
//                             </tbody>

//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecipeTable;




