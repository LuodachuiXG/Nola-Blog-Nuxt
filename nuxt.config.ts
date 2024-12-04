// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@primevue/nuxt-module', '@pinia/nuxt'],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    runtimeConfig: {
        public: {
            serverUrlProd: 'https://loac.cc',
            serverUrlDev: 'https://loac.cc'
        }
    }
})