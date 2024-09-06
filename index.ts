
type UserTitle = 'admin' | 'contributor' | 'user';

type User = {
  name: string,
  age: number,
  occupation: string,
  desires: string[],
  title: UserTitle;
}

class UserAccount {
  name: string;
  age: number;
  occupation: string;
  desires: string[];
  title: UserTitle;

  constructor(name: string, age: number, occupation: string, desires: string[], title: UserTitle) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.desires = desires;
    this.title = title;
  }
}

const CarlosLucero: User = new UserAccount('CarlosLucero', 28, 'Software Engineer', ['Self Sufficiency', 'Love', 'Expertise'], 'admin');
const ZachTapia: User = new UserAccount('ZachTapia', 28, 'Software Engineer', ['Family', 'Retirement', 'Consistency'], 'contributor');
const userArray: User[] = new Array(CarlosLucero, ZachTapia);

function getAdminUser(array: User[]) {
  const adminUser = array.filter((user) => {
    return user.title === 'admin';
  })

  return adminUser;
}

function getContributors(array: User[]) {
  const contributors = array.filter((user) => {
    return user.title === 'contributor';
  })

  return contributors;
}

console.log(getAdminUser(userArray));
console.log(getContributors(userArray));


