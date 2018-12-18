const friendList = require("../data/friends.json");

module.exports = function (app) {
    // Display all friends on list
    app.get("/api/friends", function (req, res) {
        return res.json(friendList);
    });

    // Create a new friend
    app.post("/api/friends", function (req, res) {
        let newUser = req.body;
        newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
        friendList.push(newUser);
        res.json(newUser);
        console.log(newUser.scores);
        let sLength = newUser.scores.length;
        let flLength = friendList.length;
        let diffTotalArray = [];

        // console.log(sLength);
        // console.log(typeof (sLength));
        // console.log(friendList.length);
        // console.log(typeof (friendList.length));
        // console.log(newUser.scores[0]);
        // console.log(typeof (newUser.scores[0]));
        // console.log(friendList[0].scores[0]);
        // console.log(typeof (friendList[0].scores[0]));

        for (let j = 0; j <= (flLength - 2); j++) {

            let diff = [];
            for (let i = 0; i <= (sLength - 1); i++) {
                diff.push(Math.abs(Number(newUser.scores[i]) - Number(friendList[j].scores[i])));
                // console.log(Math.abs(Number(newUser.scores[i]) - Number(friendList[0].scores[i])));
            }
            console.log(diff);
            let diffTotal = diff.reduce((a, b) => a + b, 0);
            console.log(diffTotal);
            diffTotalArray.push(diffTotal);
        }
        console.log(diffTotalArray);

        // Finding the lowest value in the Array.
        Array.min = function( diffTotalArray ){
            return Math.min.apply( Math, diffTotalArray );
        };
        let minimum = Array.min(diffTotalArray);
        console.log("This is the lowest value");
        console.log(minimum);

        let index = diffTotalArray.indexOf(minimum);
        console.log("this is the index");
        console.log(index);

        

    });

};