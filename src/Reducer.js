export const initialState={
cart:[],

};


    export const getCartTotal = (cart) => {

        return 100;

    }
    



export const reducer=(state,action)=>{
    console.log(action);
    

switch(action.type){

    case 'ADD_TO_CART':
        return {
            ...state,cart:[...state.cart,action.item],
        };

    default:
        return state;


}
};
