var chart1 = new Chartist.Pie('#html', {
  labels: ['75%', " "],
  series: [75, 25]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart2 = new Chartist.Pie('#css', {
  labels: ['80%', " "],
  series: [80, 20]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});

var chart3 = new Chartist.Pie('#js', {
  labels: ['60%', " "],
  series: [60, 40]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});

var chart4 = new Chartist.Pie('#php', {
  labels: ['50%', " "],
  series: [50, 50]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart5 = new Chartist.Pie('#jquery', {
  labels: ['70%', " "],
  series: [70, 30]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});

/* ------ DESKTOP ----- */

var chart6 = new Chartist.Pie('#c', {
  labels: ['60%', " "],
  series: [60, 40]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart7 = new Chartist.Pie('#sql', {
  labels: ['75%', " "],
  series: [75, 25]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart8 = new Chartist.Pie('#xaml', {
  labels: ['50%', " "],
  series: [50, 50]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart9 = new Chartist.Pie('#cmd', {
  labels: ['40%', " "],
  series: [40, 60]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart11 = new Chartist.Pie('#wserver', {
  labels: ['50%', " "],
  series: [50, 50]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});

var chart12 = new Chartist.Pie('#netwerk', {
  labels: ['75%', " "],
  series: [70, 30]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart13 = new Chartist.Pie('#cisco', {
  labels: ['20%', " "],
  series: [20, 80]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart14 = new Chartist.Pie('#hardware', {
  labels: ['80%', " "],
  series: [80, 20]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart15 = new Chartist.Pie('#amazon', {
  labels: ['30%', " "],
  series: [30, 80]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});
var chart10 = new Chartist.Pie('#go', {
  labels: ['30%', " "],
  series: [30, 70]
}, {
  donut: true,
  donutWidth: 50,
  labelOffset: 50,
  height: 250
});

var animate = function(chart) {
  chart.on('draw', function(data) {
    if(data.type === 'slice' && data.index == 0) {
      var pathLength = data.element._node.getTotalLength();
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1200,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          fill: 'freeze'
        }
      };
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      data.element.animate(animationDefinition, true);
    }
  });
};

animate(chart1);
animate(chart2);
animate(chart3);
animate(chart4);
animate(chart5);

animate(chart6);
animate(chart7);
animate(chart8);
animate(chart9);
animate(chart10);

animate(chart11);
animate(chart12);
animate(chart13);
animate(chart14);
animate(chart15);

var i = 1;
$("#clsModal").click(function loop () {
  setTimeout(function () {
    var blok = document.createElement('article');

    rnd = Math.floor(Math.random() * 5);

    switch(rnd) {
      case 0:
        el = document.createElement('p');
        txt = document.createTextNode('G');
        blok.setAttribute('style', 'background-color:red');
        blok.className += 'red';

        el.appendChild(txt);

        break;
      case 1:
        el = document.createElement('p');
        txt = document.createTextNode('T');
        blok.setAttribute('style', 'background-color:green');
        blok.className += 'green';

        el.appendChild(txt);
        break;
      case 2:
        el = document.createElement('p');
        txt = document.createTextNode('C');
        blok.setAttribute('style', 'background-color:yellow');
        blok.className += 'yellow';

        el.appendChild(txt);
        break;
      case 3:
        el = document.createElement('p');
        txt = document.createTextNode('A');
        blok.setAttribute('style', 'background-color:blue');
        blok.className += 'blue';

        el.appendChild(txt);
        break;
      default:
        el = document.createElement('p');
        txt = document.createTextNode('X');
        blok.setAttribute('style', 'background-color:black');
        blok.className += 'x';

        el.appendChild(txt);
        break;
    }

    blok.appendChild(el);
    var container = document.getElementById('container');

    container.appendChild(blok);
    $('article').draggable({
      grid: [102, 102],
      containment: "#container"
    });
    $(".x").click(function(){
      $(this).remove();
    });
    $("#modal").remove();
    i++;
    if (i < 109) {
      loop();

    }
  }, 5);

  setInterval(function () {
    var status = document.getElementById('status');
    var aantal = $('.x').length;
    status.innerHTML = "Er zijn nog " + aantal + " slechte eiwitten over!";

    if(aantal == 0){
      status.innerHTML = "Alle slechte eiwitten zijn weg."
    }

  }, 1);

  var start = new Date;
  var timer = document.getElementById('timer');

  setInterval(function() {
    timer.innerHTML = Math.round((new Date - start) / 1000) + " seconden";
  }, 1000);
});

function getPositions(box) {
  var $box = $(".yellow");
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $(".yellow")[0];
  var pos = getPositions(box);

  var pos2 = getPositions($(".blue"));
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { alert("Collision"); }
}

$("article").click(function () {
    $(this).children(":nth-child(2)").toggle("hide");
});




