import { INCREMENT, DECREMENT } from "./CartAction";

const initialstate = {
    price:0,
    qty : 1
}
const Cartreducer = (state = initialstate, action) => {
    switch(action.type){
        case INCREMENT : return {

        }
        case DECREMENT : return {

        }
        default : return state
    }
}