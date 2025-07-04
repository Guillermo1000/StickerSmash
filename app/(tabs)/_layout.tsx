import { Tabs } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
                    backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#ffffff',
            tabBarStyle: {
                backgroundColor: '#25292e'
            }
        }}>
            <Tabs.Screen
                name='index'
                options = {{
                    title: 'Home',
                    tabBarIcon: ({color})=> <Ionicons name='home' size={35} color={color} />
            }} />

            <Tabs.Screen
                name='About'
                options = {{
                    title:'About',
                    tabBarIcon: ({color})=> <Ionicons name="accessibility" size={24} color={color} />
            }} />
        </Tabs>

    );
}
