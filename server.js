const MODALIDADES = [
  {
    nome: 'Musculação',
    descricao: 'Equipamentos de qualidade para hipertrofia e ergometria — treine com segurança e resultados',
    icone: '🏋️',
    horarios: 'Seg-Sex: 5h-22h | Sáb: 7h-13h | Dom: 8h-12h | Feriados: 7h-13h'
  },
  {
    nome: 'Dança',
    descricao: 'Zumba, Ritmos, Jump e muito mais — dance, se solte e queime calorias',
    icone: '💃',
    horarios: 'Seg a Sáb com múltiplos horários — veja a Grade Coletiva'
  },
  {
    nome: 'Funcional',
    descricao: 'Treinamento funcional de alta intensidade — Cross, Step e mais',
    icone: '⚡',
    horarios: 'Seg a Sex com múltiplos horários — veja a Grade Coletiva'
  }
];

const PLANOS = [
  {
    id: 1,
    nome: 'Básico',
    preco: 100.00,
    periodo: 'mês',
    descricao: 'Ideal para quem está começando',
    destaque: false,
    recursos: [
      'Musculação',
      'Avaliação física inicial',
      'Horário livre de acesso'
    ]
  },
  {
    id: 2,
    nome: 'basico trismestral',
    preco: 270.00,
    periodo: 'trimestral',
    descricao: 'Acesso completo à academia',
    destaque: false,
    recursos: [
      'Acesso completo à academia',
      'Avaliação física inicial',
      'App de treinos exclusivo',
      '3 vezes sem juros no cartão'
    ]
  },
  {
    id: 3,
    nome: 'Romano',
    preco: 120.00,
    periodo: 'mês',
    descricao: 'Acesso completo à academia',
    destaque: true,
    recursos: [
      'Acesso completo à academia',
      'Todas as modalidades',
      'Avaliação física inicial',
      'App de treinos exclusivo'
    ]
  },
  {
    id: 4,
    nome: 'Romano trimestral',
    preco: 330.00,
    periodo: 'trimestral',
    descricao: 'Acesso completo à academia',
    destaque: false,
    recursos: [
      'Acesso completo à academia',
      'Todas as modalidades',
      'Avaliação física inicial',
      'App de treinos exclusivo',
      '3 vezes sem juros no cartão'
    ]
  },
  {
    id: 5,
    nome: 'Anual',
    preco: 960.00,
    periodo: 'anual',
    descricao: 'Acesso completo à academia por um ano',
    destaque: false,
    recursos: [
      'Acesso completo à academia',
      'Todas as modalidades',
      'Avaliação física inicial',
      'App de treinos exclusivo',
      'Divididos em 6 vezes',
      'À vista R$950,00'
    ]
  }
];

