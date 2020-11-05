import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../components/Theme'
import { RootStackParamList, RootScreenName } from './types'
import { AddAddress, AddProduct, Addresses, Cart, Checkout, Feed, Product, Profile, Reviews, Search, SearchResult, Settings, Store } from '../screens'

// set stack navigator options
const options = {
  title: '',
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colour.black,
  headerStyle: { shadowOpacity: 0 },
}

// Navigation for child screens
const ProductStack = createStackNavigator<RootStackParamList>()
export function ProductNavigator () {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name={RootScreenName.PRODUCT} component={Product}/>
      <ProductStack.Screen name={RootScreenName.REVIEWS} component={Reviews}/>
    </ProductStack.Navigator>
  )
}

const AddressStack = createStackNavigator<RootStackParamList>()
export function AddressNavigator () {
  return (
    <AddressStack.Navigator>
      <AddressStack.Screen name={RootScreenName.ADDRESSES} component={Addresses}/>
      <AddressStack.Screen name={RootScreenName.ADD_ADDRESS} component={AddAddress}/>
    </AddressStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<RootStackParamList>()
export function SettingsNavigator () {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={RootScreenName.SETTINGS} component={Settings}/>
      <SettingsStack.Screen name={RootScreenName.ADDRESSES} component={AddressNavigator}/>
    </SettingsStack.Navigator>
  )
}

// Navigation for top level screens
const FeedStack = createStackNavigator<RootStackParamList>()
export function FeedNavigator () {
  return (
    <FeedStack.Navigator screenOptions={options}>
      <FeedStack.Screen name={RootScreenName.FEED} component={Feed}/>
    </FeedStack.Navigator>
  )
}

const AddProductStack = createStackNavigator<RootStackParamList>()
export function AddProductNavigator () {
  return (
    <AddProductStack.Navigator screenOptions={options}>
      <AddProductStack.Screen name={RootScreenName.ADD_PRODUCT} component={AddProduct}/>
    </AddProductStack.Navigator>
  )
}

const SearchStack = createStackNavigator<RootStackParamList>()
export function SearchNavigator () {
  return (
    <SearchStack.Navigator screenOptions={options}>
      <SearchStack.Screen name={RootScreenName.SEARCH} component={Search}/>
      <SearchStack.Screen name={RootScreenName.SEARCH_RESULT} component={SearchResult}/>
      <SearchStack.Screen name={RootScreenName.STORE} component={Store}/>
      <SearchStack.Screen name={RootScreenName.PRODUCT} component={ProductNavigator}/>
    </SearchStack.Navigator>
  )
}

const CartStack = createStackNavigator<RootStackParamList>()
export function CartNavigator () {
  return (
    <CartStack.Navigator screenOptions={options}>
      <CartStack.Screen name={RootScreenName.CART} component={Cart}/>
      <CartStack.Screen name={RootScreenName.CHECKOUT} component={Checkout}/>
      <CartStack.Screen name={RootScreenName.ADDRESSES} component={AddressNavigator}/>
    </CartStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<RootStackParamList>()
export function ProfileNavigator () {
  return (
    <ProfileStack.Navigator screenOptions={options}>
      <ProfileStack.Screen name={RootScreenName.PROFILE} component={Profile} options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate(RootScreenName.SETTINGS)}>
            <AntDesign name="setting" size={24} color={theme.colour.black} />
          </TouchableOpacity>
        )
      })}/>
      <ProfileStack.Screen name={RootScreenName.PRODUCT} component={ProductNavigator}/>
      <ProfileStack.Screen name={RootScreenName.SETTINGS} component={SettingsNavigator}/>
    </ProfileStack.Navigator>
  )
}
