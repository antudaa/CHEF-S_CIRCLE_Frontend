import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://chef-s-circle-backend.vercel.app/api/`,
        credentials: 'include',
    }),
    tagTypes: ['recipe', '', 'users'],
    endpoints: () => ({}),
});