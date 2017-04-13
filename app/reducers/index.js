import { combineReducers } from 'redux';
import * as types from '../actions';

import { assembly } from './assembly'
import { results } from './results'
import { images } from './images'
import { app } from './app'
import { parts } from './parts'


const rootReducer = combineReducers(Object.assign({}, {
	results,
	assembly,
	images,
	app,
	parts
}))

export default rootReducer;
