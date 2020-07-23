import SHOP_DATA from"./Shop.data"
import HomeData from "./Home.data"


const INITIAL_STATE={
    collections:SHOP_DATA,
    others:HomeData
} 

const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer