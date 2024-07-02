// LanguageSwitcher.tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { resourcesList } from './resources';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';


const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(resourcesList[0]);
    const [isFocus, setIsFocus] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };


    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            selectedTextStyle={styles.selectedTextStyle}
            data={resourcesList}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={selectedLanguage}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setSelectedLanguage(item);
                setIsFocus(false);
                changeLanguage(item.value)
            }}
        />
    )
};

export default LanguageSwitcher;
