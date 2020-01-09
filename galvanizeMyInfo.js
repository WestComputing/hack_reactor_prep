function cutName(name) {
    return name.split(' ');
}

let myArray = [];
myArray.push("Julian West", "black");

let myInfo = {};
myInfo.fullName = cutName(myArray[0]);
myInfo.favoriteColor = myArray[1];
myInfo.github = "WestComputing";
