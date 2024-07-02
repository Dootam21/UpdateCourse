import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Wrapper from '../components/Wrapper';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../reducers/authSlice';
import styles from './styles';


const HomeScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutSuccess());
    };

    return (
        <Wrapper>
            <TouchableOpacity onPress={() => handleLogout()} style={styles.btnLogin}>
                <LinearGradient
                    colors={['#FF5789', '#FF9B9C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={styles.txtLogin}>Log Out</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Wrapper>
    );
};

export default HomeScreen;
