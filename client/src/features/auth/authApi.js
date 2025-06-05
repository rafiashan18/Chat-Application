import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
        credentials:'include'
    }),
    endpoints: (builder) => (
        {
            login: builder.mutation({
                query:(credentials) =>(
                    {
                        url:'/auth/login',
                        method:'POST',
                        body:credentials,
                    }
                )
            }),
            signup: builder.mutation({
                query: (credentials) => (
                    {
                        url:'/auth/signup',
                        method:'POST',
                        body:credentials, 
                    }
                )
            }),
           logout: builder.mutation({
           query: () => ({
             url: '/auth/logout',  
             method: 'POST',
           })
        }),
            userInfo: builder.query(
                {
                    query:()=>'auth/user-info'
                }
            ),


        }
    )
})

export const {
    useLoginMutation,
    useSignupMutation,
    useUserInfoQuery,
    useLogoutMutation,

    
} = authApi;