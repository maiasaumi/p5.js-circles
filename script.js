let snowflakes = [];
const canvasColor = "skyblue";
//let img;

function preload() {
  backimage = loadImage("assets/merry-go-round.jpg");
}

//Process to be executed only once at the beginning.
function setup() {
  createCanvas(1000, 1000);
  background(canvasColor);
  //Fill in the shape
  //fill();

  //Do not draw contour lines.
  //noStroke();
  //How many times to refresh per second.
  frameRate(30);
}

//Process to be executed repeatedly
function draw() {
  //show image
  image(backimage, 0, 0);
  //Update time
  let time = frameCount / 60;
}

class Snowflake {
  constructor() {
    //Initialization of coordinates
    this.x = 0;
    this.y = random(-50, 0);
    this.initialAngle = random(0, 2 * PI);
    this.size = random(3, 10);
    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update(time) {
    //x coordinate
    let speedOfAngle = 0.6;
    let angle = speedOfAngle * time + this.initialAngle;
    this.x = width / 2 + this.radius * sin(angle);

    //y coordinate
    this.y += pow(this.size, 0.5);
  }
}

// 画面の最後にきた雪片を削除
if (this.posY > height) {
  let index = snowflakes.indexOf(this);
  snowflakes.splice(index, 1);
}

__________________________________________________________;

let snowflakes = [];

function preload() {
  backimage = loadImage("assets/merry-go-round.jpg");
  snowA = loadImage("assets/snowC.png");
}

function setup() {
  createCanvas(426, 525);
  noStroke();
  fill(255);
  //How many times to refresh per second.
  frameRate(30);
}

function draw() {
  image(backimage, 0, 0);
  let time = frameCount / 60; // 更新時間（frameCountを60で割った数字）

  // フレームごとに、乱数分の雪片を作成してsnowflakes配列に入れる
  for (let i = 0; i < random(3); i++) {
    snowflakes.push(new Snowflake());
  }

  for (let flake of snowflakes) {
    flake.update(time); // 雪片の位置を更新する
    flake.display(); // 雪片を描く
  }
}

class Snowflake {
  constructor() {
    // 座標の初期化
    this.posX = 0; // 0で初期化
    this.posY = random(-50, 0); // -50から0の間の数値で初期化
    this.initialAngle = random(0, 2 * PI); // 初期の角度
    this.size = random(3, 10); // 大きさ(2-5の間の乱数)

    // 雪片の螺旋の半径
    // 半径の2乗を最大値に生成した乱数の平方根を設定
    // （雪片が一斉に広がるようにするため）
    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update(time) {
    // x座標：円に沿って動く
    let w = 0.6; // 角度のスピード
    let angle = w * time + this.initialAngle;
    this.posX = width / 2 + this.radius * sin(angle);

    // y座標：異なるサイズの雪片はわずかに異なるy速度で落下する
    this.posY += pow(this.size, 0.5);

    // 画面の最後にきた雪片を削除
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display() {
    image(snowA, this.posX, this.posY, this.size, this.size);
  }
}
