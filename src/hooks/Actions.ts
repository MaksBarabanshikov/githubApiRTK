import {useDispatch} from "react-redux";
import {githubActions} from "../components/store/slices/github.slice";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}