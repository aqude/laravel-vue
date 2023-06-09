<script>
import {defineComponent} from 'vue'

export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        openModal() {
            this.$emit('update:isOpen', true);
        },
        closeModal() {
            this.$emit('update:isOpen', false);
        },
    },
};
</script>

<template>
    <div>
        <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="bg-white rounded p-8">
                <h2 class="text-2xl font-bold mb-4">Модальное окно</h2>
                <p>Привет, я модальное окно!</p>
                <button @click="closeModal" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Закрыть
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
