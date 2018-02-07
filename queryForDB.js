module.exports =
{
    /*get user data (names,school name,user type) by user identifier (id or email) and password*/
    getUserByNicknameOrEmail: function (user_identifier, password) {
        return "SELECT * FROM sampledb.usertable " +
        "WHERE (nickname like " + user_identifier + " or email like " + user_identifier + ") " +
        " and pass like " + password + ";";
    }
};