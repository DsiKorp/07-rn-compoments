import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
//import 'react-native-reanimated';
import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedView from '@/presentation/shared/ThemedView';

import ThemedText from '@/presentation/shared/ThemedText';
import '../global.css';

const ComponentApp = () => {
    const colorScheme = useColorScheme();
    //const backgroundColor = useThemeColor({ light: 'red', dark: 'blue' }, 'background');
    const backgroundColor = useThemeColor({}, 'background');


    return (
        <GestureHandlerRootView
            style={{ backgroundColor: backgroundColor, flex: 1 }}
        >
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <ThemedView margin>
                    <ThemedText type='h1' className='mt-20'>
                        Welcome to Nativewind!
                    </ThemedText>
                </ThemedView>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default ComponentApp;
