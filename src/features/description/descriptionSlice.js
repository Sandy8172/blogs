import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchBlogByID } from "./descriptionAPI";

const initialState = {
  value: 0,
  status: "idle",
  data: [],
  blogById: {},
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const fetchAsync = createAsyncThunk(
  "description/fetchData",
  async (type) => {
    try {
      const response = await fetchData(type);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);
export const blogByIdAsync = createAsyncThunk(
  "description/blogById",
  async (blogId) => {
    try {
      const response = await fetchBlogByID(blogId);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    filterPost: (state, action) => {
      const userId = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(blogByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(blogByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogById = action.payload;
      })
      .addCase(blogByIdAsync.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { filterPost } = descriptionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state) => state.description.data;
export const blogById = (state) => state.description.blogById;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default descriptionSlice.reducer;
