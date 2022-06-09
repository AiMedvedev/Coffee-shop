const coffee = {
    state: {
        coffee: [],
        searchValue: '',
        sortValue: ''
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
        setSortValue(state, value) {
            state.sortValue = value
        },
    },
    actions: {
        setCoffeeData({
            commit
        }, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({
            commit
        }, value) {
            commit('setSearchValue', value)
        },
        setSortValue({
            commit
        }, value) {
            commit('setSortValue', value)
        },
    },
    getters: {
        getCoffee(state) {
            return state.coffee/* .filter(item => 
                item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
                .filter(item => 
                    item.country.toLowerCase().includes(state.sortValue.toLowerCase()));  Фильтрация уже в полученном массиве  */
        },
        getCoffeeById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id);
            }
        },
        getSearchValue(state) {
            return state.searchValue;
        },
    }
}

export default coffee;