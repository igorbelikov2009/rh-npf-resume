import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../../models/types";

// newsReducer буду использовать только для получения новостей
// на страницах: MainPage, ListNews, NewsPage.

// На странице AdminPanelPage буду использовать createApi (newsApi.ts)

export const getNews = createAsyncThunk("news/getNews", async function (_, { rejectWithValue }) {
  try {
    const response = await fetch("http://localhost:5000/news");
    const data: INews[] = await response.json();

    return data;
  } catch (error: any) {
    return rejectWithValue("Запусти сервер в параллельном терминале командой: json-server --watch db.json --port 5000");
  }
});

interface INewsState {
  isLoading: boolean;
  error: string;
  news: INews[];
}

const initialState: INewsState = {
  isLoading: false,
  error: "",
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending.type]: (state) => {
      state.isLoading = true;
      state.error = ""; // На всякий случай обнуляем. Вдруг, прежде, была ошибка.
    },
    [getNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
      state.isLoading = false;
      state.news = action.payload;
    },
    [getNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default newsSlice.reducer;
// регистрируем в store.ts