const GRADE = [
  {
    dia: 'Segunda',
    aulas: [
      { horario: '07:00h', nome: 'Bumbum de Tanquinho', professor: 'Ana' },
      { horario: '07:30h', nome: 'Zumba',               professor: 'Jean' },
      { horario: '18:00h', nome: 'ABS Romano',          professor: 'Romano' },
      { horario: '18:30h', nome: 'Ritmos',              professor: 'Jean' },
      { horario: '19:20h', nome: 'Jump',                professor: 'Ana' },
      { horario: '20:00h', nome: 'Zumba',               professor: 'Cleber' }
    ]
  },
  {
    dia: 'Terça',
    aulas: [
      { horario: '07:00h', nome: 'Step Cross',          professor: 'Jheny' },
      { horario: '07:30h', nome: 'Ritmos',              professor: 'Jean' },
      { horario: '18:00h', nome: 'Step',                professor: 'Cleber' },
      { horario: '18:30h', nome: 'Ritmos',              professor: 'Rhana' },
      { horario: '19:20h', nome: 'Glúteo Carioca',     professor: 'Ana' }
    ]
  },
  {
    dia: 'Quarta',
    aulas: [
      { horario: '07:00h', nome: 'Bumbum de Tanquinho', professor: 'Ana' },
      { horario: '07:30h', nome: 'Zumba',               professor: 'Jean' },
      { horario: '08:20h', nome: 'Pilates Solo',        professor: 'Paulinha' },
      { horario: '09:20h', nome: 'Forró da Melhor Idade', professor: 'Paulinha' },
      { horario: '18:00h', nome: 'Funcional Romano',    professor: 'Jheny' },
      { horario: '18:30h', nome: 'Ritmos',              professor: 'Jean' },
      { horario: '19:20h', nome: 'Zumba',               professor: 'Cleber' }
    ]
  },
  {
    dia: 'Quinta',
    aulas: [
      { horario: '07:00h', nome: 'Step Cross',          professor: 'Jheny' },
      { horario: '07:30h', nome: 'Ritmos',              professor: 'Jean' },
      { horario: '18:00h', nome: 'Step',                professor: 'Cleber' },
      { horario: '18:30h', nome: 'Ritmos',              professor: 'Rhana' },
      { horario: '19:20h', nome: 'Glúteo Carioca',     professor: 'Ana' }
    ]
  },
  {
    dia: 'Sexta',
    aulas: [
      { horario: '07:30h', nome: 'Funcional Romano',    professor: 'Ana' },
      { horario: '08:20h', nome: 'Pilates Solo',        professor: 'Paulinha' },
      { horario: '09:20h', nome: 'Forró da Melhor Idade', professor: 'Paulinha' },
      { horario: '18:00h', nome: 'Bumbum de Tanquinho', professor: 'Romano' },
      { horario: '18:30h', nome: 'Ritmos',              professor: 'Jean' },
      { horario: '19:20h', nome: 'Jump',                professor: 'Ana' }
    ]
  },
  {
    dia: 'Sábado',
    aulas: [
      { horario: '08:00h', nome: 'Cross Beach',         professor: 'Rafael' },
      { horario: '09:00h', nome: 'Ritmos',              professor: 'Jean' }
    ]
  }
];

function renderModalidades() {
  const grid = document.getElementById('modalidadesGrid');
  if (!grid) return;
  grid.innerHTML = MODALIDADES.map(m => `
    <article class="card mod-card reveal" role="listitem">
      <span class="mod-card__icon" aria-hidden="true">${m.icone}</span>
      <h3 class="mod-card__name">${m.nome}</h3>
      <p class="mod-card__desc">${m.descricao}</p>
      <p class="mod-card__hours"><strong>Horários:</strong> ${m.horarios}</p>
    </article>
  `).join('');
  observeReveal();
}

function renderPlanos() {
  const grid = document.getElementById('planosGrid');
  if (!grid) return;
  grid.innerHTML = PLANOS.map(p => `
    <article class="card plano-card ${p.destaque ? 'plano-card--destaque' : ''} reveal" role="listitem">
      ${p.destaque ? '<span class="plano-badge">⭐ Mais Popular</span>' : ''}
      <h3 class="plano-nome">${p.nome}</h3>
      <p class="plano-desc">${p.descricao}</p>
      <div class="plano-preco">
        <span class="plano-preco__cifra">R$</span>
        <span class="plano-preco__valor">${p.preco.toFixed(2).replace('.', ',')}</span>
        <span class="plano-preco__periodo">/${p.periodo}</span>
      </div>
      <ul class="plano-recursos" role="list">
        ${p.recursos.map(r => `<li class="plano-recurso">${r}</li>`).join('')}
      </ul>
      <button
        class="btn ${p.destaque ? 'btn--primary' : 'btn--ghost'} btn--full"
        data-plano-id="${p.id}"
        data-plano-nome="${p.nome}"
        data-plano-preco="R$ ${p.preco.toFixed(2).replace('.', ',')}/${p.periodo}"
      >
        Assinar Plano
      </button>
    </article>
  `).join('');

  grid.addEventListener('click', e => {
    const btn = e.target.closest('button[data-plano-id]');
    if (btn) modal.abrir(btn.dataset.planoId, btn.dataset.planoNome, btn.dataset.planoPreco);
  });

  observeReveal();
}

