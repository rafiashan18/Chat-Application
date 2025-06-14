import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const messagesApi = createApi({
    reducerPath:'messagesApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/',
        credentials:'include' //allows cookies
    }),
    endpoints :(builder) => (
        {
            getMessages:builder.query({
                query:(id)=>`message/get/${id}`
            }),
            sendMessage:builder.mutation({
                query:({id,...credentials})=>(
                    {
                       
                        url:`message/send/${id}`,
                        method:'POST',
                        body:credentials,
                    }
                )}
            ),

        }
    )
})


export const {
    useGetMessagesQuery,
    useSendMessageMutation
    
} = messagesApi