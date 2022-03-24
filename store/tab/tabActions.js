// ACTIONS FILE
import { types } from '../types'

export const setTradeModalVisibility = (isVisible) => async (dispatch, getState) => {
    dispatch({
        type: types.SET_TRADE_MODAL_VISIBILITY,
        payload: {
           isVisible
        }
    })
}