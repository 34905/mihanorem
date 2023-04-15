//Tijd

function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();

    //? is een korte versie van if-else
    //dus als 'hour' waar is dus (hour < 10) zet een 0 ervoor

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    
    document.getElementById("js--clock").innerHTML = hour + ":" + min;
}

setInterval(displayTime , 1000);




const labels = [
    "Valorant",
    "CSGO",
    "Overwatch",
    "Call Of Duty",
];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Most played shooters in Hours",
            data: [1000, 5000, 2000, 1000],
            backgroundColor: ['	#DC143C', '#006400', '	#000080', '#ffc40c' ]
        }
    ]
}


const config = {
    type: 'doughnut',
    data: data,
}

const config2 = {
    type: 'bar',
    data: data,
}

const config3 = {
    type: 'polarArea',
    data: data,
}

const config4 = {
    type: 'radar',
    data: data,
    options: {}
};


new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);
new Chart(document.getElementById("js--chart--3"), config3);
new Chart(document.getElementById("js--chart--4"), config4);