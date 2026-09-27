const dialog = document.querySelector('#join-dialog');
const openLaunch = () => dialog.showModal();
document.querySelectorAll('[data-join]').forEach(button => button.addEventListener('click', openLaunch));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); } });
document.querySelector('#try-vibe').addEventListener('click', () => dialog.close());
const battery = document.querySelector('#social-battery');
battery.addEventListener('input', () => {
 const value = Number(battery.value);
 document.querySelector('.answer-feedback').textContent = value < 34 ? 'Good company. Then a little recharge time.' : value > 66 ? 'The group chat is your charging station.' : 'A little of both. Depends on the people.';
});
const hotTakes = ['“Unless we’re lining up for the opening act.”', '“Fashionably late is still late. I said what I said.”', '“Five minutes early. Coffee already ordered.”', '“I’m on time for people. Late for everything else.”'];
let hotTake = 0;
document.querySelector('#next-pepper').addEventListener('click', () => { hotTake = (hotTake + 1) % hotTakes.length; document.querySelector('#pepper-answer').textContent = hotTakes[hotTake]; });
document.querySelector('#pepper-answer').setAttribute('aria-live','polite');
document.querySelector('#year').textContent = new Date().getFullYear();
if (document.modelContext?.registerTool) {
 try { Promise.resolve(document.modelContext.registerTool({name:'open_hangs_launch_information', description:'Open Hangs launch information. This does not submit a signup.', inputSchema:{type:'object',properties:{},additionalProperties:false}, annotations:{readOnlyHint:true}, execute(input){ if(!input || typeof input!=='object' || Object.keys(input).length) throw new Error('No arguments are accepted.'); if(!dialog.open) openLaunch(); return {signupOpen:false,campus:'University of Minnesota',launchYear:2026,launchDate:'Exact date not announced',pricing:'Always free'}; }})).catch(()=>{}); } catch {}
}
