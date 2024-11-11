import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ({ searchTerm, page, limit, token }) => {
                return {
                    url: "/users/",
                    method: "GET",
                    params: { page, limit, searchTerm },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ['users'],
        }),
        getUserFullDetail: builder.query({
            query: ({ id, token }) => {
                return {
                    url: `/users/${id}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ['users'],
        }),
        updateUserData: builder.mutation({
            query: ({ id, accessToken, updatedData }) => {
                return {
                    url: `/users/${id}`,
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: updatedData,
                }
            },
            invalidatesTags: ['users'],
        }),
        getUserFullDetailLazy: builder.query({
            query: ({ id, token }) => ({
                url: `/users/get-user/${id}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ['users'],
        }),
        blockUser: builder.mutation({
            query: ({ id, token }) => ({
                url: `/users/block/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['users'],
        }),
        unBlockUser: builder.mutation({
            query: ({ id, token }) => ({
                url: `/users/unblock/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['users'],
        }),
    }),
});

// Export the correct hooks for the endpoints
export const { useGetAllUsersQuery, useLazyGetUserFullDetailQuery, useBlockUserMutation, useUnBlockUserMutation, useUpdateUserDataMutation } = userApi;