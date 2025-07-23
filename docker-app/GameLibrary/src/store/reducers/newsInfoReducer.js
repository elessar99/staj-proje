const stateInfo={
    show: false,
    id:0
}


function newsInfoReducer(state=stateInfo,action){
    switch (action.type) {
        case "SET_NEWS":
            return {
                show:action.payload.show,
                id:action.payload.id
            }
        default:
            return state
    }
}
export default newsInfoReducer
