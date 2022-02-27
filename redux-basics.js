const redux = require("redux");
const createStore = redux.createStore;

const INITIAL_STATE = {
    counter:0
}

//REDUCER
const rootReducer = function(state = INITIAL_STATE,action){
    
    switch(action.type){
        case "INC" : 
            return {
                ...state,
                counter:state.counter + 1};
        
        case "ADD" : 
            return {...state,counter:state.counter + action.payload};
        

        default:
            return state;
    }
}
//STORE

const store = createStore(rootReducer);

console.log(store.getState());
//DISPATCHING ACTION
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "ADD" ,payload:10})



console.log(store.getState());
store.dispatch({type: "ADD" ,payload:10})
//SUBSCSRIPTION

store.subscribe(() => {
    console.log("[Subscription]",store.getState())
})