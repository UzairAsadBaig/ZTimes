import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cook from 'js-cookie';

const Cookies=Cook.withAttributes( {
  path: '/', sameSite: 'Strict', secure: true, expires: 7
} );


export const nodeAPI=createApi( {
  reducerPath: "nodeAPI",
  baseQuery: fetchBaseQuery( { baseUrl: "http://localhost:3001/api/v1" } ),

  // Entities of API
  tagTypes: ['User','Announcements'],

   
  endpoints: ( builder ) => ( {

//Optimize:  ************************** Authentication ******************************
   

    //********** Login query
    login: builder.mutation( {
      query: ( body ) => ( {
        url: '/users/login',
        method: 'POST',
        body,
      } ),
      invalidatesTags: [ 'User' ],
    } ),

    //********** Create Anouncement query
    createAnnouncement: builder.mutation( {
      query: ( body ) => ( {
        url: '/announcement/',
        method: 'POST',
        body,
        headers: {
          'authorization': `Bearer ${Cook.get('JWT')}`,
        }
      } ),
      invalidatesTags: [ 'Announcements' ],
    } ),


    getTodyasWinners: builder.query( {
      query: ( body ) => ( {
        url: '/announcement/winners',
        method: 'GET',
      } ),
      invalidatesTags: [ 'Annoucements' ],
    } ),

} )

});

export const { useLoginMutation,useCreateAnnouncementMutation,useGetTodyasWinnersQuery}=nodeAPI;
