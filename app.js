const btn=document.getElementById('bt');
const modal_btn=document.getElementById('btn');
const info=document.querySelector('.info');
const modal1=document.querySelector('.modal');
const close=document.querySelector('.close');
const state=document.getElementById('st');
const city=document.getElementById('ci');
const cel=document.querySelector('.in-st');
const far=document.querySelector('.in-ci');
const op_city=document.querySelector('.te');
const img=document.getElementById('img');
const key='31d76c71107b4479b45103402222901';
// const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city.value}&aqi=yes`
// console.log(url);
btn.addEventListener('click',modal);
function modal(){
    modal1.classList.add('open')

}
close.addEventListener('click',closemodal)


function closemodal(){
        modal1.classList.remove('open')

}
modal_btn.addEventListener('click',datafetch)

function datafetch(){
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city.value}&aqi=yes`

fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.current.temp_c,data.current.temp_f);
    op_city.value=data.location.name;
    img.src=data.current.condition.icon;
    cel.value=data.current.temp_c;
    far.value=data.current.temp_f;
    closemodal()
})
}
function load(){
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=london&aqi=yes`

fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.current.temp_c,data.current.temp_f);
    op_city.value=data.location.name;
    img.src=data.current.condition.icon;
    cel.value=data.current.temp_c;
    far.value=data.current.temp_f;
})
}
load()