import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchCompanies = createAsyncThunk("fetchCompanies", async () => {
  const body = {
    header: {
      transactionId: "3223213",

      requestDateTime: "3434234234",
    },
    body: {
      status: "1",
      lookupTypes: "TYPE_1,TYPE_2",
    },
  };
  const response = await api.post("/getLookups", body);
  console.log(response);
  return response.data;
});

const companySlice = createSlice({
  name: "Company",
  initialState: {
    isLoading: false,
    isError: false,
    company: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default companySlice.reducer;
