import {configureStore} from "@reduxjs/toolkit"
import {githubApi} from "./service/github/github.api"
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducers} from "./slices/github.slice";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducers
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>