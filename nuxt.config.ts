// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ja'
            }
        }
    },
    runtimeConfig: {
        newt: {
            spaceUid: '',
            cdnApiToken: ''
        }
    },
    typescript: {
        typeCheck: true
    }
})
