//defined interface
interface User{
    id:number;
    name: string;
    email: string;
    age?:number;
};

//defined UserManager class
class UserManager{
    private User: User[];
    constructor(){  //constructor
        this.User = [];
    }
    addUser(user: User):void{       //addUser method that adds users passed
        this.User.push(user);
        console.log(`User added with id:${user.id}.`)
    }
    removeUser(id:number):void{     //removeUser method removes users with provided id
        this.User = this.User.filter((user)=>user.id!==id);  
        console.log(`User removed with id:${id}.`) 
    }
    getUser(param:number | string): User|undefined|string{  //getUser method returns user or greet a user
        if(typeof param === "number"){
            const [foundUser] = this.User.filter((user)=>user.id===param);
            return foundUser;
        }else if(typeof param === "string"){
            const [foundUser] = this.User.filter((user)=>user.name===param);
            return `Hey there! ${foundUser.name}, ${foundUser.id} ${foundUser.email}.`
        }
    }
    getAllUsers(): User[]{      //getAllUsers to return all users
        return this.User;
    }
    printUserDetails(user: User): void{     //prints an user's details 
        const destructuredUser = {...user};
        console.log(destructuredUser);
    }
    greetUser = (name: string):string => {      //greets an user
        const [foundUser] = this.User.filter((user)=>user.name === name);
        return (foundUser)?`Hey there ${foundUser.name}! greetings to you.`:`User not found!.`;
    }
}

const user1: User = {
    id: 1001,
    name:'John Doe',
    email: "JohnDoe@email.com",
    age: 24,
};

const user2 : User = {
    id:1002,
    name:"Rick Sanchez",
    email:"Ricky@email.com",
};

const user3 : User = {
    id:1,
    name:"Bob",
    email:"Bob@email.com",
    age:34,
};

const manager = new UserManager();
manager.addUser(user1);
manager.addUser(user2);
manager.addUser(user3);
console.log('Displaying all users:-');
console.log(manager.getAllUsers());

console.log('get user with id : 1002');
console.log(manager.getUser(1002));
console.log('Greet user Bob.');
console.log(manager.getUser("Bob"));
console.log(manager.greetUser("Bob"));

console.log('Printing details of user');
manager.printUserDetails(user1);

console.log(`Removing User.`)
manager.removeUser(1);

console.log('Displaying all users:-');
console.log(manager.getAllUsers());