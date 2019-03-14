var sterren = document.getElementById('ster1');
TweenMax.to(sterren, 3, {rotation:360, ease:Linear.easeNone, repeat:-1})

var sterren = document.getElementById('ster2');
TweenMax.to(sterren, 3, {rotation:360, ease:Linear.easeNone, repeat:-1})

var sterren = document.getElementById('ster3');
TweenMax.to(sterren, 5, {rotation:360, ease:Linear.easeNone, repeat:-1})


//tl.to("#melding", 2, {autoAlpha:0, y:0, ease:Power1.easeIn}, 1.5);
var fadein_tween = TweenLite.from( '#melding', 0.5, {autoAlpha:0, y: -10} );

var melding = document.getElementById('melding');

var tl = new TimelineMax();var bezierPath = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];
tl.add(TweenMax.set(melding,{autoAlpha:0}));tl.add(TweenMax.to(melding, 10, { bezier: {
            type: 'soft',
            values: bezierPath,
            smoothOrigin: true,
            timeResolution: 5,
            autoAlpha:1
          }, ease: Linear.easeNone, repeat:-1, autoAlpha:0}));

tl.to(melding, 1, {autoAlpha:1, repeat:0, ease: Linear.easeNone}, 0);




var fadein_tween = TweenLite.from( '#MyClockDisplay', 0.5, {autoAlpha:0, y: -10} );


