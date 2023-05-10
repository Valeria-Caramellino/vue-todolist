console.log("ciao")

const {createApp} = Vue

createApp({
    data() {
      return {
        testo:"",
        classe:"",
        testoCorrente: 0,
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
            done: false,
           },
           {
            text: "meccanico",
            done: false,
           },
        ],
        }
    },

    methods: {
        controllo(){
            console.log(this.card)
        },
       
        add() {
            let toAdd = { ...this.nuovoDato }
            this.card.push(toAdd)
            
        },
       remuve(indice){
             this.card.splice(indice, 1)
            
        },
    }
    
}).mount('#app')

