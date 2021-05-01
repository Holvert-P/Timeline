// create a timeline with some data
// var table = document.getElementsByTagName("P");
"use strict";
var container = document.getElementById("visualization");
let boton = document.getElementById('btn');
let botonEliminar = document.querySelectorAll('.btn');
let timeline;

function itemsLine() {
    let prueba = document.querySelectorAll('#itemsTable');
    let horarios = [];
    if (prueba.length > 0) {
        for (let i = 0; i < prueba.length; i++) {


            horarios.push({
                id: i,
                content: prueba[i].cells[0].textContent,
                start: prueba[i].cells[1].textContent,
                end: prueba[i].cells[2].textContent
            })


        };
    } else {
        horarios.push({
            id: 1,
            content: "No hay reservaciones",
            start: '',
            end: ''
        })

    }


    var items = new vis.DataSet(horarios);

    var options = {
        //stack: false,
        orientation: {
            axis: "top",
            item: "top"
        },
        //zoomMax: 31536000000, // just one year
        zoomMax: 87600900, // 10,000 years is maximum possible
        zoomMin: 10000000 // 10ms
    };
    timeline = new vis.Timeline(container, items, options);
};
itemsLine();

const eliminar = () => {
    for (let index = 0; index < botonEliminar.length; index++) {
        botonEliminar[index].addEventListener('click', function() {
            let cl = document.querySelector('.vis-timeline');
            cl.remove();
            itemsLine()

        })
    }
}
eliminar();



/**
 * Move the timeline a given percentage to left or right
  @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
 */

function move(percentage) {
    var range = timeline.getWindow();
    var interval = range.end - range.start;
    timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end: range.end.valueOf() - interval * percentage
    });
}

// attach events to the navigation buttons
document.getElementById("moveLeft").onclick = function() {
    move(0.2);
};
document.getElementById("moveRight").onclick = function() {
    move(-0.2);
};

// Using slider to zoomIn or zoomOut
document.getElementById("sliderZoom").addEventListener("input", function(e) {
    var value = this.value;
    if (value < 0) {
        var start = moment().year(moment().year() - 100000), // to adjust with options
            end = moment().year(moment().year() + 1);
        timeline.zoomOut(-value);
        if (value === "-1") timeline.setWindow(start, end);
    } else if (value > 0) {
        var start = moment(),
            end = moment(moment().utc() + 10);
        timeline.zoomIn(value);
        if (value === "1") timeline.setWindow(start, end);
    } else {
        timeline.fit(items.getIds());
        this.value = 0;
    }
});

// To reset zoom initial state
document.getElementById("fit").onclick = function() {
    //$('.range').next().text('0'); // set default if to use output with input range
    document.getElementById("sliderZoom").value = 0;
    timeline.fit(items.getIds());
};

boton.addEventListener('click', () => {
    let cl = document.querySelector('.vis-timeline');
    cl.remove();
    itemsLine()
})