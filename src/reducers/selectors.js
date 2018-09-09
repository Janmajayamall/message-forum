
const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type){
        case "SET_SELECTORS":
            return action.newArray 
        default :
            return state
    
    }
}