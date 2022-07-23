import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../components/store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector