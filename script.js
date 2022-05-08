let typing = document.getElementById('typing');

var typewriter = new Typewriter(typing, {
    loop: true
});


typewriter.typeString('Computer Engineering Student')
    .pauseFor(100)
    .deleteAll()
    .typeString('Second Year Of Bachelor')
    .pauseFor(100)
    .start();