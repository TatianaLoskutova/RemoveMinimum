function removeSmallest(num) {
    if (num.length < 2) {
        return []
    }
    let numbers = [...num]
    let sort = numbers.sort((a, b) => a - b)
    let index = num.indexOf(sort[0])
    let res = [...num]
    let res2 = res.splice(index, 1)

    return res
}