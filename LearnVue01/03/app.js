const app = new Vue({
    el: '#app',
    data: {
        books: [{
            name: 'Java编程思想',
            years: '2005-12-09',
            price: 108,
            count: 1
        }, {
            name: '.NET高级程序设计',
            years: '2015-02-09',
            price: 168,
            count: 1
        }, {
            name: 'Javascript权威指南',
            years: '2018-12-09',
            price: 98,
            count: 1
        }, {
            name: '红楼梦',
            years: '2025-12-09',
            price: 18,
            count: 1
        }, {
            name: '西游计',
            years: '2005-12-09',
            price: 38,
            count: 1
        }]
    },
    methods: {
        removeBook(index) {
            this.books.splice(index, 1);
        },
        subtraction(index) {
            this.books[index].count--;
        },
        additive(index) {
            this.books[index].count++;
        }
    },
    computed: {
        totalPrice() {
            let price = 0;
            for (let i = 0; i < this.books.length; i++) {
                price += this.books[i].price * this.books[i].count;
            }
            return price;
        }
    },
    filters: {
        priceFilter(price) {
            return '￥' + price + '.00';
        }
    }
});