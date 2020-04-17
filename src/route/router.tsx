import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
    InitialState,
    useLinking,
    NavigationContainerRef,
    NavigationContainer,
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native';
import {
    createStackNavigator,
    HeaderStyleInterpolators
} from '@react-navigation/stack';

import routes from './config';

type RootDrawerParamList = {
    [key: string]: any;
};

const Stack = createStackNavigator<RootDrawerParamList>();

const HeaderNull = function(): React.ReactNode {
    return null;
};

const MyApp = function() {
    const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

    const containerRef = React.useRef<NavigationContainerRef>(null);
    const [initialState, setInitialState] = React.useState<
        InitialState | undefined
    >();
    const [theme, setTheme] = React.useState(DefaultTheme);

    return <NavigationContainer
        ref={containerRef}
        initialState={initialState}
        onStateChange={async (state) => {
            try {
                await AsyncStorage.setItem(
                    NAVIGATION_PERSISTENCE_KEY,
                    JSON.stringify(state)
                );
            } catch (e) {
                console.log(e);
            }
        }}
        theme={theme}
    >
        <Stack.Navigator
            /* screenOptions={{
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit
            }} */
        >
            {(Object.keys(routes) as (keyof typeof routes)[]).map(
                (name) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={routes[name].screen}
                        options={{
                            header: props => HeaderNull()
                        }}
                    />
                )
            )}
        </Stack.Navigator>
    </NavigationContainer>;
};

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(MyApp);