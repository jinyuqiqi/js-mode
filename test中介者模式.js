const Player = function(name) {
    this.name = name;
    playerMiddle.add(name)
}

Player.prototype.win = function() {
    playerMiddle.win(this.name)
}

Player.prototype.lose = function() {
    playerMiddle.lose(this.name)
}

const playerMiddle = (function() {
    const players = [];
    const winners = [];
    const losers = [];

    return {
        add(name) {
            players.push(name)
        },

        win(name) {
            if (!winners.includes(name)) winners.push(name)

            if (players.length === winners.length + losers.length) {
                this.show()
            }

            console.log(players)
            console.log(losers)
            console.log(winners)
        },

        lose(name) {
            if (!losers.includes(name)) losers.push(name)

            if (players.length === winners.length + losers.length) {
                this.show()
            }
            console.log(players)
            console.log(losers)
            console.log(winners)
        },

        show() {
            winners.forEach(name => {
                console.log(`${name} 选手胜出！`)
            })
            losers.forEach(name => {
                console.log(`继续加油哦 ${name}！`)
            })
        }
    }
})()

const jin = new Player("jin");
const a = new Player("a");
const b = new Player("b");
const c = new Player("c");
const d = new Player("d");

jin.win()
a.lose()
b.lose()
c.lose()
d.lose()