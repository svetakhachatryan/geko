import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice = createApi({
  reducerPath: 'usersApi', // Unique key for the Redux store cache
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['User'], // Tags used for automated re-fetching (caching)
  endpoints: (builder) => ({
    // 1. Query: Fetch all users
    getUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'],
    }),
    // 2. Query: Fetch a single user by ID
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    // 3. Mutation: Create a new user
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      // Invalidating the 'User' tag forces the 'getUsers' query to refetch automatically
      invalidatesTags: ['User'], 
    }),
  }),
});

// RTK Query generates hooks automatically using the formula: use + EndpointName + Query/Mutation
export const { 
  useGetUsersQuery, 
  useGetUserByIdQuery, 
  useCreateUserMutation 
} = usersApiSlice;