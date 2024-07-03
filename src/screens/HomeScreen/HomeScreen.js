import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext,useEffect } from 'react'
import { Context } from '../../context/BlogContext'
import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen({ navigation }) {

    const { state, addBlogpost ,deleteBlogPost, getBlogPosts } = useContext(Context)



    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        });

        return() => {
            listener.remove();
        }
       
    }, [])
    

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
                            <View style={styles.row}>
                                <Text>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    }
})