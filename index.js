const cats = ["Milo", "Otis", "Garfield"]

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat (name) {
    cats[cats.push("Ralph")]
    return cats
}

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function destructivelyPrependCat (name) {
    cats[cats.unshift("Bob")]
    return cats
}

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function destructivelyRemoveLastCat () {
    cats[cats.pop()]    
    return cats
}

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function destructivelyRemoveFirstCat () {
    cats[cats.shift()]
    return cats
}

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function appendCat (name) {
    return [...cats, name]
}
// console.log(appendCat("Broom"));

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function prependCat(name){
    return [name, ...cats]
}
// console.log(prependCat("Arnold"));

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function removeLastCat(){
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

cats.length = 0
cats.push ('Milo', 'Otis', 'Garfield')

function removeFirstCat(){
    const newCats2 = [...cats]
    newCats2.shift()
    return newCats2
}





