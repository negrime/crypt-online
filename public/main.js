var vm = new Vue({
    el: '#app',
    data: {
        alphabet: "абвгдежзийклмнопрстуфхцчшщъыьэюя",
        base: [],
        key: "",
        text: "вдээшйтг",
        answer: "",
        baseInput: "",
        textInput: ""
    },
    computed: {
      isShowBase: function () {
          return this.base.length > 0;
      }
    },
    created: function() {
       console.log("Created!");
       this.calcKeyIndex();
    },
    methods:  {
        removeBase: function(){
          this.base.pop();
        },
        kek: function(e){
           if (e.data === " "){
               this.base.push(this.baseInput.replace(" ", ""));
               this.baseInput = "";
               this.calcKeyIndex();
           }
        },
        decryption: function(text, key){
            console.log("nice");

            let result = "";
            let k=0;
            let x=0;
            let z=0;

            while(key.length < text.length) {
                key += key;
                if (key.length > text.length) {key = key.substr(0,text.length);}
            }

            for (let i = 0; i < text.length; i++){
                for (let id = 0; id < this.alphabet.length; id++){
                    if (key[i] == this.alphabet[id]) k = id;
                    if (text[i] == this.alphabet[id]) x = id;
                    let test = text[i].charCodeAt(0) - key[i].charCodeAt(0);
                    z = ((text[i].charCodeAt(0) - key[i].charCodeAt(0)) + this.alphabet.length) % this.alphabet.length;
                }
                result += this.alphabet[z];
            }
            console.log(result);
            this.answer = result;
        },
        calcKeyIndex: function () {
            this.key = "";
            this.base.forEach(el => {
                this.key +=  this.alphabet[el];
            })
            if (this.key.length < 1) return;
            this.decryption(this.text, this.key);
        }
    }
})



// res = string.Empty;
//
// while (key.Length < source.Length)
// {
//     key += key;
//     if (key.Length > source.Length) key = key.Remove(source.Length);
// }
// for (int i = 0; i < source.Length; i++)
// {
//     for (int id = 0; id < alf.Length; id++)
//     {
//         if (key[i] == alf[id]) k = id;
//         if (source[i] == alf[id]) x = id;
//         z = ((source[i] - key[i]) + alf.Length) % alf.Length;
//     }
//     res += alf[z];
// }
// return res;
