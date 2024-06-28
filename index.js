// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterDisplay = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const showNextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <View style={styles.letterContainer}>
            <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
            <TouchableOpacity onPress={showNextLetter} style={styles.button}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Learn to Read!</Text>
            <LetterDisplay />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    letterContainer: {
        alignItems: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});