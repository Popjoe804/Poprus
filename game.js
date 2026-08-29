const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active')}
const back=()=>show('home');
document.querySelectorAll('.back').forEach(b=>b.onclick=back);
document.getElementById('newGame').onclick=()=>show('game');
document.getElementById('storyButton').onclick=()=>show('story');
document.getElementById('howButton').onclick=()=>show('how');
document.querySelectorAll('.play').forEach(b=>b.onclick=()=>show('game'));
document.getElementById('pause').onclick=back;

let x=7,y=8,hp=5,coins=0,power=0;
const player=document.getElementById('player'), msg=document.getElementById('message');
function render(){player.style.left=x+'%';player.style.bottom=y+'%';document.getElementById('hp').textContent=hp;document.getElementById('coins').textContent=coins;document.getElementById('power').textContent=power}
function center(el){let r=el.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2}}
function near(el,d=52){let a=center(player),b=center(el);return Math.hypot(a.x-b.x,a.y-b.y)<d}
function collect(){
 document.querySelectorAll('.coin').forEach(el=>{if(near(el)){el.remove();coins++;msg.textContent='COIN COLLECTED!'}});
 document.querySelectorAll('.power').forEach(el=>{if(near(el)){el.remove();power++;msg.textContent='ENERGY CRYSTAL FOUND!'}});
 const goal=document.getElementById('goal');if(near(goal,70)){document.getElementById('finalCoins').textContent=coins;document.getElementById('finalPower').textContent=power;show('complete')}
 render();
}
document.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>{
 const d=b.dataset.dir;
 if(d==='left')x=Math.max(0,x-7);if(d==='right')x=Math.min(86,x+7);
 if(d==='up')y=Math.min(84,y+7);if(d==='down')y=Math.max(0,y-7);
 collect();render();
});
document.getElementById('attack').onclick=()=>{
 let hit=false;document.querySelectorAll('.enemy').forEach(el=>{if(near(el,70)){el.remove();coins+=2;power+=1;hit=true}});
 msg.textContent=hit?'SHADOW DEFEATED! +2 COINS':'NO ENEMY IN RANGE';render();
};
document.getElementById('next').onclick=()=>{
 document.getElementById('level').textContent='2';msg.textContent='MISSION 2: The Lost Village is coming soon';show('game');
};
render();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');