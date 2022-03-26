import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

export const Balanceinfo = ({ title, displayAmount, changePct, containerStyle }) => {
    return (
        <View style={{ ...containerStyle }}>
            {/** Title */}
            <Text style={{
                color: COLORS.white
            }}>{ title }</Text>

            {/** Figures */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
             }}>                 
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>EUR</Text>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>{ displayAmount.toLocaleString()}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>€</Text>
                
             </View>
            {/** Change percentage */}
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                { 
                    changePct != 0 && 
                    <Image
                        source={icons.upArrow}
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: 'center',
                            tintColor:  (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                            transform: ( changePct > 0) ? [{ rotate: '45deg'}] : [{ rotate: '125deg'}]
                        }}
                    />
                }
                <Text style={{
                    marginLeft: SIZES.base,
                    alignSelf: 'flex-end',
                    color: (changePct === 0) ? COLORS.lightGray : (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                    ...FONTS.h4
                }}>{ changePct.toFixed(2) }</Text>

                <Text style={{
                    marginLeft: SIZES.radius,
                    alignSelf: 'flex-end',
                    color: COLORS.lightGray3,
                    ...FONTS.h5
                }}> Cambio 7d</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})
