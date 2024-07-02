import React, { memo } from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './styles';
import LanguageSwitcher from '../../SettingMultipleLanguage/LanguageSwitcher';

interface HeaderProps {
    // Define any props here if needed
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.thumbnail}
                        source={require('../../../asset/image/Logo.png') as ImageSourcePropType}
                    />
                    <View style={styles.titleContainer}>
                        <Text style={styles.headTitle}>UpNow</Text>
                        <Text style={styles.secondText}>Digital Hypnotherapy</Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    <LanguageSwitcher></LanguageSwitcher>
                </View>
            </View>
            <View>
                <View style={styles.line1}></View>
                <View style={styles.line2}></View>
            </View>
        </View>
    );
};

export default memo(Header);
