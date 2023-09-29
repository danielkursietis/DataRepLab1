const part1 = (string)=>{
    console.log(string);
};

part1("Data Representation & Querying");

const addition = (num1, num2)=>{
    console.log(num1 + num2);
};

addition(2, 6);

const ages = [25, 31, 42, 77];

const age = (num)=>{
    if (num < 70){
        return num * 2;
    }
    else{
        return num;
    }
};

console.log(ages.map(age));

const strings = [];

const addTask = (task)=>{
    strings.push(task);
    console.log("added " + task + " to array");
    return console.log(strings.length);
};

addTask("cheese");
addTask("yellow");
addTask("11");

const listAllTasks = ()=>{
    for (var i = 0; i < strings.length; i++)
    {
        console.log(strings[i]);
    }
};

listAllTasks();

const deleteTask = (task)=>{
    var index = strings.indexOf(task);
    if (index !== -1) {
        strings.splice(index, 1);
    }
    console.log("Deleted " + task + " from array");
    return console.log(strings.length);
};

deleteTask("cheese");