/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var fiveNum = 0,
        tenNum = 0;
    for (var i = 0; i < bills.length; i++) {
        debugger
        if (bills[i] == 5) {
            ++fiveNum;
            continue;
        }
        if (bills[i] == 10) {
            if (!fiveNum) { return false; }
            --fiveNum;
            ++tenNum;
            continue;
        }
        if (bills[i] == 20) {
            if (!fiveNum || (!tenNum && fiveNum < 3)) {
                return false;
            }
            if (tenNum) {
                --fiveNum;
                --tenNum;
                continue;
            } else {
                fiveNum -= 3;
            }
        }
    }
    return true;
};
bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5];
lemonadeChange(bills);