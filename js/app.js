var i = 1;


var loop = function(){
    setTimeout(function () {

        var blok = document.createElement('article');
        rnd = Math.floor(Math.random() * 5);
        console.log(rnd);

        if($(".red").length > 21) {
            if(rnd = 0) {
                if($(".green").length < 21){
                    rnd=1;
                }
                if($(".blue").length < 21){
                    rnd=3;
                }
                if($(".yellow").length < 21){
                    rnd=2;
                }
            }
        }
        if($(".green").length > 20) {
            if(rnd = 1) {
                rnd=2;
            }
        }
        if($(".yellow").length > 20) {
            if(rnd = 2) {
                rnd=3;
            }
        }
        if($(".blue").length > 20) {
            if(rnd = 3) {
                rnd=4;
            }
        }
        if($(".x").length > 20) {
            if(rnd = 4) {
                rnd=0;
            }
        }
        console.log(" -- " + rnd);
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

        function viewportToPixels(value) {
            var parts = value.match(/([0-9\.]+)(vh|vw)/);
            var q = Number(parts[1]);
            var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
            return side * (q/100)
        }

        var vw = viewportToPixels('5vw') + 2;
        container.appendChild(blok);

        $('article').draggable({
            grid: [vw, vw],
            zIndex: 99,
            revert: true,
            addClasses: false,
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

        function collision($div1, $div2) {
            var x1 = $div1.offset().left;
            var y1 = $div1.offset().top;
            var h1 = $div1.outerHeight(true);
            var w1 = $div1.outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var y2 = $div2.offset().top;
            var h2 = $div2.outerHeight(true);
            var w2 = $div2.outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }
        var green = document.getElementsByClassName("green");
        var blue = document.getElementsByClassName("blue");

        setInterval(function () {
                if(collision($(".green"), $(".blue")) == true){
                    $(".green").first().remove();
                    $(".blue").first().remove();
            }
                if(collision($(".yellow"), $(".red")) == true){
                    $(".yellow").first().remove();
                    $(".red").first().remove();
            }
        }, 100);
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
};
$("#clsModal").click(loop);