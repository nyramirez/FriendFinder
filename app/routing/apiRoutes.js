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

        // console.log(newUser);

        friendList.push(newUser);

        res.json(newUser);
    });

    // Looking for the perfect match
    app.get("/api/friends", function (req, res) {
        // working calculations for match
        console.log(friends.json);
        
    })
};