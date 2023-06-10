<script>
import {defineComponent} from 'vue'

export default {
    data() {
        return {
            isModalOpen: false,
            selectedFile: null,
            files: [
                {
                    name: 'file1.doc',
                    info: 'Информация о документе 1',
                    size: '10 КБ',
                    date: '2023-06-01',
                    uploader: 'Пользователь 1'
                },
                {
                    name: 'file2.doc',
                    info: 'Информация о документе 2',
                    size: '15 КБ',
                    date: '2023-06-02',
                    uploader: 'Пользователь 2'
                },
                // Здесь можно добавить другие файлы из папки "docs"
            ]
        };
    },
    methods: {
        editFile(file) {
            // Логика для редактирования файла
            console.log('Редактирование файла:', file);
        },
        openModal(file) {
            this.selectedFile = file;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.selectedFile = null;
        },
        saveChanges() {
            // Логика сохранения изменений
        }
    }
};
import MenuEditTable from "./MenuEditTable.vue";
</script>

<template>
    <div class="mt-10 flex justify-center">
        <table class="w-full max-w-screen-lg">
            <thead>
            <tr class="pb-5 border-b" >
                <th class="py-4 text-left">Название</th>
                <th class="py-4 text-left">Информация о документе</th>
                <th class="py-4 text-left">Размер</th>
                <th class="py-4 text-left">Дата</th>
                <th class="py-4 text-left">Кто загрузил</th>
                <th class="py-4 text-left"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="file in files" :key="file.name" class="pb-5 border-t">
                <td class="py-4">{{ file.name }}</td>
                <td class="py-4 text-gray-500">{{ file.info }}</td>
                <td class="py-4 text-gray-500">{{ file.size }}</td>
                <td class="py-4 text-gray-500">{{ file.date }}</td>
                <td class="py-4 text-gray-500">{{ file.uploader }}</td>
                <td class="py-4 text-indigo-500 font-bold"><button @click="openModal(file)">Редактировать</button></td>
            </tr>
            </tbody>
        </table>
    </div>
    <modal v-if="isModalOpen" @close="closeModal">
        <h2>{{ selectedFile.name }}</h2>
        <p>{{ selectedFile.info }}</p>
        <button @click="closeModal">Сохранить изменения</button>
    </modal>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
* {
    font-family: 'Inter', sans-serif;
}
</style>
