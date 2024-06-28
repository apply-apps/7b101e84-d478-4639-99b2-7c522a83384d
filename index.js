// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const workouts = [
    { id: '1', name: 'Push-ups', description: 'Do 3 sets of 15 repetitions' },
    { id: '2', name: 'Squats', description: 'Do 4 sets of 20 repetitions' },
    { id: '3', name: 'Plank', description: 'Hold for 1 minute' },
    { id: '4', name: 'Burpees', description: 'Do 3 sets of 10 repetitions' },
    { id: '5', name: 'Lunges', description: 'Do 3 sets of 20 repetitions (10 each leg)' },
];

const WorkoutList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity onPress={() => alert("Workout Completed: " + item.name)} style={styles.button}>
                <Text style={styles.buttonText}>Mark as Done</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Workout Tracker</Text>
            <WorkoutList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    list: {
        paddingHorizontal: 16,
    },
    itemContainer: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 3,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDescription: {
        marginVertical: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});