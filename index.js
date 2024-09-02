var UserAccount = /** @class */ (function () {
    function UserAccount(name, age, occupation, desires, title) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.desires = desires;
        this.title = title;
    }
    return UserAccount;
}());
var CarlosLucero = new UserAccount('CarlosLucero', 28, 'Software Engineer', ['Self Sufficiency', 'Love', 'Expertise'], 'admin');
var ZachTapia = new UserAccount('ZachTapia', 28, 'Software Engineer', ['Family', 'Retirement', 'Consistency'], 'contributor');
var userArray = new Array(CarlosLucero, ZachTapia);
function getAdminUser(array) {
    var adminUser = array.filter(function (user) {
        return user.title === 'admin';
    });
    return adminUser;
}
function getContributors(array) {
    var contributors = array.filter(function (user) {
        return user.title === 'contributor';
    });
    return contributors;
}
console.log(getAdminUser(userArray));
console.log(getContributors(userArray));
