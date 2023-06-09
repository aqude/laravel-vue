<script>
import {defineComponent} from 'vue'

export default {
    data() {
        return {
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
        }
    }
};

</script>

<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Название</th>
                <th>Информация о документе</th>
                <th>Размер</th>
                <th>Дата</th>
                <th>Кто загрузил</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="file in files" :key="file.name">
                <td>{{ file.name }}</td>
                <td>{{ file.info }}</td>
                <td>{{ file.size }}</td>
                <td>{{ file.date }}</td>
                <td>{{ file.uploader }}</td>
                <td>
                    <button @click="editFile(file)">Редактировать</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>

</style>
