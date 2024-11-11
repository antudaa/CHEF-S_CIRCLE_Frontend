import { baseApi } from '@/redux/api/baseApi';

export const recipeApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Add a new recipe
        addRecipe: builder.mutation({
            query: (newRecipe) => ({
                url: '/',
                method: 'POST',
                body: newRecipe,
            }),
        }),
        // Update a recipe
        updateRecipe: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: updatedData,
            }),
        }),
        // Soft delete a recipe
        softDeleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
        // Fetch a single recipe by ID
        fetchRecipeById: builder.query({
            query: (id) => `/${id}`,
        }),
        fetchRecipesByAuthor: builder.query({
            query: ({ authorId }) => {
                console.log(authorId)
                return {
                    url: `/author/${authorId}`,
                    method: 'GET',
                }
            },
            providesTags: ["recipe"],
        }),
        // Fetch published recipes
        fetchPublishedRecipes: builder.query({
            query: ({ searchTerm, sort, category, page, limit }) => ({
                url: "/recipe",
                method: "GET",
                params: { searchTerm, sort, category, page, limit },
            }),
            providesTags: ["recipe"],
        }),
        // Fetch recipes by category
        fetchRecipesByCategory: builder.query({
            query: (category) => `/category/${category}`,
        }),
        // Add a comment to a recipe
        addComment: builder.mutation({
            query: ({ id, comment }) => ({
                url: `/${id}/comment`,
                method: 'POST',
                body: comment,
            }),
        }),
        // Reply to a comment
        replyToComment: builder.mutation({
            query: ({ id, commentId, reply }) => ({
                url: `/${id}/comment/${commentId}/reply`,
                method: 'POST',
                body: reply,
            }),
        }),
        // Rate a recipe
        rateRecipe: builder.mutation({
            query: ({ id, rating }) => ({
                url: `/${id}/rate`,
                method: 'PATCH',
                body: { rating },
            }),
        }),
        // Like a recipe
        likeRecipe: builder.mutation({
            query: (id) => ({
                url: `/${id}/like`,
                method: 'PATCH',
            }),
        }),
        // Add recipe to favorites
        addToFavorites: builder.mutation({
            query: (id) => ({
                url: `/${id}/favourite`,
                method: 'PATCH',
            }),
        }),
        // Remove recipe from favorites
        removeFromFavorites: builder.mutation({
            query: (id) => ({
                url: `/${id}/unfavourite`,
                method: 'PATCH',
            }),
        }),
        // Upvote a recipe
        upvoteRecipe: builder.mutation({
            query: (recipeId) => ({
                url: `/upvote/${recipeId}`,
                method: 'PATCH',
            }),
        }),
        // Downvote a recipe
        downvoteRecipe: builder.mutation({
            query: (recipeId) => ({
                url: `/downvote/${recipeId}`,
                method: 'PATCH',
            }),
        }),
        // Publish recipe (Admin only)
        publishRecipe: builder.mutation({
            query: (recipeId) => ({
                url: `/publish/${recipeId}`,
                method: 'PATCH',
            }),
        }),
        // Unpublish recipe (Admin only)
        unpublishRecipe: builder.mutation({
            query: (recipeId) => ({
                url: `/unpublish/${recipeId}`,
                method: 'PATCH',
            }),
        }),
    }),
});

export const {
    useAddRecipeMutation,
    useUpdateRecipeMutation,
    useSoftDeleteRecipeMutation,
    useFetchRecipeByIdQuery,
    useFetchRecipesByAuthorQuery,
    useFetchPublishedRecipesQuery,
    useFetchRecipesByCategoryQuery,
    useAddCommentMutation,
    useReplyToCommentMutation,
    useRateRecipeMutation,
    useLikeRecipeMutation,
    useAddToFavoritesMutation,
    useRemoveFromFavoritesMutation,
    useUpvoteRecipeMutation,
    useDownvoteRecipeMutation,
    usePublishRecipeMutation,
    useUnpublishRecipeMutation,
} = recipeApiSlice;
