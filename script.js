async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/'); 
  const data = await response.json();
  const user = data.results[0]; 

  
  document.getElementById('userImage').src = user.picture.large;
  document.getElementById('userName').textContent = `Nombre: ${user.name.first} ${user.name.last}`;
  document.getElementById('userEmail').textContent = `Correo: ${user.email}`;
}

document.getElementById('fetchDataBtn').addEventListener('click', fetchRandomUser);

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: "blue",
  dx: 2,  
  dy: 2,  
  draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
  },
  update: function (){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.draw();
      this.x += this.dx;
      this.y += this.dy;
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx *= -1;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy *= -1;
      }
  }
};

function animate() {
  ball.update();
  requestAnimationFrame(animate);
}

animate();

var canvas2 = document.getElementById("canvas2");
var ctx1 = canvas2.getContext("2d");

ctx1.fillStyle = "red";
ctx1.fillRect(10, 160, 80, 210);

ctx1.fillStyle = "yellow";
ctx1.fillRect(110, 120, 80, 210);

ctx1.fillStyle = "green";
ctx1.fillRect(210, 80, 80, 210);

ctx1.fillStyle = "blue";
ctx1.fillRect(310, 40, 80, 210);

ctx1.fillStyle = "black";
ctx1.fillRect(410, 0, 80, 210);
