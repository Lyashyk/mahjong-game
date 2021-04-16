const getArrWidthSimple = (amount) => {
    const _arr = [];


    nextPrime: for (let i = 2; i <= amount; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }

        _arr.push(i);
    }

    return _arr;
}

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const getShuffleDublicateArrOfSimple = () => shuffle([...getArrWidthSimple(50), ...getArrWidthSimple(50)]);

export const getArrWidthDefaultAtribute = () => getShuffleDublicateArrOfSimple()
    .map(item => ({ title: item, visited: false, comleted: false }))

export const getCheckingArr = (arr, title, index) => {
    let _filtredArr = arr.filter(item => item.title === title && item.visited);

    if (_filtredArr.length < 2) {
        arr[index].visited = false;
        return arr;
    } else {
        return arr.map(item => {
            item.comleted = item.comleted || item.title === title
            return item;
        })
    }
}