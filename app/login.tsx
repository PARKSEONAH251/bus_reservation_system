import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './login.styles';

export default function Login() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('로그인 시도:', studentId, password);
        // TODO: 백엔드 연동
    };

    return (
        <ImageBackground
            source={require('../assets/images/imagebackground.png')}
            style={styles.Imagebackground}
            resizeMode="cover">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <View style={styles.header}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title} numberOfLines={2}>
                        백석대학교 통학 시스템 로그인
                    </Text>
                </View>
                <TextInput
                    style={styles.inputId}
                    placeholder="학번"
                    placeholderTextColor="#999"
                    value={studentId}
                    onChangeText={setStudentId}
                />
                <TextInput
                    style={styles.inputPassword}
                    placeholder="비밀번호"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ImageBackground>

    );
}
