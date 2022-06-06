export const nameIdGetter = {
    getters: {
        getGoods(state) {
            return state[this.name];
        },
        getGoodsById(state) {
            return (id) => {
                return state[this.name].find((card) => card.id === +id);
            }
        }
    }
}