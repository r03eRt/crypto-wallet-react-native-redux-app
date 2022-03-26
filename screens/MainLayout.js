import React, { useEffect, useRef } from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import { useSelector } from 'react-redux';
import { IconTextButton } from '../components/IconTextButton';
import { COLORS, SIZES, icons } from '../constants'

export const MainLayout = ({ children }) => {

    const isTradeModalVisible = useSelector(state => state.tab.isTradeModalVisible);
    console.log(isTradeModalVisible);

    // para animar algo tenemos que coger el selector de elemento y luego animarlo.
    // Seleccionamos el emento y le asignamos un valor de animacion que en este caso el inicial es 0,
    //como el timeline de GSAP. Luego tras carcular los valores animaremos la variable modalY
    const modalAnimatedValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if(isTradeModalVisible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start()
        }
    }, [isTradeModalVisible]);

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 280]
    })
    
    return (
        <View style={{
            flex: 1,
        }}>
            
            { children }
            {/** Background */}
            {
                isTradeModalVisible && (
                    <Animated.View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: COLORS.transparentBlack,
                        }}
                        opacity={modalAnimatedValue}
                    ></Animated.View>
                )
            }
          
            {/** Modal */}
            <Animated.View style={{
                position: 'absolute',
                top: modalY,
                left: 0,
                width: '100%',
                padding: SIZES.padding,
                backgroundColor: COLORS.primary
            }}>
                <IconTextButton
                    label="Transfer"
                    icon={icons.send}
                    onPress={ console.log('Transfer') }
                />
                  <IconTextButton
                    label="Withdraw"
                    icon={icons.withdraw}
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    onPress={ console.log('Widthdraw') }
                />
                
            </Animated.View>
        </View>       
    );
}

const styles = StyleSheet.create({})