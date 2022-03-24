import React from 'react';
import {View, StyleSheet} from 'react-native';
import { COLORS, SIZES, icons } from '../constants'

export const MainLayout = ({ children }) => {
    return (
        <View style={{
            flex: 1,
        }}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({})