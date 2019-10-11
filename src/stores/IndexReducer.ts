import { combineReducers } from "redux";
import { RoomReducer } from "./room/RoomReducer";

export const RootReducer = combineReducers({
	roomReducer: RoomReducer
});
