
export const setInfo=(showInfo,idInfo)=>{
    const stateInfo={
        show: showInfo,
        id:idInfo
    }
    return{
        type:"SET_INFO",
        payload:stateInfo
    }
}