import axios from "axios";
import { types } from '../types'

//API
// My Holdings
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}

// Coin Market
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}


// Holding / My holdings

export const getHoldings = (
    holdings = [],
    currency = 'eur',
    orderBy = 'market_cap_desc',
    sparkline = true,
    priceChangePerc = '7d',
    perPage = 10,
    page = 1
    ) => async (dispatch, getState) => {       
        console.log('GETMARKET');
        try {
            dispatch(getHoldingsBegin())

            let ids = holdings.map(item => item.id ).join(',')
            let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`;
    
            const response = await axios.get(apiUrl, { header: {Accept: 'application/json'}});
            if(response.status == 200) {
                // Message data
                let myHoldings = response.data.map(item => {
                    // Retrieve our current holdings -> current quantity
                    let coin = holdings.find(a => a.id === item.id);

                    let price7d = item.current_price / (1 + item.price_change_percentage_7d_in_currency * 0.01);

                    return {
                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        current: item.current_price,
                        qty: coin.qty,
                        total: coin.qty * item.current_price,
                        price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                        holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                        sparkline_in_7d: {
                            value: item.sparkline_in_7d.price.map(price => price * coin.qty)
                        }
                    }
                })
                dispatch(getHoldingsSuccess(myHoldings))
            } else {
                dispatch(getHoldingsFailure(response.data))
            }  
        } catch (error) {
            dispatch(getHoldingsFailure(error))
        }
       



}

export const getHoldingsBegin = () => {
    
    return {
        type: types.GET_HOLDINGS_BEGIN,
    }

}

export const getHoldingsSuccess = (myHoldings) => {
    
    return {
        type: types.GET_HOLDINGS_SUCCESS,
        payload: { 
            myHoldings: myHoldings
        }
    }

}

export const getHoldingsFailure = (error) => {
    
    return {
        type: types.GET_HOLDINGS_FAILURE,
        payload: { 
            error: error
        }
    }
}



//Coin Market

export const getCoinMarket = (
    currency = 'eur',
    orderBy = 'market_cap_desc',
    sparkline = true,
    priceChangePerc = '7d',
    perPage = 10,
    page = 1
    ) => async (dispatch, getState) => {
        console.log('GETCOIN');
        try {
            dispatch(getCoinMarketBegin())

            let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`;
    
            const response = await axios.get(apiUrl, { header: {Accept: 'application/json'}});

            if(response.status == 200) {
                dispatch(getCoinMarketSuccess(response.data));
            } else {
                dispatch(getCoinMarketFailure(response.data))
            }  
        } catch (error) {
            dispatch(getCoinMarketFailure(error))
        }
}


export const getCoinMarketBegin = () => {
    
    return {
        type: types.GET_COIN_MARKET_BEGIN,
    }

}

export const getCoinMarketSuccess = (coins) => {
    
    return {
        type: types.GET_COIN_MARKET_SUCCESS,
        payload: { 
            coins: coins
        }
    }

}

export const getCoinMarketFailure = (error) => {
    
    return {
        type: types.GET_COIN_MARKET_FAILURE,
        payload: { 
            error: error
        }
    }
}