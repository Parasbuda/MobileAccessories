import {createSelector} from "reselect"
const CATEGORY_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5,
   summer:6,
    winter:7
}
const HOME_CATEGORY_ID_MAP={
    latest:1,
    trending:2,
    regular:3,
    popular:4
   
}
const selectShop=state=>state.shop


export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)
export const selectOthers=createSelector(
    [selectShop],
    shop=>shop.others
)


export const selectCategory=categoryUrlParam=>createSelector(
    [selectCollections],
    collections=>collections.find(collection=>collection.id===CATEGORY_ID_MAP[categoryUrlParam])
)

export const selectOthersCategory=categoryUrlParam=>createSelector(
    [selectOthers],
    others=>others.find(other=>other.id===HOME_CATEGORY_ID_MAP[categoryUrlParam])
)