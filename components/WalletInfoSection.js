import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { SIZES, COLORS, icons } from '../constants';
import { Balanceinfo } from './BalanceInfo';
import { IconTextButton } from './IconTextButton';

export const WalletInfoSection = () => {

    const myHoldings = useSelector(state => state.market.myHoldings);
    const totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
    const valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0);
    const percChange = valueChange / (totalWallet - valueChange) * 100;

    return (
        <View style={{
            paddingHorizontal: SIZES.padding,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: COLORS.gray,
        }}>
            {/** Balance Info */}
            <Balanceinfo
                title="Your Wallet"
                displayAmount={totalWallet}
                changePct={percChange}
                containerStyle={{
                    marginTop: 50
                }}
            />

            {/** Buttons */}
                <View style={{
                    display: 'flex',                    
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 20,
                    paddinHorizontal: SIZES.radius
                }}>
                    <IconTextButton
                        label="Transfer"
                        icon={icons.send}
                        onPress={ () => console.log('Transfer') }
                        containerStyle={{
                            height: 40,
                            marginRight: SIZES.radius,
                            paddingHorizontal: SIZES.padding
                        }}
                    />

                     <IconTextButton
                        label="Withdraw"
                        icon={icons.withdraw}                   
                        onPress={ () => console.log('Withdraw') }
                        containerStyle={{
                            height: 40,
                            paddingHorizontal: SIZES.padding
                        }}
                    />
                </View>
               
               
               
                 
               
            
        </View>
    );
}

const styles = StyleSheet.create({})

