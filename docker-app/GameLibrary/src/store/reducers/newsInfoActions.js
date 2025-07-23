
export const setNews=(showInfo,idInfo)=>{
    const stateInfo={
        show: showInfo,
        id:idInfo
    }
    return{
        type:"SET_NEWS",
        payload:stateInfo
    }
}