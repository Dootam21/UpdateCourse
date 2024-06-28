import React, { ReactNode, memo } from 'react';
import { SafeAreaView, ImageBackground, View, ScrollView } from 'react-native';
import styles from './styles';
import Header from './Header';

interface Props {
    children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../asset/images/Login_dark.png')}
                style={styles.background}
            >
                <Header />
                <View style={styles.wrap}>{children}</View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default memo(Wrapper);
