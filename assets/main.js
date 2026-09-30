(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var el = document.getElementById('typing');
  if (!el) return;

  var phrases = [
    'Analista de Dados & BI',
    'Transformando dados em decisões',
    'dbt | SQL | Power BI | Airflow'
  ];

  if (reduceMotion) {
    el.textContent = phrases[0];
    return;
  }

  var pIndex = 0, cIndex = 0, deleting = false;
  function tick() {
    var word = phrases[pIndex];
    if (!deleting) {
      cIndex++;
      el.innerHTML = word.slice(0, cIndex) + '<span class="cursor"></span>';
      if (cIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      cIndex--;
      el.innerHTML = word.slice(0, cIndex) + '<span class="cursor"></span>';
      if (cIndex === 0) {
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
})();
