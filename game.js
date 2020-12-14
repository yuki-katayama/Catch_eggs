let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let playerX = 350;
let id = setInterval(ft_draw, 10);
let itemY = -100;
let itemX = Math.random() * 700;
let random = Math.round(Math.random());
let score = 0;


function ft_draw_initial(ctx)
{
	ctx.fillStyle = "#B8E2FC";
	ctx.fillRect(0, 0, 800, 300);
	ctx.fillStyle = "#A1CA52";
	ctx.fillRect(0, 300, 800, 100);
	for (let i=0; i<4; i++)
	{
		let cloud = new Image();
		cloud.src = "image/cloud.png";
		ctx.drawImage(cloud, 20+(i*200) , 50, 150, 60);
	}
}

function ft_draw_item(ctx, itemX, itemY, random)
{
	let item = new Image();
	if(random == 0)
		item.src = "image/egg.png";
	else
		item.src = "image/ball.png";
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

function ft_draw(){
	let flag = 0;

	ft_draw_initial(ctx);
	ft_draw_player(ctx);
	ft_draw_item(ctx,itemX, itemY, random)
	if(itemY > 250 && itemX > playerX - 100 && itemX < playerX + 100)
	{
		if(random == 0)
            score += 10;
        else
			score -=10;
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
	if(score == 20)
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