const goods = {
    state: {
        goods: [
        {
            id: 0,
            image: "coffee-1.jpg",
            name: "Solimo Coffee Beans 2kg",
            price: 10.73,
        },
        {
            id: 1,
            image: "coffee-2.jpg",
            name: "Presto Coffee Beans 1kg",
            price: 15.99,
        },
        {
            id: 2,
            image: "coffee-3.jpg",
            name: "AROMISTICO Coffee 1kg",
            price: 6.99,
        },
        {
            id: 3,
            image: "coffee-1.jpg",
            name: "Solimo Coffee Beans 2kg",
            price: 10.73,
        },
        {
            id: 4,
            image: "coffee-2.jpg",
            name: "Presto Coffee Beans 1kg",
            price: 15.99,
        },
        {
            id: 5,
            image: "coffee-3.jpg",
            name: "AROMISTICO Coffee 1kg",
            price: 6.99,
        }
        ],
    },
    getters: {
        getGoods(state) {
            return state.goods;
        },
        getGoodsById(state) {
            return (id) => {
                return state.goods.find((card) => card.id === +id);
            }
        }
    }
}

export default goods;