function renderGrade() {
  const head = document.getElementById('gradeHead');
  const body = document.getElementById('gradeBody');
  if (!head || !body) return;

  GRADE.forEach(d => {
    const th = document.createElement('th');
    th.scope = 'col';
    th.className = 'grade__th';
    th.textContent = d.dia;
    head.appendChild(th);
  });

  const horarios = [...new Set(GRADE.flatMap(d => d.aulas.map(a => a.horario)))]
    .sort((a, b) => {
      const toMin = h => { const [hh, mm] = h.replace('h', '').split(':'); return +hh * 60 + (+mm || 0); };
      return toMin(a) - toMin(b);
    });

  const idx = {};
  GRADE.forEach(d => {
    idx[d.dia] = {};
    d.aulas.forEach(a => { idx[d.dia][a.horario] = a; });
  });

  body.innerHTML = '';
  horarios.forEach(h => {
    const tr = document.createElement('tr');
    const tdH = document.createElement('td');
    tdH.className = 'grade__td-hora';
    tdH.textContent = h;
    tr.appendChild(tdH);

    GRADE.forEach(d => {
      const td = document.createElement('td');
      const aula = idx[d.dia]?.[h];
      if (aula) {
        td.className = 'grade__td';
        td.innerHTML = `
          <div class="grade__aula">
            <span class="grade__aula-nome">${aula.nome}</span>
            <span class="grade__aula-prof">${aula.professor}</span>
          </div>`;
      } else {
        td.className = 'grade__td grade__td--vazia';
      }
      tr.appendChild(td);
    });

    body.appendChild(tr);
  });
}

const modal = {
  el: null, form: null, success: null,

  init() {
    this.el      = document.getElementById('matriculaModal');
    this.form    = document.getElementById('matriculaForm');
    this.success = document.getElementById('modalSuccess');

    document.getElementById('modalClose')
      ?.addEventListener('click', () => this.fechar());
    document.getElementById('modalBackdrop')
      ?.addEventListener('click', () => this.fechar());
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.el?.hidden) this.fechar();
    });
    this.form?.addEventListener('submit', e => this.submit(e));
  },

  abrir(planoId, planoNome, planoPreco) {
    this.form.style.display = '';
    this.form.reset();
    this.success.hidden = true;
    clearFormErrors(this.form);
    document.getElementById('planoId').value        = planoId;
    document.getElementById('modalSub').textContent = `${planoNome} — ${planoPreco}`;
    this.el.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.form.querySelector('input')?.focus(), 100);
  },

  fechar() {
    this.el.hidden = true;
    document.body.style.overflow = '';
  },

  async submit(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = document.getElementById('matriculaSubmit');

  clearFormErrors(form);
  const erros = validarForm({ nome: form.nome.value, email: form.email.value, telefone: form.telefone.value });
  if (erros.length) { exibirErrosForm(form, erros); return; }

  setLoading(btn, true);
  try {
    await emailjs.send("service_wa8z5b8", "template_xrnuiwu", {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      telefone: form.telefone.value.trim(),
      planoId: document.getElementById('planoId').value,
      planoNome: document.getElementById('modalSub').textContent
    });

    // Se chegou aqui, deu certo
    form.style.display = 'none';
    document.getElementById('successMessage').textContent = "Pré‑matrícula enviada com sucesso!";
    this.success.hidden = false;
  } catch (err) {
    let span = btn.parentElement.querySelector('.form__error');
    if (!span) {
      span = Object.assign(document.createElement('span'), { className: 'form__error' });
      span.setAttribute('role', 'alert');
      btn.insertAdjacentElement('afterend', span);
    }
    span.textContent = "Erro ao enviar: " + (err.text || err.message || "Verifique configuração");
  } finally {
    setLoading(btn, false);
  }
}};

