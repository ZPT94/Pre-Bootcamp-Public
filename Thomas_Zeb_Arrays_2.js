function findTheMiddle(){
    let x = coordinates.map(a=>a[0])
    let y = coordinates.map(a=>a[1])
    let coordinateX = 0;
    let coordinateY = 0;
    for(let i = 0; i < x.length; i ++){
        coordinateX = coordinateX + x[i]
    }
        coordinateX = coordinateX / x.length
        coordinateX = Math.round(coordinateX)
    
    for(let i = 0; i < y.length; i ++){
        coordinateY = coordinateY + y[i]
    }
        coordinateY = coordinateY / y.length
        coordinateY = Math.round(coordinateY)
    
    console.log(coordinateX,",",coordinateY)
    return coordinateX,",",coordinateY
    }
    let coordinates = [[1,2],[7,5],[10,1],[7,3],[3,9],[5,5]];
    findTheMiddle(coordinates)