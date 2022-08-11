module.exports = function check(str, bracketsConfig) {
    let open = [];
    let close = [];
    let stack = [str[0]];
    str = str.slice(1, str.length)

    for (i in bracketsConfig) {
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

    for (j in str) {
        if (open.indexOf(stack[stack.length-1]) !== -1 && open.indexOf(stack[stack.length-1]) === close.indexOf(str[j]) && stack.length > 0) {
            stack.pop();
        } else {
            stack.push(str[j]);
        }
    }
    return stack.length === 0;
}
