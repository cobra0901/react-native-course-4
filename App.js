import React from 'react';
import {View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Tab1Screen from './activities/ImageHouse/Tab1Screen';
import Tab2Screen from './activities/ImageHouse/Tab2Screen';
import Tab3Screen from './activities/ImageHouse/Tab3Screen';
import Tab4Screen from './activities/ImageHouse/Tab4Screen';
import Tab5Screen from './activities/ImageHouse/Tab5Screen';
import NavTabBar from './activities/ImageHouse/NavTabBar';

export default class App extends React.Component {

    render(){

        return(

            <View style={{flexDirection:"column", flex:1}}>
                <View style={{flex:1}}>
                    <Navigator/>
                </View>
            </View>
        );
    }
}

export const Navigator = TabNavigator(
    {
        Tab1: {screen: Tab1Screen},
        Tab2: {screen: Tab2Screen},
        Tab3: {screen: Tab3Screen},
        Tab4: {screen: Tab4Screen},
        Tab5: {screen: Tab5Screen},
    },
    {
        initialRouteName: 'Tab1',
        tabBarComponent: NavTabBar,
        tabBarPosition: 'top'
    }
);
