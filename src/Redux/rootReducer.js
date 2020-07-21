import  {combineReducers} from "redux"
import  cartReducer from "./cart/cartReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import shopReducer from "./Shop/shopReducer"

const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
}

const rootReducer =combineReducers({
    cart:cartReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer)