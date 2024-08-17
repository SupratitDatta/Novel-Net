import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const SettingsPage: React.FC = () => {
    return (
        <View style={tw`flex-1 bg-black p-4 text-center`}>
            <Text style={tw`text-white text-2xl mb-4 text-center`}>Settings</Text>
            <TouchableOpacity style={tw`bg-gray-800 p-3 rounded mb-2`}>
                <Text style={tw`text-white text-center`}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-800 p-3 rounded mb-2`}>
                <Text style={tw`text-white text-center`}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-800 p-3 rounded mb-2`}>
                <Text style={tw`text-white text-center`}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-800 p-3 rounded mb-2`}>
                <Text style={tw`text-white text-center`}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-red-600 p-3 rounded mb-2`}>
                <Text style={tw`text-white text-center`}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsPage;