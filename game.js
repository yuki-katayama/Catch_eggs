let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let playerX = 350;
let id = setInterval(ft_draw, 10);
let itemY = -100;
let itemX = Math.random() * 700;
let random =　Math.random();
let score = 0;


function ft_draw_initial(ctx)
{
	ctx.fillStyle = "#FF6600";
	ctx.fillRect(0, 0, 800, 300);
	ctx.fillStyle = "#A1CA52";
	ctx.fillRect(0, 300, 800, 100);
	for (let i=0; i<4; i++)
	{
		let cloud = new Image();
		cloud.src = "image/cloud.png";
		ctx.drawImage(cloud, 20+(i*200) , 50, 150, 60);
	}
	let house = new Image();
	house.src = "image/house.png";
	ctx.drawImage(house, 600 , 230, 150, 120);
}

function ft_draw_item(ctx, itemX, itemY, random)
{
	let item = new Image();
	if(random > 0.5)
		item.src = "image/egg1.png";
	else if(random > 0.1)
		item.src = "image/ball.png";
	else
		item.src = "image/egg.png";
	ctx.drawImage(item, itemX, itemY, 100, 100);
}

function ft_draw_player(ctx)
{
	let player = new Image();
    player.src = "image/player.png";
	ctx.drawImage(player, playerX, 350, 100, 30);
}

function ft_goal()
{
	ctx.font = "60px 'ＭＳ ゴシック'";
	ctx.fillStyle = "#333333";
	ctx.fillText("GAME CLEAR！", 200, 200);
	clearInterval(id);
}

// function ft_fall_object()
// {

// }

function ft_draw(){
	let flag = 0;

	ft_draw_initial(ctx);
	ft_draw_player(ctx);
	ft_draw_item(ctx,　itemX, itemY, random)
	if(itemY > 250 && itemX > playerX - 100 && itemX < playerX + 100)
	{
		if(random > 0.5)
            score += 10;
        else if(random > 0.1)
			score -=10;
		else
			score += 20;
		flag = 1;
	}
	itemY++;
	if(itemY > 400 || flag==1)
	{
		itemY = -100;
		itemX = Math.random() * 700;
		random = Math.round(Math.random());
	}
	ctx.font = "30px 'ＭＳ ゴシック'";
	ctx.fillStyle = "#333333";
	ctx.fillText("SCORE：" + score, 30, 50);
	if(score >= 20)
		ft_goal(id, ctx);
}

document.onkeydown = keydown;
function keydown(e){
	if(e.key=="a"){
	playerX -= 30;
	}
	else if(e.key=="l"){
		playerX += 30;
	}
}

function ft_reset()
{
	location.reload();
}