const Player = {
    template : `<div><div>{{striker.name}}*</div>
    <div>{{nonstriker.name}}</div>
    </div>`,
    data() {
        return {
            player1 : {name : 'Rohit'},
            player2 : {name : 'Virat'}
        }
    },
    props : {
        run : {type : Number, default : 0 }
    },
    computed : {
        striker()  {
            return this.run % 2 == 0 ? this.player1 : this.player2
        },
        nonstriker() {
            return this.run % 2 == 1 ? this.player1 : this.player2
        }
    }
}



const Run  = {
    template : `<button @click="$emit('run-changed',run)" >{{run}}</button>`,
    props : { run : Number }
}



new Vue({
    el :'#app',
    template : `<div>
                    <Player :run="score"/>
                    <div style="display: flex;">
                        <Run :run="3" @run-changed = 'runChanged'/>
                        <Run :run="4" @run-changed = 'runChanged'/>
                    </div>
                </div>`,
    components : {Run, Player},
    data : {
        score : 0
    },
    methods : {
        runChanged(run) {
            this.score = run
        }
    } 
})