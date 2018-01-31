const numJewelsInStones = (J, S) => {
    let num = 0
    let arr = []
    //遍历s
    S.split("").forEach((k) => {
        //如果s中有一条与j中相等，num+1
        if (J.indexOf(k) >= 0) {
            num++
        }
    })
    return num
}