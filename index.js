function solution(x) {
    const t = [];
    let y = [x[0]];
    if(x.length > 2) {
        for (let i = 1; i < x.length; i++) {
            if (x[i] - x[i - 1] === 1) {
                y.push(x[i]);
            } else {
                t.push(y);
                console.log(t)
                y = [x[i]];
                console.log(y)
            }
        }
        t.push(y)
        let txt = ''
        for (let i = 0; i < t.length; i++) {
            if(t[i].length>2) {
                t[i] = t[i].at(0) + '-' + t[i].at(-1)
            }
            if(txt.length >0) {
                txt+=','+t[i]
            }else {
                txt+=t[i]
            }
        }
        return txt
    }
    return x.toString()
}

console.log(solution([6,7,67,54,55,56]));

