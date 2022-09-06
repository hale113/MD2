class QuadraticEquation{
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getterA(){
        return a;
    }
    getterB(){
        return b;
    }
    getterC(){
        return c;
    }

    getDiscriminant(){
        let delta = this.b*this.b-4*this.a*this.c;
        return delta
    }
    getRoot(){
        if (this.getDiscriminant() < 0){
            console.log("ptvn")
        }
        if(this.getDiscriminant()== 0){
            console.log("pt có nghiệm kép" + -this.b/(2*this.a))
        }
        if (this.getDiscriminant()>0){
            console.log("pt có 2 nghiệm" + "x1 = "+(-this.b+Math.pow(this.getDiscriminant(),0.5))/(2*this.a) + "x2 = "+ (-this.b-Math.pow(this.getDiscriminant(),0.5))/(2*this.a) )
        }

    }
}

let a = new QuadraticEquation(7,4444,5);
console.log(a.getRoot())