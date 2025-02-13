import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantsType[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantsMenu: builder.query<RestaurantsType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantsMenuQuery } = api

export default api
