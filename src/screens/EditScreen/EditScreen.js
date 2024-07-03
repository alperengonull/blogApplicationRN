import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/BlogContext'
import BlogPostForm from '../../components/BlogPostForm/BlogPostForm'

export default function EditScreen({route,navigation}) {

    const { state, updateBlogpost } = useContext(Context)

    const id = route.params.id

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

  return (
   <BlogPostForm 
   isEditable={true}
   initialValues={{title:blogPost.title, content:blogPost.content}}
   onSubmit={(title, content) => {
    updateBlogpost(id , title, content, () => {
        navigation.navigate('Home')
    }) 
}}
   />
  )
}

const styles = StyleSheet.create({})