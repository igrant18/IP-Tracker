import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GeoAPIType } from "../Types/GeoAPIType"

export const searchAsync = createAsyncThunk<GeoAPIType, string>(
    'search/getSearch',
    async (ip) => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_kcb4dWgIzIcvBfu0YMfpzsVaZaIvk&ipAddress=${ip}`);
      const value = await response.json();
      // The value we return becomes the `fulfilled` action payload
      return value;
    }
);

const SearchValueInitailState = {
    searchValue: {
      ip: '',
      location: {
        country: '',
        region: '',
        timezone: '',
        city: '',
        lat: 0,
        lng: 0,
        postalCode: 0,
        geonameId: 0
      },
      domains: [''],
      as: {
        asn: 0,
        name: '',
        route: '',
        domain: '',
        type: ''
      },
      isp: '',
      proxy: {
        proxy: false,
        vpn: false,
        tor: false
      },
    },
    isPending: false,
    error: ''
}

const searchSlice = createSlice({
    name: 'Posts',
    initialState: SearchValueInitailState,
    reducers: {
        getValueSuccess(state, action) {
            state.searchValue = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(searchAsync.pending, (state) => {
            state.isPending = true;
          })
          .addCase(searchAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.searchValue = action.payload;
          })
          .addCase(searchAsync.rejected, (state) => {
            state.isPending = false;
          });
      },
});

export const { getValueSuccess } = searchSlice.actions;

export default searchSlice.reducer;