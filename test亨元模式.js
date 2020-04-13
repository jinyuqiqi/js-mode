const ModelA = function(gender, underwear) {
    this.gender = gender;
    this.underwear = underwear;
}

ModelA.prototype.takephoto = function() {
    console.log(`${this.gender}穿了${this.underwear}`)
}

for (let i = 0; i < 5; i++) {
    const model = new ModelA(`male`, `第${i}件衣服`)
    model.takephoto()
}