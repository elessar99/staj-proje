const stateInfo={
    show: false,
    id:0
}


function gameInfoReducer(state=stateInfo,action){
    switch (action.type) {
        case "SET_INFO":
            return {
                show:action.payload.show,
                id:action.payload.id
            }
        default:
            return state
    }
}
export default gameInfoReducer
