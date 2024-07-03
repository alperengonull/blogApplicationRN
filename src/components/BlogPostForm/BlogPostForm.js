import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({ onSubmit, initialValues, isEditable }) {

    const [title, setTitle] = useState(initialValues ? initialValues.title : '')
    const [content, setContent] = useState(initialValues ? initialValues.content : '')



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Başlığı giriniz: </Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input} />
            <Text style={styles.content}>İçeriği giriniz: </Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input} />

            <TouchableOpacity style={styles.button} onPress={() => onSubmit(title, content)}>

                {
                    isEditable ? <Text>Güncelle</Text> : <Text>Kaydet</Text>
                }
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 20,
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
    },
    button: {
        backgroundColor: 'cyan',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    }

})