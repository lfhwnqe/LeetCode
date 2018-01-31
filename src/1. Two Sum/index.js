var twoSum = function (nums, target) {
    var a, b
    nums.forEach(function (element, index) {
        nums.forEach(function (endElement, endsIndex) {
            if (target === endElement + element && index != endsIndex) {
                a = index
                b = endsIndex
            }
        })
    })
    return [a, b]
}