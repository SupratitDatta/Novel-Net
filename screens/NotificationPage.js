import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

const notificationsData = [
    { id: '1', message: 'New message from John' },
    { id: '2', message: 'Your book "The Metropolis" is ready to read!' },
    { id: '3', message: 'You have 5 new followers' },
];

const NotificationPage = () => {
    const renderItem = ({ item }) => (
        <View style={tw`bg-gray-800 p-3 rounded mb-4`}>
            <Text style={tw`text-white text-center`}>{item.message}</Text>
        </View>
    );

    return (
        <View style={tw`flex-1 bg-black p-4`}>
            <Text style={tw`text-white text-2xl mb-4 text-center`}>Notifications</Text>
            <FlatList
                data={notificationsData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default NotificationPage;