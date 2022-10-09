class Cat{
    constructor (name,breed,age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        
    }
    hungry(timeForFood){
        console.log(`Meow`)

    }
    vaccination(timeToSeeVet){
        if (this.age > 3 )
        {
        console.log(`Your cat is ${this.age} months old, has he/she got their Rabies vaccination?`)
        }else
        {
            console.log(`no vaccination is recommeded for this age`)
        }
    }
    play(playTime){
        console.log(`${playTime.name} , Come here, Lets Play!`)
    }
}
const marshmallow = new Cat('marshmallow','ragDoll', 4)
const Oreo = new Cat('Oreo','Persian',1)
console.log(marshmallow)
marshmallow.hungry()
marshmallow.vaccination()
marshmallow.play(marshmallow)
Oreo.hungry()
Oreo.vaccination()
Oreo.play(marshmallow)
//====================================
class Pirate {
    constructor(name,gender,shipName){
        this.name = name
        this.gender = gender
        this.shipName= shipName
    }
    flagRaising(){
        return(`ready to attack? get ${this.shipName} ready and raise Jolly Roger flag`)
    }
    warning(){
        return(`I am pirate ${this.name} be careful`)
    }
    breakingRules(rules){
        this.rules = true
        return(`You broke ship rules and you should be punished`)
    }

    }

const jollyRoger = [new Pirate ('keith','47','jollyRoger'),new Pirate ('tommy','38',"tommy's ship"), new Pirate('yousef','27','yousskinko')]
const blackPearl = [new Pirate ('ali','38',"ali's ship"), new Pirate('annabell',45,'bella'), new Pirate('mark','59','blackJack')]
console.log(jollyRoger)
//jollyRoger[1].flagRaising()
for (let i=0 ; i<jollyRoger.length ; i++){
    console.log(jollyRoger[i].flagRaising(),jollyRoger[i].breakingRules(),jollyRoger[i].warning())

}
 for(let j=0 ; j<blackPearl.length; j++){
   console.log(blackPearl[j].flagRaising(),blackPearl[j].breakingRules(),blackPearl[j].warning())}
