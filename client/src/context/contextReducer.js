export const ACTIONS = {
    ADD_TRANSACTION: "add_transaction",
    DELETE_TRANSACTION: "delete_transaction",
    GET_TRANSACTION: "get_transaction",
    TRANSACTION_ERROR: "transaction_error"
}

export default (state, action) => {

    switch (action.type){
        case ACTIONS.GET_TRANSACTION:
            return{
                ...state,
                transactions: action.payload
            }
        case ACTIONS.TRANSACTION_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case ACTIONS.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
              }
        case ACTIONS.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
              }
        default:
            return state;

    }
}
