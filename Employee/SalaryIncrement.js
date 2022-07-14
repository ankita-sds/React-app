
class salary {

    performance = 'good';

    constructor(name, age, qualification){
        this.name = name;
        this.age = age;
        this.qualification = qualification;
    }

    promoted(){
    if(performance){
        console.log(`${name} is promoted from ${qualification} to manager` );
    }
}
}
const salInc = new salary('Phil', 54, 'accountant');
console.log(salInc);

export default salInc;

