// estrapolo dal framework il metodo per creare l'app VUE
const {createApp} = Vue;
//Creo l'istanza di un app Vue e la collego al mio tag contenitore in HTML
createApp({
    data() {
        return {
            myTitle: "Hello World!! Welcome to my website",  
        }
    },
}).mount('#container_title')
