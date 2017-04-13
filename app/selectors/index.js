import React from 'react-native'
import {fetchCategories} from '../actions/categories'
import { 	fetchFilters,
					setActiveFilterValue,
					checkFilterStatus,
					previousFilter } from '../actions/filters'
import { fetchAssembly, fetchAssemblyDetails } from '../actions/assembly'
import { fetchParts } from '../actions/parts'
import { fetchImages } from '../actions/images'
import { updateFilters,
				fetchHubs,
				updateStep,
			 	incrementStep,
				decrementStep} from '../actions'


export const mapStateToProps = (state) => {
  return {
		app: state.app,
		images: state.images,
	  assembly: state.assembly,
		results: state.results,
		parts: state.parts
  }
}

export const mapDispatchToProps = (dispatch, state) => {
  return {
		setFilter: (filterId, id, app) => {
			dispatch(setActiveFilterValue(filterId, id, app))

		},
		fetchFilter: (idx, app) => {
			dispatch(fetchFilters(idx, app))
		},
		goBack: (app) => {
			dispatch(previousFilter(app))
		},
		searchForAssembly: (partNumber) => {
			if (partNumber) {
				dispatch(fetchHubs(partNumber))
			} else {
				dispatch(fetchAssembly(hub))
			}
		},
		getResults: (app) => {
			dispatch(fetchAssembly(app))
		},
		getImages: (resultImages, imagesStore) => {
			dispatch(fetchImages(resultImages, imagesStore))
		},
		fetchAssemblyDetails: (assemblyId, images) => {
			dispatch(fetchAssemblyDetails(assemblyId, images))
		},
		fetchHubs: (assemblyId) => {
			dispatch(fetchHubs(assemblyId))
		},
		searchParts: (assemblyId) => {
			dispatch(fetchParts(assemblyId))
		},
		fetchCategories: () => {
			dispatch(fetchCategories())
		}


  }
}
