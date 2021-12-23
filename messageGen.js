// Mixed Message Creator.
const MixedMessages = {
    _a: ['I love Red Hot Chilli Pepper', 'I love Rage Against The Machine', 'I love Metallica', 'I love Ozzy Osbourne', 'I love Led Zepellin'],
    _b: ['I hate music', 'Music is to loud for me', 'I love silence', 'I do not want to hear drum sound'],
    _c: ['Follow me to museum', 'Love to stroll inside of history', 'I am curious about the story of man slaughter', 'Why dinosaur are eztinct?'],
    _d: ['Museum are boring', 'We couod do better than museum', 'let just drink alcohol and get drunk', 'Netflix and chill?'],
    _qouotes(obj){
        switch(obj){
            case 0:
                this._quote(this._a[Math.floor(Math.random() * this._a.length)] + ' - Rio');
            break;
            case 1:
                this._quote(this._b[Math.floor(Math.random() * this._b.length)] + ' - Reza');
            break;
            case 2: 
                this._quote(this._c[Math.floor(Math.random() * this._c.length)] + ' - Muli');
            break;
            case 3:
                this._quote(this._d[Math.floor(Math.random() * this._d.length)] + ' - Tim');
            break;
        }
    },
    _quote(obj){
        console.log(obj)
    },
    message(){
        this._qouotes(Math.floor(Math.random() * 3));
    }
}

MixedMessages.message();