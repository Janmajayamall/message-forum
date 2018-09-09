export const search = (newSearchArray) => {
    return{
        type: "SET_SELECTORS",
        newArray: newSearchArray
    }
}

export const startSearch = (seachArray) => {
    return (dispatch) => {
        return (
            
            dispatch(search(seachArray))
        )
    }
}