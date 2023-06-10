<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import router from "../router/index.js";

export default {
    setup() {
        const data = reactive({
            password: '',
            confirmPassword: '',
            nickname: '',
            email: '',
        })

        const rules = {
            password: { required },
            confirmPassword: { required, sameAsPassword: sameAs(data.password) },
            nickname: { required },
            email: { required, email },
        }

        const v$ = useVuelidate(rules, data)

        const isFormValid = computed(() => {
            return Object.keys(v$?.value?.$invalid || {}).length === 0
        })

        const submitForm = () => {
            v$?.value?.$touch()

            if (isFormValid.value) {
                // Отправка данных формы
                console.log(data);
                router.push('/');
            }
        }

        return {
            data,
            v$,
            isFormValid,
            submitForm,
        }
    },
}
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="/src/assets/logoDocs.svg" alt="docs logo" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Добро пожаловать!</h2>
            <h2 class="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Создайте аккаунт</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm sm:h-auto">
            <form class="space-y-6" @submit.prevent="submitForm">
                <div>
                    <label for="nickname" class="block text-sm font-medium leading-6 text-gray-900">Имя профиля</label>
                    <div class="mt-2">
                        <input
                            v-model="data.nickname"
                            id="nickname"
                            name="nickname"
                            type="text"
                            autocomplete="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div v-if="v$?.nickname?.$dirty && v$?.nickname?.$error" class="error-message">Поле обязательно для заполнения</div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Адрес электронной почты</label>
                    <div class="mt-2">
                        <input
                            v-model="data.email"
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div v-if="v$?.email?.$dirty && v$?.email?.$error" class="error-message">
                        {{ v$?.email?.$params?.email?.message || 'Некорректный адрес электронной почты' }}
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                    </div>
                    <div class="mt-2">
                        <input
                            v-model="data.password"
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div v-if="v$?.password?.$dirty && v$?.password?.$error" class="error-message">Поле обязательно для заполнения</div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">Подтвердите пароль</label>
                    </div>
                    <div class="mt-2">
                        <input
                            v-model="data.confirmPassword"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div v-if="v$?.confirmPassword?.$dirty && v$?.confirmPassword?.$error" class="error-message">
                        {{ v$?.confirmPassword?.$params?.sameAsPassword?.message || 'Пароли не совпадают' }}
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        :disabled="!isFormValid"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Регистрация
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Уже зарегистрирован?
                {{ ' ' }}
                <router-link to="login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Авторизация</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}
</style>
