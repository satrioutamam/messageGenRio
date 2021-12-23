const MessageMaker = {
    _a: ['fuck me please', 'fuck yourself', 'no please fuck me!', 'just one quick fuck'],
    _b: ['get out my way', 'please go', 'move out the way please', 'get lost!'],
    _c: ['I am hungry', 'starrrvingggg', 'i have not eat yet', 'i am craving for food'],
    _d: ['i need workout', 'my body feels light', 'i choose lift', 'i can lift more'],
    _persons(obj){
        switch(obj){
            case 0:
                this._person(this._a[Math.floor(Math.random() * this._a.length)] + ' - Rio');
            break;
            case 1:
                this._person(this._b[Math.floor(Math.random() * this._b.length)] + ' - Reza');
            break;
            case 2: 
                this._person(this._c[Math.floor(Math.random() * this._c.length)] + ' - Muli');
            break;
            case 3:
                this._person(this._d[Math.floor(Math.random() * this._d.length)] + ' - Tim');
            break;
        }
    },
    _person(obj) {
        console.log(obj);
    },
    message(){
        this._persons(Math.floor(Math.random() * 3))
    }
}

MessageMaker.message();

