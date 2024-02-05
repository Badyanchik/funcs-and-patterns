const weightedGraph = {
    lutsk: {
        rivne: 80,
        lviv: 150,
    },
    rivne: {
        lutsk: 80,
        ternopil: 120,
        lviv: 190,
        zhutomyr: 180,
        khmel: 195,
    },
    lviv: {
        ternopil: 100,
        lutsk: 150,
        rivne: 190,
    },
    ternopil: {
        khmel: 110,
        rivne: 120,
        lviv: 100,
    },
    khmel: {
        zhutomyr: 200,
        vinnutsya: 140,
        rivne: 195,
        ternopil: 110,
    },
    vinnutsya: {
        zhutomyr: 100,
        kyiv: 300,
        khmel: 140,
    },
    zhutomyr: {
        kyiv: 140,
        rivne: 180,
        khmel: 200,
        vinnutsya: 100,
    },
    kyiv: {
        vinnutsya: 300,
        zhutomyr: 140,
    },
};

function findTheNearestWay(start, finish) {
    // Hash-map for keeping the visited nodes
    const visited = {};
    // Hash-map for keeping distances from the start point to each node
    const distances = {};
    // Hash-map for keeping the nodes to reach the finish point
    const wayMap = {};
    // All the graph's nodes
    const nodes = Object.keys(weightedGraph);

    // Making all the distances between start point and each node as Infinity
    nodes.forEach((node) => {
        distances[node] = Infinity;
    })

    // Start node the first closest node
    distances[start] = 0;

    while (nodes.length) {
        // Sorting the remaining nodes in order to get the closest
        nodes.sort((a, b) => distances[a] - distances[b]);
        const closest = nodes.shift();

        // If the distance to the closest node is Infinity that means that the node is unreachable
        if (distances[closest] === Infinity) break;

        // Marking the current node as visited
        visited[closest] = true;

        // Getting the neighbors
        const next = Object.entries(weightedGraph[closest]);

        next.forEach(([node, distance]) => {
            if (visited[node]) return;

            const newDistance = distances[closest] + weightedGraph[closest][node];

            if (newDistance < distances[node]) {
                distances[node] = newDistance;
                wayMap[node] = closest;
            }
        })
    }

    const way = []
    let lastPoint = finish;

    // We are going from the last point till the start to find the way of how we reached the needed node
    while (lastPoint) {
        way.push(lastPoint);
        lastPoint = wayMap[lastPoint];
    }

    return {
        start,
        finish,
        way: way.reverse(),
        distance: distances[finish],
    }
}

console.log(findTheNearestWay('lutsk', 'vinnutsya'));
console.log(findTheNearestWay('lutsk', 'ternopil'));
console.log(findTheNearestWay('lutsk', 'kyiv'));
console.log(findTheNearestWay('kyiv', 'lutsk'));
console.log(findTheNearestWay('kyiv', 'lviv'));
console.log(findTheNearestWay('lutsk', 'khmel'));
console.log(findTheNearestWay('kyiv', 'vinnutsya'));
