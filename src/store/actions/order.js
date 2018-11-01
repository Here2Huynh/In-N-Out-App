import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import order from '../../components/Order/Order';


export const purchaseBurgerSuccess = (id, orderData) => {
    return  {
        type: actionTypes.PURCHSE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailure = (error) => {
    return {
        type: actionTypes.PURCHSE_BURGER_FAILURE,
        error: error
    }
}

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response)
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailure(error))
            })
    }
}