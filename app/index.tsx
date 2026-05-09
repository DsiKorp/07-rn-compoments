import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Text, View } from 'react-native';

//import 'react-native-reanimated';
import { useThemeColor } from '@/hooks/use-theme-color';
import '../global.css';

const ComponentApp = () => {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');

    return (
        <GestureHandlerRootView
            style={{ backgroundColor: backgroundColor, flex: 1 }}
        >
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <View className="flex-1 items-center justify-center bg-white dark:bg-black">
                    <Text className="mt-10 text-3xl text-light-primary dark:text-dark-primary">
                        Welcome to Nativewind!
                    </Text>
                </View>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default ComponentApp;
