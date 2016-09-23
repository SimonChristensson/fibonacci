function fibonacci(n) {
    var node = (left, right, sum) => {
        return {
            left: left,
            right: right, 
            sum: sum
        };
    };

    var nodes = (index) => {
        if (index > 1) {
            var left = nodes(index-1);

            if (left.left === null) {
                return node(left, 0, 1);
            }

            return node(left, left.left, left.sum + left.left.sum);
        }

        else {
            return node(null, null, index);
        }
    }

    return nodes(n).sum;
}