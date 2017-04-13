import * as constants from '../config/constants'
import _ from 'lodash'

export const app = (state = constants.APPSTATE, action)  => {
	const currentIndex  = state.currentIndex;
	let newResults = constants.APPSTATE.filterResults
	switch(action.type) {
		case constants.UPDATE_STEP:
			return Object.assign({}, state, { step: action.step })
		case constants.DECREMENT_STEP:
			return Object.assign({}, state, { step: state.step - 1 })
		case constants.INCREMENT_STEP:
			return Object.assign({}, state, { step: state.step + 1 })
		case constants.UPDATE_LAST_PAGE:
			return Object.assign({}, state, {lastPath: action.lastPath})
		case constants.RECIEVE_CATEGORIES:
			return Object.assign({}, state, {categories: action.categories, isFetching: false})
		case constants.INVALIDATE_CATEGORIES:
			return Object.assign({}, state, {categories: []})
		case constants.REQUEST_CATEGORIES:
			return Object.assign({}, state, {isFetching: true})

		case constants.START_NEW_FILTER:
			return Object.assign({}, state, constants.APPSTATE)

		case constants.PREVIOUS_FILTER_INDEX:
			newResults = state.filterResults;
			if (state.currentIndex > -1 && state.currentIndex < state.filterResults.length) {
				 newResults.splice(state.currentIndex, 1, [])
			}
			return Object.assign({}, state, {goingBack: action.back, currentIndex: action.idx, filterResults: newResults, isFetching: false})

		case constants.NEXT_FILTER_INDEX:
			return Object.assign({}, state)

		case constants.RECIEVE_FILTERS:
			newResults = [
				...state.filterResults.slice(0, action.idx),
				action.filters,
				...state.filterResults.slice(action.idx+1)
			]
			return Object.assign({}, state, {filterResults: newResults, isFetching: false, needsFetch: false})

		case constants.INVALIDATE_FILTERS:
			newResults = [
				...state.filterResults.slice(0, action.idx),
				[],
				...state.filterResults.slice(action.idx+1)
			]
			return Object.assign({}, state, {filterResults: newResults, isFetching: false})


		case constants.RECEIVE_ASSEMBLIES:
			return Object.assign({}, state, {currentIndex: constants.APPSTATE.filterResults.length})

		case constants.REQUEST_FILTERS:
			return Object.assign({}, state, {isFetching: true, needsFetch: false})

		case constants.UPDATE_FILTER_VALUE:
			const idx = action.idx;
			const newIndex = (constants.STEP_NAVIGATION.length > idx + 1) ? idx + 1 : idx;
			const newFilterState = Object.assign({}, state.filterState, action.filterState);

			var choice = {};
			if (state.filterResults.length) {
				choice = _.find(state.filterResults, {Id: action.value})
			}
			return Object.assign(
					{},
					state,
					{
						goingBack: false,
						isFetching: true,
						needsFetch: true,
						currentIndex: newIndex,
						filterState: newFilterState,
						lastChoice: choice
					})
		default:
			return state;
	}
}
