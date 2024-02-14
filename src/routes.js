
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator(); //Inicializando

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{          //Usei para tirar o nome de Home da parte de cima da tela, or isso colocado como falso
                    tabBarShowLabel: false, //Para não mostrar o nome da tela abaixo do icone
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {  //Se tiver com foco na tela
                            return <Ionicons size={size} color={color} name='home' />
                        }
                        //Caso nao esteja com foco na tela
                        return <Ionicons size={size} color={color} name='home-outline' />
                    }
                }}
            />

            <Tab.Screen
                name='passwords'
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {  //se tiver com foco
                            return <Ionicons size={size} color={color} name='lock-closed' />
                        }

                        return <Ionicons size={size} color={color} name='lock-closed-outline' />
                    }
                }}
            />
        </Tab.Navigator>
    )
}