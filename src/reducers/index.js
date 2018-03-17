import { combineReducers } from 'redux'
import products from './products'
import { reducer as formReducer } from 'redux-form'
import login from './login'
import cart from './cart'

export default combineReducers({
	products,
	form: formReducer,
	login,
	cart
})
