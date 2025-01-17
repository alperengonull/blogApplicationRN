import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlogPostForm from '../../components/BlogPostForm/BlogPostForm'
import { useContext } from 'react'
import { Context } from '../../context/BlogContext'


export default function CreateScreen({navigation}) {
    const { addBlogPost } = useContext(Context)
    return (
        <BlogPostForm
            isEditable={false}
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Home')
                }) 
            }} />
    )
}

const styles = StyleSheet.create({})