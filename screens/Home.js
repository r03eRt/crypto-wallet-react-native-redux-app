import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../screens/MainLayout'
import { dummyData, icons, SIZES } from '../constants'
import { getHoldings, getCoinMarket } from '../store/market/marketActions'
import { COLORS } from '../constants'
import { WalletInfoSection } from '../components/WalletInfoSection';
import { IconTextButton } from '../components/IconTextButton';

const Home = () => {

    const dispatch = useDispatch();

    // Usamos useFocusEffect para que se llame cada vez que hago focu en la pantlla
    // ya que el sue effect se llama solo una vez cuando inicia el componente
    useFocusEffect(
        React.useCallback(() => {
            console.log('ejecuto use effect--------');
            dispatch(getHoldings(dummyData.holdings));
            dispatch(getCoinMarket());
        }, [])
    );

    return (
        <MainLayout>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}>
                {/** Header - wallet info */}
                <WalletInfoSection/>
                
                {/** Chart */}
                W
                {/** Cryptocurrency */}
            </View>
        </MainLayout>        
    )
}

export default Home;