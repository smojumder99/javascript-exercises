const findTheOldest = function(people) {

    let peopleWithAge=[];
    for(let i=0;i<people.length;i++){
        let currentPersonAge;
        peopleWithAge[i]=people[i] ;
        
            currentPersonAge= !(people[i].yearOfDeath)? 
            ((new Date().getFullYear())-people[i].yearOfBirth) :(people[i].yearOfDeath-people[i].yearOfBirth);

            peopleWithAge[i].age=currentPersonAge;
    }
   peopleWithAge.sort((a,b)=>a.age-b.age);

   const oldestPersonName=peopleWithAge[peopleWithAge.length-1].name;
   return people.find(person=> person.name===oldestPersonName);

    
};

// Do not edit below this line
module.exports = findTheOldest;
