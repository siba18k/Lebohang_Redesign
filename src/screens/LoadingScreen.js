import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Animated, Text } from 'react-native';

const LoadingScreen = () => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [scaleAnim] = useState(new Animated.Value(0.8));

    useEffect(() => {
        // Fade in and scale animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.imageContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                {/* Main App Icon - replace with your actual icon file name */}
                <Image
                    source={require('../../assets/icon.png')}
                    style={styles.mainIcon}
                    resizeMode="contain"
                />

                {/* App Name/Title - Optional */}
                <Text style={styles.appName}>Adbeam Recycling</Text>
            </Animated.View>

            {/* Loading Indicator */}
            <ActivityIndicator
                size="large"
                color="#059669"
                style={styles.loader}
            />

            {/* Optional: Show additional icons in a row */}
            {/* <View style={styles.iconRow}>
                <Image
                    source={require('../../assets/adaptive-icon.png')}
                    style={styles.smallIcon}
                    resizeMode="contain"
                />
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.smallIcon}
                    resizeMode="contain"
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    mainIcon: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    appName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#059669',
        marginTop: 10,
    },
    loader: {
        marginTop: 20,
    },
    iconRow: {
        flexDirection: 'row',
        marginTop: 30,
        gap: 20,
    },
    smallIcon: {
        width: 60,
        height: 60,
    },
});

export default LoadingScreen;