/* FORMULÁRIO DE CONTATO */
function initContato() {
  const form     = document.getElementById('contatoForm');
  const btn      = document.getElementById('contatoSubmit');
  const feedback = document.getElementById('contatoFeedback');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearFormErrors(form);
    feedback.hidden = true;

    const erros = validarForm({
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      mensagem: form.mensagem.value
    });
    if (erros.length) { exibirErrosForm(form, erros); return; }

    setLoading(btn, true);
    try {
      // 🚀 Envio via EmailJS
      await emailjs.send("service_wa8z5b8","template_6wgagca", {
        nome:     form.nome.value.trim(),
        email:    form.email.value.trim(),
        telefone: form.telefone.value.trim(),
        mensagem: form.mensagem.value.trim()
      });

      feedback.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
      feedback.className   = 'form__feedback form__feedback--success';
      feedback.hidden      = false;
      form.reset();
    } catch (err) {
      feedback.textContent = "Erro ao enviar: " + (err.text || err.message || "Verifique configuração");
      feedback.className   = 'form__feedback form__feedback--error';
      feedback.hidden      = false;
    } finally {
      setLoading(btn, false);
    }
  });
}

/*NAV*/
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  const links  = menu?.querySelectorAll('.nav__link');

  const onScroll = () => nav?.classList.toggle('nav--scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  links?.forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', false);
  }));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        links?.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

function observeReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

function setLoading(btn, on) {
  btn?.classList.toggle('btn--loading', on);
  if (btn) btn.disabled = on;
}

function validarForm({ nome, email, telefone, mensagem }) {
  const erros = [];
  if (!nome || nome.trim().length < 2)
    erros.push({ campo: 'nome', msg: 'Nome deve ter ao menos 2 caracteres' });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    erros.push({ campo: 'email', msg: 'E-mail inválido' });
  if (!telefone || telefone.replace(/\D/g, '').length < 10)
    erros.push({ campo: 'telefone', msg: 'Telefone inválido (mínimo 10 dígitos)' });
  if (mensagem !== undefined && mensagem.trim().length < 10)
    erros.push({ campo: 'mensagem', msg: 'Mensagem muito curta (mínimo 10 caracteres)' });
  return erros;
}

function exibirErrosForm(form, erros) {
  erros.forEach(({ campo, msg }) => {
    const input = form.elements[campo];
    if (!input) return;
    input.classList.add('form__input--error');
    const span = input.closest('.form__group')?.querySelector('.form__error');
    if (span) span.textContent = msg;
  });
  form.elements[erros[0]?.campo]?.focus();
}

function clearFormErrors(form) {
  form.querySelectorAll('.form__input--error').forEach(el => el.classList.remove('form__input--error'));
  form.querySelectorAll('.form__error').forEach(el => el.textContent = '');
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  modal.init();
  initContato();
  renderModalidades();
  renderPlanos();
  renderGrade();
  observeReveal();
});
document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("botaogram");
  botao.addEventListener("click", function() {
    window.open("https://www.instagram.com/romanoacademia/", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaozap = document.getElementById("botaoWhatsapp");
  botaozap.addEventListener("click", function() {
    window.open("https://api.whatsapp.com/send/?phone=5562982313300&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+fechar+um+plano%21%0A&type=phone_number&app_absent=0&utm_source=ig", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaogram = document.getElementById("botaothreads");
  botaogram.addEventListener("click", function() {
    window.open("https://www.threads.com/@romanoacademia?xmt=AQG0q4Ws8E7_qQfHTtKqjs5-mfCj21ivDcw74dJFsLnUonI", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaogram = document.getElementById("local");
  botaogram.addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/Kin3QymhK2ay3YDd8", "_blank");
  });
});