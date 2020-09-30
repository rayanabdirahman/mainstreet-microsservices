import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View as DefaultView } from 'react-native'
import { RootScreenName, RootStackParamList } from '../../navigation/types'
import { Layout, Text, Button, Link, Input, ProfileHeader, ImageGrid } from '../../components'

const images = [
  {
    _id: '001',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '002',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '003',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '004',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '005',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '006',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '007',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '008',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
  {
    _id: '008',
    image: "https://dummyimage.com/150x150/c4c4c4/c4c4c4"
  },
]

const SearchResult = ({ navigation }: StackScreenProps<RootStackParamList, RootScreenName.SEARCH_RESULT>) => (
  <Layout>
    <Input style={{ marginBottom: 24 }} placeholder="airmax" />
    <ImageGrid images={images} />
  </Layout>
)

export { SearchResult }