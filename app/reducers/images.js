import {
	RECIEVE_IMAGES,
	REQUEST_IMAGES,
	INVALIDATE_IMAGES,
	INCACHE_IMAGE
} from '../config/constants'
import _ from 'lodash'

const defaultState = {
	cache: [],
	selected: [],
	isFetching: false,
	needsFetch: false
}

export const images = (state = defaultState, action) => {
	switch(action.type) {
		case RECIEVE_IMAGES:
			let newImages = []
			_.every(action.images, function(image){
				let cacheCheck = _.find(state.cache, image)
				if (_.isUndefined(cacheCheck)) {
					newImages.push(image)
				}
			})
			const newCache = [...state.cache, ...newImages]
			return Object.assign({}, state, {cache: newCache, selected: action.images, isFetching: false})
		case REQUEST_IMAGES:
			return Object.assign({}, state, {isFetching: true, selected:[]})
		case INVALIDATE_IMAGES:
			return Object.assign({}, state, {isFetching: false, needsFetch: true, selected: []})
		case INCACHE_IMAGE:
			return Object.assign({}, state, {selected: action.images})
		default:
			return state
	}
}
