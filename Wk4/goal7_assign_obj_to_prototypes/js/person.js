/**
 * Week 4 Homework: Analyze Objects
 * Jerry Sutton
 * 02/26/15
 * Person.js file
 */

(function(){  //self executing function

    window.Person=Person;   //global object for main.js

    Person.jobs = ["Teacher","Librarian","Nurse","Programmer"];   //defines different jobs for each person
    Person.actions = ["Writing","Sleeping","Working"];            //defines actions for each person

    function Person(name,row) {                    //  function that generates the person's status and jobs'
        console.log("Person Created: ", name);


        this.name = name;   //name of person

        this.action = Person.jobs[Math.floor(Math.random()*Person.actions.length)]; // first action for each person - random

        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)]; // randomly sets job

        this.row = row;  //which row the html is in

        var id = document.getElementById("r" + this.row + "c3");  //displays first action
        id.innerHTML = this.action;

    }

    Person.prototype.update = function(){                  // what the person is doing 30x per sec
        if(Math.floor(Math.random()<.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
})();

