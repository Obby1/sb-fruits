let choice = (fruits) => {
    return fruits[Math.floor(Math.random()*(fruits.length))]
}

let remove = (items, item) => {
    let updatedItems = [...items];
    const index = updatedItems.findIndex((i) => i === item)
    if (index > -1){
        updatedItems.splice(index, 1);
    }
    return updatedItems;
}


export {choice, remove};


