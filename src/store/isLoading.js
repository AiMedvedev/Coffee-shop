const isLoading = {
	state: {
		isLoading: false
	},
	getters: {
		getIsLoading(state) {
			return state.isLoading
		}
	},
	mutations: {
		setIsLoading(state, value) {
			state.isLoading = value
		}
	},
	actions: {
		setIsLoading({commit}, value) {
			commit('setIsLoading', value)
		}
	}
}

export default isLoading;