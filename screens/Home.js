import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../screens/MainLayout'
import { dummyData } from '../constants'
import { getHoldings, getCoinMarket } from '../store/market/marketActions'

const Home = () => {

    const dispatch = useDispatch();

    // Usamos useFocusEffect para que se llame cada vez que hago focu en la pantlla
    // ya que el sue effect se llama solo una vez cuando inicia el componente
    useFocusEffect(
        React.useCallback(() => {
            dispatch(getHoldings(dummyData.holdings))
            dispatch(getCoinMarket())
        }, [])
    );

    return (
        <MainLayout>
            <View>
                <Text>Home</Text>
            </View>
        </MainLayout>        
    )
}

export default Home;