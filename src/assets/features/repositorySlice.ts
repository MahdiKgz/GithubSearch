import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Repository = {
  id: number;
  name: string;
  owner: string;
  html_url: string;
  stargazers_count: number;
  visibility: string;
};

export type RepositoryState = {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
};

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: null,
};

// Create async action to get data from api
const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async (username: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      return data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        html_url : repo.html_url,
        stargazers_count: repo.stargazers_count,
        visibility: repo.visibility || "public",
      }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRepositories.fulfilled,
        (state, action: PayloadAction<Repository[]>) => {
          state.loading = false;
          state.repositories = action.payload;
        }
      )
      .addCase(
        fetchRepositories.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default repositoriesSlice.reducer;
export { fetchRepositories };
