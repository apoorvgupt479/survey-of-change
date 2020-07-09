var peopleCount = 0;

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();
}

function draw(){
    background(152,251,152);
} 