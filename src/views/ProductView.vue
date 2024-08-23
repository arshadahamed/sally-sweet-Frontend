<template>
    <div class="flex flex-col items-center justify-center">
         <h1 class="mb-10 my-5 text-3xl font-bold text-sw-navy justify-center">Explore Our Delightful Collection at Sally Sweet</h1>
        <p class="text-xl text-gray-600 mb-5">Discover your favorite sweets and treats in our curated selection</p>
      <select v-model="targetCurrency" @change="fetchConversionRate" 
            class="block appearance-none w-55 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="GBP">British Pound (GBP)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="LKR">Sri Lankan Rupee (LKR)</option>
        </select>

    </div>
    
    <div class="productcard py-10">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :description="product.description"
            :price="`${getCurrencySymbol()} ${convertCurrency(product.price)}`"
            :imageUrl="product.imageUrl"
            class="productcard-item"
        />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';

export default {
    components: {
        ProductCard
    },
    data() {
        return {
            products: [],
            conversionRate: 1,
            targetCurrency: 'GBP', 
            currencySymbols: {
                'EUR': '€',
                'USD': '$',
                'LKR': '₨',
                'GBP': '£' 
            },
        };
    },
    methods: {
        fetchConversionRate() {
            const apiKey = '9a9eba155834bbe079700f24';
            axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/GBP`) 
                .then(response => {
                    this.conversionRate = response.data.conversion_rates[this.targetCurrency];
                })
                .catch(error => {
                    console.error('Currency API error:', error);
                });
        },
        convertCurrency(price) {
            return (price * this.conversionRate).toFixed(2);
        },
        getCurrencySymbol() {
            return this.currencySymbols[this.targetCurrency];
        },
    },
    created() {
        this.fetchConversionRate();
        axios.get('http://localhost:3000/products')
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
};
</script>

<style>
.productcard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.productcard-item {
    flex: 0 10 2000px;
    margin: 10px;
}
</style>
