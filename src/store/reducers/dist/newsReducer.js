"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.getNews = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// newsReducer буду использовать только для получения новостей
// на страницах: MainPage, ListNews, NewsPage.
// На странице AdminPanelPage буду использовать createApi (newsApi.ts)
exports.getNews = toolkit_1.createAsyncThunk("news/getNews", function (_, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:5000/news")];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, rejectWithValue("Запусти сервер в параллельном терминале командой: json-server --watch db.json --port 5000")];
                case 4: return [2 /*return*/];
            }
        });
    });
});
var initialState = {
    isLoading: false,
    error: "",
    news: []
};
var newsSlice = toolkit_1.createSlice({
    name: "news",
    initialState: initialState,
    reducers: {},
    extraReducers: (_a = {},
        _a[exports.getNews.pending.type] = function (state) {
            state.isLoading = true;
            state.error = ""; // На всякий случай обнуляем. Вдруг, прежде, была ошибка.
        },
        _a[exports.getNews.fulfilled.type] = function (state, action) {
            state.isLoading = false;
            state.news = action.payload;
        },
        _a[exports.getNews.rejected.type] = function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        _a)
});
exports["default"] = newsSlice.reducer;
// регистрируем в store.ts
