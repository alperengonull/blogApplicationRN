import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../../context/BlogContext'

export default function ShowScreen({ route }) {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Başlık</Text>
                <Text style={styles.headerTitle}>{blogPost.title}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>İçerik</Text>
                <Text style={styles.contentBody}>{blogPost.content}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9', // Arka plan rengini güncelle
    },
    header: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#ffffff', // Başlık arka planını beyaz yap
        borderRadius: 10, // Kenarları yuvarlaklaştır
        shadowColor: '#000', // Gölge ekle
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerTitle: {
        fontSize: 20,
        color: '#666',
        marginTop: 5,
    },
    content: {
        padding: 10,
        backgroundColor: '#ffffff', // İçerik arka planını beyaz yap
        borderRadius: 10, // Kenarları yuvarlaklaştır
        shadowColor: '#000', // Gölge ekle
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    contentBody: {
        fontSize: 20,
        color: '#666',
        marginTop: 5,
        textAlign: 'justify', // İçeriği iki yana yasla
    }
    

})