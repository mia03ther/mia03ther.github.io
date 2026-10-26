/**
 * MIA_Ether — Personal Universe v2
 * Theme · Lang · Terminal · Cursor · Progress · Stardust
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ========== i18n ==========
  const dict = {
    en: {
      navAbout: "About", navNow: "Now", navProjects: "Projects", navLab: "How I use AI", navGitHub: "GitHub",
      heroKicker: "STATUS // ONLINE", heroTagline: "Software · AI applications · Data",
      heroSub: "Builder in progress · Based in Guangzhou",
      heroCtaExplore: "Explore", heroCtaProjects: "Projects", heroCtaGithub: "GitHub",
      aboutTitle: "About", aboutLead: "Who is MIA_Ether",
      aboutP1: "I study Big Data Management and Applications at Guangdong University of Foreign Studies (Class of 2030). Right now I am rebuilding my programming fundamentals, so that I can understand and review every line I ship. I am most interested in AI applications, backend systems and data.",
      identityAI: "AI applications", identityAINote: "Products built on top of models",
      identityBackend: "Backend", identityBackendNote: "Servers, APIs, databases",
      identityData: "Data", identityDataNote: "Collecting, cleaning, analysing",
      nowTitle: "Now · October 2026",
      nowItem1: "Working through Harvard's CS50P, one problem set a week, writing the code myself.",
      nowItem2: "Next: CS61A, then data structures and algorithms.",
      projectsTitle: "Projects",
      labTitle: "How I use AI", labDesc: "I use AI tools for research, planning and review. During this learning phase, I write and explain my own code first.",
      wfResearch: "Research", wfPlan: "Plan", wfCode: "Code", wfTest: "Test", wfReview: "Review", wfIterate: "Iterate",
      contactTitle: "Contact", contactDesc: "Connect across the web.",
      footerConnect: "Connect"
    },
    zh: {
      navAbout: "关于", navProjects: "项目", navGitHub: "GitHub",
      heroKicker: "状态 // 在线",
      heroSub: "持续构建中 · 来自广州",
      heroCtaExplore: "探索", heroCtaProjects: "项目", heroCtaGithub: "GitHub",
      aboutTitle: "关于", aboutLead: "MIA_Ether 是谁",
      wfResearch: "研究", wfPlan: "计划", wfCode: "编码", wfTest: "测试", wfReview: "评审", wfIterate: "迭代",
      contactTitle: "联系", contactDesc: "在网络上建立连接。",
      footerConnect: "连接"
    },
    ru: {
      navAbout: "Обо мне", navProjects: "Проекты", navGitHub: "GitHub",
      heroKicker: "СТАТУС // ОНЛАЙН",
      heroSub: "В процессе · Гуанчжоу",
      heroCtaExplore: "Исследовать", heroCtaProjects: "Проекты", heroCtaGithub: "GitHub",
      aboutTitle: "Обо мне", aboutLead: "Кто такой MIA_Ether",
      wfResearch: "Исследование", wfPlan: "План", wfCode: "Код", wfTest: "Тест", wfReview: "Обзор", wfIterate: "Итерация",
      contactTitle: "Контакты", contactDesc: "Связь через сеть.",
      footerConnect: "Связь"
    },
    it: {
      navAbout: "Chi sono", navProjects: "Progetti", navGitHub: "GitHub",
      heroKicker: "STATO // ONLINE",
      heroSub: "In costruzione · Guangzhou",
      heroCtaExplore: "Esplora", heroCtaProjects: "Progetti", heroCtaGithub: "GitHub",
      aboutTitle: "Chi sono", aboutLead: "Chi è MIA_Ether",
      wfResearch: "Ricerca", wfPlan: "Piano", wfCode: "Codice", wfTest: "Test", wfReview: "Review", wfIterate: "Iterare",
      contactTitle: "Contatti", contactDesc: "Connettiti attraverso il web.",
      footerConnect: "Connetti"
    },
    es: {
      navAbout: "Sobre mí", navProjects: "Proyectos", navGitHub: "GitHub",
      heroKicker: "ESTADO // EN LÍNEA",
      heroSub: "En construcción · Guangzhou",
      heroCtaExplore: "Explorar", heroCtaProjects: "Proyectos", heroCtaGithub: "GitHub",
      aboutTitle: "Sobre mí", aboutLead: "Quién es MIA_Ether",
      wfResearch: "Investigación", wfPlan: "Plan", wfCode: "Código", wfTest: "Prueba", wfReview: "Revisión", wfIterate: "Iterar",
      contactTitle: "Contacto", contactDesc: "Conecta a través de la web.",
      footerConnect: "Conectar"
    },
    ja: {
      navAbout: "について", navProjects: "プロジェクト", navGitHub: "GitHub",
      heroKicker: "ステータス // オンライン",
      heroSub: "構築中 · 広州",
      heroCtaExplore: "探索", heroCtaProjects: "プロジェクト", heroCtaGithub: "GitHub",
      aboutTitle: "について", aboutLead: "MIA_Ether とは",
      wfResearch: "リサーチ", wfPlan: "計画", wfCode: "コード", wfTest: "テスト", wfReview: "レビュー", wfIterate: "反復",
      contactTitle: "コンタクト", contactDesc: "ウェブでつながる。",
      footerConnect: "つながる"
    },
    pt: {
      navAbout: "Sobre", navProjects: "Projetos", navGitHub: "GitHub",
      heroKicker: "STATUS // ONLINE",
      heroSub: "Em construção · Guangzhou",
      heroCtaExplore: "Explorar", heroCtaProjects: "Projetos", heroCtaGithub: "GitHub",
      aboutTitle: "Sobre", aboutLead: "Quem é MIA_Ether",
      wfResearch: "Pesquisa", wfPlan: "Plano", wfCode: "Código", wfTest: "Teste", wfReview: "Revisão", wfIterate: "Iterar",
      contactTitle: "Contato", contactDesc: "Conecte-se pela web.",
      footerConnect: "Conectar"
    },
    ko: {
      navAbout: "소개", navProjects: "프로젝트", navGitHub: "GitHub",
      heroKicker: "상태 // 온라인",
      heroSub: "구축 중 · 광저우",
      heroCtaExplore: "탐색", heroCtaProjects: "프로젝트", heroCtaGithub: "GitHub",
      aboutTitle: "소개", aboutLead: "MIA_Ether 는 누구인가",
      wfResearch: "연구", wfPlan: "계획", wfCode: "코드", wfTest: "테스트", wfReview: "리뷰", wfIterate: "반복",
      contactTitle: "연락처", contactDesc: "웹에서 연결하세요.",
      footerConnect: "연결"
    },
    fr: {
      navAbout: "À propos", navProjects: "Projets", navGitHub: "GitHub",
      heroKicker: "STATUT // EN LIGNE",
      heroSub: "En construction · Guangzhou",
      heroCtaExplore: "Explorer", heroCtaProjects: "Projets", heroCtaGithub: "GitHub",
      aboutTitle: "À propos", aboutLead: "Qui est MIA_Ether",
      wfResearch: "Recherche", wfPlan: "Plan", wfCode: "Code", wfTest: "Test", wfReview: "Revue", wfIterate: "Itérer",
      contactTitle: "Contact", contactDesc: "Connectez-vous via le web.",
      footerConnect: "Connecter"
    }
  };
  const langNames = { en: "EN", zh: "中", ru: "RU", it: "IT", es: "ES", ja: "JA", pt: "PT", ko: "KO", fr: "FR" };
  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    const t = dict[lang] || dict.en;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });
    const label = $("#langLabel");
    if (label) label.textContent = langNames[lang] || "EN";
    $$(".lang-option").forEach((b) => b.classList.toggle("active", b.getAttribute("data-lang") === lang));
    localStorage.setItem("mia-lang", lang);
  }
  // Lang panel
  const langPanel = $("#langPanel");
  const langToggle = $("#langToggle");
  langToggle?.addEventListener("click", () => {
    const expanded = langToggle.getAttribute("aria-expanded") === "true";
    langToggle.setAttribute("aria-expanded", String(!expanded));
    langPanel.hidden = expanded;
  });
  langPanel?.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-option");
    if (!btn) return;
    applyLang(btn.getAttribute("data-lang"));
    langPanel.hidden = true;
    langToggle.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("click", (e) => {
    if (langPanel && !langPanel.hidden && !langPanel.contains(e.target) && e.target !== langToggle && !langToggle.contains(e.target)) {
      langPanel.hidden = true;
      langToggle.setAttribute("aria-expanded", "false");
    }
  });
  applyLang(localStorage.getItem("mia-lang") || "en");
  // ========== Theme ==========
  const savedTheme = localStorage.getItem("mia-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));
  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("mia-theme", next);
  }
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  // ========== Scroll progress + header ==========
  const progress = $("#scrollProgress");
  const header = $(".site-header");
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = p + "%";
    if (header) header.classList.toggle("solid", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  // ========== Mobile nav ==========
  const navBtn = $(".nav-toggle");
  const navLinks = $(".nav-links");
  navBtn?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", String(!!open));
  });
  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navBtn?.setAttribute("aria-expanded", "false");
    });
  });
  // ========== Terminal ==========
  const termOverlay = $("#terminalOverlay");
  const termBody = $("#terminalBody");
  const termInput = $("#terminalInput");
  const termHelp = "commands: help · whoami · about · skills · links · clear · exit";
  function termPrint(html) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = html;
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }
  function openTerminal() {
    termOverlay.hidden = false;
    termBody.innerHTML = "";
    termPrint('<span class="t-muted">MIA_Ether shell — type <span class="t-cyan">help</span></span>');
    termPrint('<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ whoami');
    termPrint("MIA_Ether · 08 · builder in progress · Guangzhou · AI / tools / ideas");
    setTimeout(() => termInput?.focus(), 50);
  }
  function closeTerminal() { termOverlay.hidden = true; }
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    termPrint(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ ${escapeHtml(raw)}`);
    if (!cmd) return;
    if (cmd === "help") termPrint(`<span class="t-muted">${termHelp}</span>`);
    else if (cmd === "whoami") termPrint("MIA_Ether · born 2008 · builder in progress · based in Guangzhou");
    else if (cmd === "about") {
      termPrint("AI tools · market curiosity · public building · creative experiments.");
      termPrint("Public notes on X: @MIA03ther");
    } else if (cmd === "skills") termPrint("Python · data · AI tools · content");
    else if (cmd === "links") {
      termPrint("X       https://x.com/MIA03ther");
      termPrint("GitHub  https://github.com/mia03ther");
    } else if (cmd === "clear") termBody.innerHTML = "";
    else if (cmd === "exit" || cmd === "q") closeTerminal();
    else termPrint(`<span class="t-pink">unknown:</span> ${escapeHtml(cmd)} — try help`);
  }
  $("#termBtn")?.addEventListener("click", openTerminal);
  $("#terminalClose")?.addEventListener("click", closeTerminal);
  termOverlay?.addEventListener("click", (e) => { if (e.target === termOverlay) closeTerminal(); });
  termInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { runCommand(termInput.value); termInput.value = ""; }
    if (e.key === "Escape") closeTerminal();
  });
  // ========== Scroll reveal ==========
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
  function setupReveal() {
    $$(".section .contact-card, .section .project-card, .section .identity-item, .section .workflow-step").forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
      revealObs.observe(el);
    });
  }
  setupReveal();
  // ========== Custom cursor ==========
  if (!isTouch) {
    document.body.classList.add("has-custom-cursor");
    const dot = $("#cursorDot");
    const ring = $("#cursorRing");
    let x = 0, y = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      if (dot) { dot.style.left = x + "px"; dot.style.top = y + "px"; }
    });
    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
      requestAnimationFrame(loop);
    })();
    $$("a, button, .project-card, .contact-card, .filter-btn, .identity-item, .pipeline-node, .workflow-step").forEach((el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("hover"));
    });
  }
  // ========== Hero parallax ==========
  const heroSection = $("#hero");
  const heroMist = $(".hero-mist");
  const depthStars = $$(".depth-star");
  if (!reduceMotion) {
    document.addEventListener("mousemove", (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      if (heroMist) heroMist.style.transform = `translateX(calc(-50% + ${cx * 25}px)) translateY(${cy * 12}px)`;
      depthStars.forEach((star, i) => {
        const factor = (i + 1) * 10;
        star.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
      });
    });
  }
  // ========== Stardust Particle System ==========
  const canvas = $("#stardust");
  if (canvas && !isTouch && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];
    const mouse = { x: -1000, y: -1000 };
    const layers = [
      { count: 0, speed: 0.02, size: [0.4, 1.2], alpha: [0.15, 0.45] },
      { count: 0, speed: 0.05, size: [0.8, 2.2], alpha: [0.25, 0.65] },
      { count: 0, speed: 0.1, size: [1.2, 3.5], alpha: [0.4, 1.0] }
    ];
    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      layers[0].count = Math.min(180, Math.floor(W * H / 10000));
      layers[1].count = Math.min(100, Math.floor(W * H / 18000));
      layers[2].count = Math.min(50, Math.floor(W * H / 35000));
      particles = [];
      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.count; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
            a: layer.alpha[0] + Math.random() * (layer.alpha[1] - layer.alpha[0]),
            vx: (Math.random() - 0.5) * layer.speed * 60,
            vy: (Math.random() - 0.5) * layer.speed * 60,
            layer: li,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.01 + Math.random() * 0.03
          });
        }
      });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const accent = getComputedStyle(root).getPropertyValue("--accent").trim() || "#b9c2ff";
      const accent2 = getComputedStyle(root).getPropertyValue("--accent-2").trim() || "#ff7dc7";
      // Nebula glow in hero area
      const heroH = H * 0.75;
      const grad = ctx.createRadialGradient(W * 0.5, heroH * 0.25, 0, W * 0.5, heroH * 0.25, W * 0.65);
      grad.addColorStop(0, "rgba(185, 194, 255, 0.025)");
      grad.addColorStop(0.35, "rgba(158, 232, 255, 0.015)");
      grad.addColorStop(0.65, "rgba(255, 125, 199, 0.01)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, heroH);
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.twinkle += p.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(p.twinkle);
        p.x += p.vx * 0.016;
        p.y += p.vy * 0.016;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = ((150 - dist) / 150) * 0.35;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
        const alpha = p.a * twinkle;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.layer === 2 ? accent2 : accent;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        // Glow for larger particles
        if (p.r > 2) {
          ctx.globalAlpha = alpha * 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Draw connections (same layer only, limited checks)
      ctx.lineWidth = 0.5;
      const maxConn = Math.min(particles.length, 120);
      for (let i = 0; i < maxConn; i++) {
        for (let j = i + 1; j < maxConn; j++) {
          if (particles[i].layer !== particles[j].layer) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.globalAlpha = 0.05 * (1 - d / 90);
            ctx.strokeStyle = accent;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    resize();
    draw();
    window.addEventListener("resize", resize);
  }
})();
