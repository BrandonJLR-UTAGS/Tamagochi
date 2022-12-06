const canvas=document.getElementById('canvas1')
const StatusAnimation= document.getElementById('StatusAnimation')
const ctx = canvas.getContext('2d')
const CANVAS_WIDHT = canvas.width=600
const CANVAS_HEIGHT = canvas.height=600
const spriteWidth= 575
const spriteHeight=523

let FrameX=0
let FrameY=0
let step=6
let gameFrame = 0
const staggerFrames = 5;
const StatusAnimations=['Animacion:1 Parado',
'Animacion:2 Ascenso',
'Animacion:3 Decenso',
'Animacion:4 Correr',
'Animacion:5 Mariado',
'Animacion:6 Sentado',
'Animacion:7 giro',
'Animacion:8 Mordida',
'Animacion:9 Mimido',
'Animacion:10 ouch']
const player = new Image();
player.src= 'shadow_dog.png'

window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowUp"){
        FrameY++
        if(FrameY > 8)FrameY = 9
        
        StatusAnimation.innerHTML=StatusAnimations[FrameY]
        
    }else if(e.key === "ArrowDown"){
        FrameY--
        if(FrameY < 1) FrameY =0
        StatusAnimation.innerHTML = StatusAnimations[FrameY]
       
    }
    
    if(FrameY == 0 ) step= 6
    else if(FrameY == 1) step = 6
    else if(FrameY == 2) step = 6
    else if(FrameY == 3) step = 8
    else if(FrameY == 4) step = 10
    else if(FrameY == 5) step = 4
    else if(FrameY == 6) step = 6
    else if(FrameY == 7) step = 6
    else if(FrameY == 8) step = 11
    else if(FrameY == 9) step = 3
    
    
});



function animate(){
    ctx.clearRect(0,0,CANVAS_WIDHT,CANVAS_HEIGHT);
    ctx.drawImage(player,FrameX*spriteWidth,FrameY*spriteHeight,
        spriteWidth,spriteHeight,
        0,0,spriteWidth,spriteHeight)

        if(gameFrame % staggerFrames == 0){
            if(FrameX < step){
                FrameX++
            }
            else FrameX=0
        }
        gameFrame++

    requestAnimationFrame(animate);
}
animate();