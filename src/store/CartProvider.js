import CartContext from "./cart-context"
import { useReducer } from "react";

/* this reducer function is outside component bcz it won't need
any data to find in this componenet*/
/* 1-- this is the default state for the cart */
const defaultCartState = {

    items: [],
    totalAmount: 0,
}

//*2. this is a reducer function which must be passed in the useReducer hook

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // old state snapshot + items upcoming 
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        /*if the item we're currently looking at in the array has the
        { item.id === action.item.id } -- this code
        same id as the item we are adding with this action which was dispatched*/
        const existingCartItemIndex = state.items.findIndex((item) =>
            item.id === action.item.id
            //~it will return index if old snapshot item is same as the newely dispatched item
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        //End logic for existing cart items in an array
        else {
            //new Items that would add upcoming in the cart
            updatedItems = state.items.concat(action.item);
        }


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) =>
            item.id === action.id
            //~it will return index if old snapshot item is same as the newely dispatched item
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'CLEAR') {
        return defaultCartState;
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemToCart = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };


    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' });
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;