function Factory() {
    this.createEmployee = function (type) {
        let employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            log.add(this.type.toUpperCase() + " : rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

let FullTime = function () {
    this.hourly = "$12";
};

let PartTime = function () {
    this.hourly = "$11";
};

let Temporary = function () {
    this.hourly = "$10";
};

let Contractor = function () {
    this.hourly = "$15";
};

// log helper
let log = (function () {
    let log = "";

    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            document.getElementById('container').innerHTML = log;
            log = "";
        }
    }
})();

function run(workType) {
    let employees = [];
    let factory = new Factory();


    employees.push(factory.createEmployee(workType));

    for (let i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }

    log.show();
}

let btns = document.querySelectorAll('button');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        run(btns[i].id);
    });
}
