function GetCordinatesFromIndex(index) {
    if (index < (8*24)) {
        let wayInX = (index%24);
        let x = 24 + wayInX + ((wayInX >= 16) * 16);
        let y = Math.floor(index/24);

        return [x,y];
    }
    else if (index < ((8*24)+(8*24))) {
        let newIndex = index - (8*24);
        
        let wayInX = (newIndex%24);
        let x = wayInX + ((wayInX >= 4)*8) + ((wayInX >= (4*3))*(8+8)) + ((wayInX >= (4*5)) * (4*2));
        let y = 16+Math.floor(newIndex/24) + ((newIndex >= 4*24)*12);

        return [x,y];
    }
    else if (index < ((8*24)+(8*24)+(32*8))) {
        let newIndex = index - ((8*24)+(8*24));

        let x = 56 + (newIndex%8);
        let y = 16 + Math.floor(newIndex/8);

        return [x,y];
    }
    else {
        let newIndex = index - ((8*24)+(8*24)+(32*8));
        
        let xOffset = newIndex%32;
        let x = xOffset + Math.floor(((xOffset+4)/8))*8;
        let y = 48 + Math.floor(newIndex/32);

        return [x,y];
    }
}