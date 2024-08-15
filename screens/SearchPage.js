import React from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import tw from 'twrnc';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const booksData = [
        { id: '1', name: 'Other Words For Home' },
        { id: '2', name: 'The Metropolis' },
        { id: '3', name: 'The Tiny Dragon' },
    ];

    const filteredBooks = booksData.filter(book =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={tw`bg-gray-800 p-3 rounded mb-2`}>
            <Text style={tw`text-white`}>{item.name}</Text>
        </View>
    );

    return (
        <View style={tw`flex-1 bg-black p-4`}>
            <TextInput
                style={tw`bg-gray-300 p-3 rounded text-white mb-6`}
                placeholder="Search for books..."
                placeholderTextColor="black"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <FlatList
                data={filteredBooks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default SearchPage;