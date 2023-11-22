import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
export interface Photoses {
  photo: string;
  title: string;
  desc: string;
}
export interface IninitialType {
  selectedCateg: number;
  currentPage: number;
  search: string;
}
export interface PhotoMap {
  id: number;
  category: number;
  topic: string;
  photos: Photoses[];
}
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
