// REDUCER FILES

import { types } from '../types'

const initialState = {
   isTradeModalVisible: false
}

export const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            }
        default: 
            return state;
    }
}