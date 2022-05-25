import changeTheNumber from "./upDown";
import changeTheNumbers from "./incDec";
import {combineReducers} from "redux";

const rootReducer= combineReducers({
    changeTheNumber,
    changeTheNumbers
})

export default rootReducer;