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
        if (i < 105 +1) {
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