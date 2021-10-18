const contextReducer = (state, action) => {
    let transactions;

    switch (action.type){
        case ACTIONS.DELETE_TRANSACTION:
            transactions = state.filter((transaction) => transaction.id != action.payload);
            return transactions
        case ACTIONS.ADD_TRANSACTION:
            transactions = [action.payload, ...state];
            return transactions
        default:
            return state;

    }
}

export const ACTIONS = {
    ADD_TRANSACTION: "add_transaction",
    DELETE_TRANSACTION: "delete_transaction"
}

export default contextReducer;