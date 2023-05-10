
const {createApp} = Vue

createApp({
    data() {
      return {
        classe:"",
        nuovoDato:{
                text: "",
                done:false,
            },
        card:[
           {
            text: "spesa",
            done: false,
           },
           {
            text: "lavatrice",
            done: true,
           },
           {
            text: "meccanico",
            done: false,
           },
        ],
        }
    },

    methods: {
        add() {
            let toAdd = { ...this.nuovoDato }
            this.card.push(toAdd)
            this.nuovoDato.text=""
            
        },
       remuve(indice){
             this.card.splice(indice, 1)
            
        },
        change(indice){
            this.card[indice].done = !this.card[indice].done 
        },
        addClass(datoCorrente){
            classe = "linea";
            if(datoCorrente.done == true){
                return classe;
            }
        },
    }
    
}).mount('#app')

