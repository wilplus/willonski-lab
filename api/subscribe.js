// ================= EMAILS COLLECTOR =================
// Email capture
(function(){
  const form = document.getElementById('subscribe-form');
  const emailEl = document.getElementById('subscribe-email');
  const msg = document.getElementById('subscribe-msg');
  if(!form || !emailEl) return;

  const setMsg = (text, ok=false)=>{
    msg.textContent = text || '';
    msg.style.color = ok ? 'green' : 'var(--muted,#475569)';
  };

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    setMsg('Sending…');
    const email = (emailEl.value || '').trim();
    const hp = form.querySelector('input[name="company"]')?.value || '';

    if(!email || !/^\S+@\S+\.\S+$/.test(email)){
      setMsg('Please enter a valid email address.');
      emailEl.focus();
      return;
    }
    // honeypot
    if(hp){ setMsg('Thanks!'); form.reset(); return; }

    try{
      const res = await fetch('/api/subscribe', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email })
      });
      if(res.ok){
        setMsg('Thanks! We will check your inbox.', true);
        form.reset();
      }else{
        const t = await res.text();
        setMsg('Oops — something went wrong. Please try again later.');
        console.warn('subscribe error', t);
      }
    }catch(err){
      setMsg('Connection error. Please try again.');
      console.error(err);
    }
  });
})();