import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GeoAPIType } from "../Types/GeoAPIType"


export const searchAsync = createAsyncThunk<GeoAPIType, string>(
    'search/getSearch',
    async (ip) => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${import.meta.env.IP_API_KEY}&ipAddress=${ip}`);
      const value = await response.json();
      // The value we return becomes the `fulfilled` action payload
      return value;
    }
);

type SearchStateType = {
  searchValue : GeoAPIType,
  isPending : boolean,
  error: string
}

const SearchValueInitailState: SearchStateType = {
    searchValue: {
      ip: '',
      location: {
        country: '',
        region: '',
        timezone: '',
        city: '',
        lat: 51.5072,
        lng: 0.1276,
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
        updateSearchValueValue(state, action) {
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
            state.error = 'An Error has Occured'
          });
      },
});

export const { updateSearchValueValue } = searchSlice.actions;

export default searchSlice.reducer;