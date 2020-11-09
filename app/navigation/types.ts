import { UserRolesEnum } from "../domain/enums"

export type AuthStackParamList = {
  Landing: undefined
  SignIn: undefined
  SignUp: undefined | { userRole?: UserRolesEnum }
}

export enum AuthScreenName {
  LANDING = 'Landing',
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export type RootStackParamList = {
  Root: undefined
  Feed: undefined
  Search: undefined
  SearchResult: undefined
  Cart: undefined
  Checkout: undefined
  Profile: undefined
  Store: undefined
  Product: undefined
  Reviews: undefined
  Settings: undefined
  Addresses: undefined
  AddAddress: undefined
  AddProduct: undefined
  ModalPlaceholder: undefined
}

export enum RootScreenName {
  ROOT = 'Root',
  FEED = 'Feed',
  SEARCH = 'Search',
  SEARCH_RESULT = 'SearchResult',
  CART = 'Cart',
  CHECKOUT = 'Checkout',
  PROFILE = 'Profile',
  STORE = 'Store',
  PRODUCT = 'Product',
  REVIEWS = 'Reviews',
  SETTINGS = 'Settings',
  ADDRESSES = 'Addresses',
  ADD_ADDRESS = 'AddAddress',
  ADD_PRODUCT = 'AddProduct',
  MODAL_PLACEHOLDER = 'ModalPlaceholder',
}