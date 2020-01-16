// Hash Table is also called hashmap, map (java), dictionary (python), object (javascript)
// Hash Table = [key, value] pair
// key = index to find the value in memory
// hash function = produces hash out of key that is mapped to address in memory
// let's implement hash table

// [DONE] This implementation stores the same keys only once. 
// It stores same keys only once and update the value if the same key is provided again
class MyHashTable{
    constructor(size){
        this.data = new Array(size)
    }

    // method to produce hash value
    _hash(key){
        let hash = 1
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    // modifying put() to handle duplicate keys
    // in case of duplicate key, it should update the value
    put(key, val){
        let address = this._hash(key)
        if(!this.data[address]) {
            this.data[address] = []   
            this.data[address].push([key,val])        
        }else{
            // check for duplicate key in the bucket
            // if yes, update the value
            for(let i =0 ; i<this.data[address].length;i++){
                if(this.data[address][i][0]===key){
                    this.data[address][i][1]=val
                    return
                }
            }
            // if no duplicate, push new entry
        this.data[address].push([key,val])
        }
        
    }

    get(key){
        let bucket = this.data[this._hash(key)]
        if(bucket){
            for(let i =0;i<bucket.length;i++){
                if(bucket[i][0]===key) return bucket[i][1]
            }
        }
        return undefined
    }

    getKeys(){
        let keys = []
        for(let i = 0; i<this.data.length;i++){           
            let bucket = this.data[i]
             // consider only non empty bucket
            if(bucket){
                for(let j=0;j<bucket.length;j++) keys.push(bucket[j][0])                
            }
        }
        return keys
    }
}

var personAge = new MyHashTable(10)
personAge.put("Daya", 22)
personAge.put("Mukesh", 25)
personAge.put("Sunil", 49)
personAge.put("Maya", 92)
personAge.put("Dinesh", 20)
personAge.put("Gopal", 9)
personAge.put("Maya", 80)
console.log(personAge.get("Maya"))
console.log(personAge)
console.log(personAge.getKeys())

/*
OUTPUT
92
MyHashTable {
  data:
     [ [Array], [Array], [Array] ],
     <3 empty items>,
     [ [Array], [Array] ],
     <3 empty items>,
     [ [Array], [Array] ] ] }
[ 'Daya', 'Maya', 'Maya', 'Mukesh', 'Sunil', 'Dinesh', 'Gopal' ]

*/