const games=[
{league:'Liga Colombiana',home:'Millonarios',away:'Atlético Nacional',hi:'🔵',ai:'🟢',score:'2 - 1',date:'12 oct 2026 · 7:30 p. m.',up:false},
{league:'Premier League',home:'Arsenal',away:'Liverpool',hi:'🔴',ai:'🔴',score:'1 - 1',date:'12 oct 2026 · 4:00 p. m.',up:false},
{league:'LaLiga',home:'Real Madrid',away:'Barcelona',hi:'⚪',ai:'🔵',score:'VS',date:'18 oct 2026 · 2:00 p. m.',up:true},
{league:'Liga Colombiana',home:'América de Cali',away:'Junior',hi:'🔴',ai:'🔴',score:'VS',date:'19 oct 2026 · 6:10 p. m.',up:true},
{league:'Premier League',home:'Chelsea',away:'Manchester City',hi:'🔵',ai:'🩵',score:'0 - 2',date:'11 oct 2026 · 11:30 a. m.',up:false},
{league:'LaLiga',home:'Atlético de Madrid',away:'Sevilla',hi:'🔴',ai:'⚪',score:'VS',date:'20 oct 2026 · 1:00 p. m.',up:true}
];
const clubs=[['Atlético Nacional','🟢',10,7,2,1,23],['Millonarios','🔵',10,6,2,2,20],['América de Cali','🔴',10,5,3,2,18],['Junior','🔴',10,4,2,4,14],['Deportivo Cali','🟢',10,3,3,4,12]];
const grid=document.getElementById('matches');
function render(){grid.replaceChildren();const league=document.getElementById('leagueFilter').value;const list=games.filter(g=>league==='Todas'||g.league===league);list.forEach(g=>{const card=document.createElement('article');card.className='match';card.innerHTML=`<div class="matchtop"><span>${g.league}</span><span class="status ${g.up?'upcoming':''}">${g.up?'PRÓXIMO':'FINALIZADO'}</span></div><div class="teams"><div><div class="teamicon">${g.hi}</div><div class="teamname">${g.home}</div></div><div class="score">${g.score}</div><div><div class="teamicon">${g.ai}</div><div class="teamname">${g.away}</div></div></div><div class="date">◷ ${g.date}</div>`;grid.append(card)});if(!list.length)grid.textContent='No hay partidos para esta liga.'}
document.getElementById('leagueFilter').addEventListener('change',render);
const tbody=document.getElementById('standings');clubs.forEach((c,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${i+1}</td><td class="club">${c[1]} &nbsp; ${c[0]}</td><td>${c[2]}</td><td>${c[3]}</td><td>${c[4]}</td><td>${c[5]}</td><td class="points">${c[6]}</td>`;tbody.append(tr)});render();