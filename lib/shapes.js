//should uses classes not functions to create all of this stuff so change tommorrow

class shape{
    constructor(textcolor, backgroundColor, size){
        //THIS IS THE PARENT CLASS AND IF ANY OF THE OTHER CLASSES USE ANYTHING SIMILAR TO THIS USE INHERITANCE IN IT
    }
}
class triangle{
    constructor(textcolor, backgroundColor, size){
        this.textcolor = textcolor;
        //add more stuff
    }
}
class circle{
    constructor(textcolor, backgroundColor, size){
        this.textcolor = textcolor;
        //add more stuff
    }
}
class square{
    constructor(textcolor, backgroundColor, size){
        this.textcolor = textcolor;
        //add more stuff
    }
}

function shapes() {
   return console.log('we got this far!')
}

module.exports = shapes;