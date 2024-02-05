const graph = {
    cab: {
        name: 'cab',
        next: ['car', 'cat']
    },
    car: {
        name: 'car',
        next: ['bar', 'cat']
    },
    bar: {
        name: 'bar',
        next: ['bat']
    },
    cat: {
        name: 'cat',
        next: ['mat', 'bat']
    },
    mat: {
        name: 'mat',
        next: ['bat', 'pat']
    },
    bat: {
        name: 'bat',
        next: []
    },
    pat: {
        name: 'pat',
        next: ['rat']
    },
    rat: {
        name: 'rat',
        next: []
    }
};

function findTheNearestWay (start, finish) {
    const visited = {};
    const stack = [start];

    const wayMap = {};
    const way = [];

    while (stack.length) {
        const current = stack.shift();

        if (current === finish) {
            break;
        }

        if (visited[current]) {
            continue;
        }

        const next = graph[current].next;

        next.forEach(el => {
            if (!wayMap[el]) {
                wayMap[el] = current;
            }
        });

        stack.push(...next);

        visited[current] = true;
    }

    let lastPoint = finish;

    while (lastPoint) {
        way.push(lastPoint);
        lastPoint = wayMap[lastPoint];
    }

    return way.reverse();
}

console.log('cab -> rat:', findTheNearestWay('cab', 'rat'))
console.log('cab -> bat:', findTheNearestWay('cab', 'bat'))
console.log('cab -> mat:', findTheNearestWay('cab', 'mat'))
console.log('car -> bat:', findTheNearestWay('car', 'bat'))
