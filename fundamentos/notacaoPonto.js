console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj = new Obj('marca')

console.log(obj2.nome)
console.log(obj3.nome)
obj.exec()

class Coisa {
    constructor(nome) { 
        this.nome = nome
    }

    exec() {
        console.log('Execultando..');
        console.log('Meu nome é', this.nome);
    }
}

const coisa1 = new Coisa('Celular');

coisa1.exec();

coisa1.nome = 'Teclado';

coisa1.exec();

coisa1.nome = 'carta';

coisa1.exec();