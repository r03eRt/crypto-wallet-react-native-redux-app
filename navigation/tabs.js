import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Portfolio, Market, Profile } from "../screens"
import { TabIcon } from "../components/TabIcon"
import { COLORS, icons } from "../constants"
import { useDispatch, useSelector } from "react-redux";
import { setTradeModalVisibility } from "../store/tab/tabActions";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={onPress}>
            { children }
        </TouchableOpacity>
    )
}


const Tabs = () => {

    const dispatch = useDispatch();
    const isTradeModalVisible = useSelector( state => state.tab.isTradeModalVisible );

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 140,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) =>
                    !isTradeModalVisible && 
                        (<TabIcon focused={focused} icon={icons.home} label="Home"/>)
                }}
                listeners={{
                    tabPress: (e) => {
                        if(isTradeModalVisible) {
                            e.preventDefault();
                        }                        
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => 
                    !isTradeModalVisible &&
                        (<TabIcon focused={focused} icon={icons.briefcase} label="Portfolio"/>)
                }}
                listeners={{
                    tabPress: (e) => {
                        if(isTradeModalVisible) {
                            e.preventDefault();
                        }                        
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => 
                        (
                            <TabIcon 
                                focused={focused}
                                icon={ isTradeModalVisible ? icons.close : icons.trade }
                                iconStyle={ isTradeModalVisible ? {
                                    width: 15,
                                    height: 15
                                } : null }
                                label="Trade"
                                isTrade={true}  
                            />
                        )
                    ,
                    tabBarButton: (props) => 
                    (
                        <TabBarCustomButton
                            {...props}
                            onPress={ () => { 
                                dispatch(setTradeModalVisibility(!isTradeModalVisible))
                                console.log('Trade Button')
                        } }
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => 
                    !isTradeModalVisible &&
                        (<TabIcon focused={focused} icon={icons.market} label="Market"/>)
                }}
                listeners={{
                    tabPress: (e) => {
                        if(isTradeModalVisible) {
                            e.preventDefault();
                        }                        
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => 
                    !isTradeModalVisible &&
                        (<TabIcon focused={focused} icon={icons.profile} label="Profile"/>)
                }}
                listeners={{
                    tabPress: (e) => {
                        if(isTradeModalVisible) {
                            e.preventDefault();
                        }                        
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;