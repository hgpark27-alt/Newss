'use strict';

// ── Error handling ──
window.onerror = (msg, src, line) => {
  const b = document.getElementById('crashBanner');
  if (b) { b.style.display = 'flex'; b.textContent = `⚠️ 오류: ${msg} (${src}:${line})`; }
};
window.addEventListener('unhandledrejection', e => {
  const b = document.getElementById('crashBanner');
  if (b) { b.style.display = 'flex'; b.textContent = `⚠️ 비동기 오류: ${e.reason}`; }
});

// ── Classification rules ──
const SEG_RULES = {
  Foundry:   ['tsmc','samsung foundry','umc','smic','globalfoundries','psmc','vanguard','foundry','wafer fab','파운드리','rapidus'],
  Equipment: ['asml','applied materials','lam research','kla','tokyo electron','tel ','screen ','asm ','aixtron','semes','jusung','euv','etch','deposition','lithograph','장비','amat'],
  Memory:    ['hynix','micron','dram','nand','hbm','flash','memory','ymtc','cxmt','nanya','메모리','낸드','ssd','저장'],
  Logic:     ['nvidia','intel foundry','amd','qualcomm','arm ','broadcom','mediatek','gpu','cpu','soc','ai accelerator','로직','설계'],
  Materials: ['shin-etsu','sumco','siltronic','wafer','photoresist','cmp','sputtering','precursor','sic','silicon carbide','소재','웨이퍼'],
};

const REG_RULES = {
  US:     ['intel','nvidia','amd','qualcomm','applied materials','lam research','kla','micron','globalfoundries','broadcom','us ','america','washington','silicon valley','texas','ohio','arizona','chips act'],
  Korea:  ['samsung','hynix','korea','seoul','suwon','icheon','korean','semes','jusung','용인','한국'],
  Taiwan: ['tsmc','umc','ase','mediatek','taiwan','hsinchu','psmc','vanguard','nanya','대만'],
  Japan:  ['tokyo electron','tel ','screen ','shin-etsu','sumco','sony','renesas','kioxia','japan','tokyo','osaka','일본','rapidus'],
  China:  ['smic','ymtc','cxmt','hua hong','huawei','china','beijing','shanghai','shenzhen','chinese','중국'],
  Europe: ['asml','infineon','stmicroelectronics','nxp','bosch','europe','netherlands','germany','france','ireland','유럽'],
};

const IMP_KW = {
  10: ['tsmc','samsung','nvidia','intel','asml','hynix','micron','qualcomm'],
  8:  ['revenue','earnings','quarterly','profit','record','forecast','실적','매출','역대'],
  7:  ['export','sanction','restriction','ban','tariff','regulation','수출통제','제재','규제'],
  6:  ['acquisition','merger','partnership','investment','fab','expansion','투자','인수','합병'],
  5:  ['breakthrough','first','angstrom','nm process','shortage','oversupply','수율','양산'],
  3:  ['analyst','upgrade','downgrade','guidance','forecast'],
};

// ── 주가 모의 데이터 ──
const MARKET = [
  { label:'SOX Index',   value:'4,821.50', change:'-1.24%', up:false },
  { label:'TSMC (TSM)',  value:'148.12',   change:'+2.15%', up:true  },
  { label:'ASML',        value:'921.44',   change:'-0.45%', up:false },
  { label:'NVIDIA',      value:'894.20',   change:'+0.88%', up:true  },
  { label:'SK하이닉스',  value:'₩198,500', change:'+1.32%', up:true  },
  { label:'Micron (MU)', value:'118.34',   change:'+3.02%', up:true  },
];

// ── 25개 샘플 뉴스 ──
const MOCK = [
  { id:1,  title_en:'TSMC Reports Record Q2 2025 Revenue of $20.8B, Up 36% YoY on AI Demand',
    title_ko:'TSMC, AI 수요에 힘입어 2025년 2분기 매출 208억 달러로 역대 최고 — 전년비 36% 성장',
    summary_en:'TSMC posted record quarterly revenue driven by surging demand for advanced AI chips. CoWoS advanced packaging capacity remains a key bottleneck.',
    summary_ko:'TSMC가 AI 칩 수요 급증에 힘입어 분기 사상 최대 매출을 기록했다. CoWoS 첨단 패키징 캐파 부족이 여전히 주요 병목으로 지목된다.',
    source:'Reuters', url:'#', published_at:'2025-06-18T09:00:00Z', tags:['TSMC','AI','CoWoS','실적'] },

  { id:2,  title_en:'ASML Receives Record 62 EUV Orders as AI Buildout Accelerates',
    title_ko:'ASML, AI 인프라 투자 가속화에 힘입어 EUV 62대 사상 최대 수주',
    summary_en:'ASML secured its largest-ever quarterly order intake as chipmakers race to expand capacity for AI-driven chip demand. High-NA EUV backlog now stands at 34 units.',
    summary_ko:'ASML이 AI 반도체 캐파 확장 경쟁에 힘입어 분기 최대 수주량을 기록했다. High-NA EUV 백로그는 34대에 달한다.',
    source:'Bloomberg', url:'#', published_at:'2025-06-18T07:30:00Z', tags:['ASML','EUV','High-NA','수주'] },

  { id:3,  title_en:'Micron HBM3E Mass Production Exceeds Targets, Market Share Hits 38%',
    title_ko:'마이크론 HBM3E 양산 조기 안착, 시장점유율 38%로 급등',
    summary_en:'Micron Technology announced HBM3E production has ramped faster than expected, capturing significant share in the high-bandwidth memory market.',
    summary_ko:'마이크론 테크놀로지의 HBM3E 양산 램프업이 예상보다 빠르게 진행돼 고대역폭메모리 시장에서 점유율을 대거 확보했다.',
    source:'Semiconductor Week', url:'#', published_at:'2025-06-18T06:00:00Z', tags:['Micron','HBM3E','메모리','점유율'] },

  { id:4,  title_en:'Samsung Foundry Secures 2nm GAA AI Accelerator Design Win',
    title_ko:'삼성 파운드리, 2nm GAA 공정으로 AI 가속기 주요 설계 수주 확보',
    summary_en:'Samsung Foundry has secured a significant 2nm GAA design win expected to enter risk production late 2025 with volume ramp in 2026.',
    summary_ko:'삼성 파운드리가 2nm GAA 공정으로 AI 가속기 설계 수주에 성공했다. 2025년 말 리스크 양산 후 2026년 본격 램프업 예정이다.',
    source:'The Elec', url:'#', published_at:'2025-06-17T14:00:00Z', tags:['Samsung','파운드리','2nm','GAA'] },

  { id:5,  title_en:'US Tightens Export Controls on Advanced Semiconductor Equipment to China',
    title_ko:'미국, 대중국 첨단 반도체 장비 수출 통제 추가 강화',
    summary_en:'The US announced expanded export control measures targeting advanced semiconductor equipment for China, covering 14nm and below process nodes.',
    summary_ko:'미국이 14nm 이하 첨단 반도체 제조 장비의 대중국 수출 통제를 추가 강화한다고 발표했다.',
    source:'Financial Times', url:'#', published_at:'2025-06-17T11:00:00Z', tags:['수출통제','미중','규제','장비'] },

  { id:6,  title_en:'Intel Foundry 18A Hits Yield Milestone, Customer Tape-Outs on Track',
    title_ko:'인텔 파운드리 18A, 수율 목표 달성 — 고객 테이프아웃 순항',
    summary_en:'Intel Foundry confirmed 18A process node hit internal yield targets ahead of schedule, clearing the path for Q4 2025 customer wafer starts.',
    summary_ko:'인텔 파운드리가 18A 공정의 내부 수율 목표를 일정보다 앞서 달성했다. 2025년 4분기 고객 웨이퍼 투입이 가시권에 들어왔다.',
    source:'AnandTech', url:'#', published_at:'2025-06-17T08:30:00Z', tags:['Intel','18A','수율','파운드리'] },

  { id:7,  title_en:'NVIDIA Blackwell Ultra Production Ramps at TSMC CoWoS-S',
    title_ko:'엔비디아 블랙웰 울트라, TSMC CoWoS-S 양산 램프 — AI 서버 공급 부족 해소 기대',
    summary_en:'NVIDIA\'s Blackwell Ultra GPUs entered volume production at TSMC using CoWoS-S advanced packaging. Cloud providers expect improved AI compute supply.',
    summary_ko:'엔비디아 블랙웰 울트라 GPU가 TSMC CoWoS-S 첨단 패키징으로 본격 양산에 들어갔다. 클라우드 업체들의 AI 컴퓨팅 공급 부족이 완화될 전망이다.',
    source:"Tom's Hardware", url:'#', published_at:'2025-06-17T06:00:00Z', tags:['NVIDIA','Blackwell','TSMC','CoWoS'] },

  { id:8,  title_en:'Lam Research Q3 Revenue Beats on Memory Recovery, Guidance Raised',
    title_ko:'램 리서치 3분기 실적 호조, 메모리 회복에 연간 가이던스 상향',
    summary_en:'Lam Research beat Q3 estimates at $4.37B as DRAM and NAND equipment spending recovers on HBM capacity additions.',
    summary_ko:'램 리서치가 HBM 캐파 증설 주도의 DRAM·NAND 장비 지출 회복에 힘입어 분기 매출 43.7억 달러로 시장 예상치를 상회했다.',
    source:"Barron's", url:'#', published_at:'2025-06-16T20:00:00Z', tags:['Lam Research','메모리','장비','실적'] },

  { id:9,  title_en:"China's SMIC Claims 5nm-class Production via Multi-patterning",
    title_ko:'중국 SMIC, 멀티패터닝으로 5nm급 생산 달성 주장',
    summary_en:'SMIC claims 5nm-class production without EUV using advanced multi-patterning techniques. Industry analysts question actual yields and volumes.',
    summary_ko:'SMIC가 EUV 없이 멀티패터닝으로 5nm급 칩 생산을 달성했다고 주장했다. 업계는 실제 수율과 양산 규모에 의문을 제기하고 있다.',
    source:'SCMP', url:'#', published_at:'2025-06-16T12:00:00Z', tags:['SMIC','중국','5nm','멀티패터닝'] },

  { id:10, title_en:'Applied Materials Launches Centris Sym3 Y Etch System for 2D Materials',
    title_ko:'어플라이드 머티어리얼즈, 2D 소재용 Centris Sym3 Y 식각 장비 출시',
    summary_en:'Applied Materials unveiled Centris Sym3 Y plasma etch system for atomic-level precision patterning of 2D materials and beyond-silicon devices.',
    summary_ko:'어플라이드 머티어리얼즈가 2D 소재 및 차세대 디바이스를 위한 원자 수준 정밀도의 플라즈마 식각 시스템 Centris Sym3 Y를 공개했다.',
    source:'EE Times', url:'#', published_at:'2025-06-16T09:00:00Z', tags:['AMAT','식각','2D소재','장비'] },

  { id:11, title_en:'South Korea Announces ₩30T Semiconductor Cluster Investment in Yongin',
    title_ko:'한국 정부, 용인 반도체 클러스터에 30조 원 투자 계획 발표',
    summary_en:'The South Korean government announced a ₩30 trillion (~$22B) investment plan for the Yongin semiconductor mega-cluster.',
    summary_ko:'한국 정부가 용인 반도체 메가 클러스터에 30조 원(약 220억 달러) 규모의 투자 계획을 발표했다.',
    source:'Korea Herald', url:'#', published_at:'2025-06-15T10:00:00Z', tags:['한국','용인','반도체클러스터','정책'] },

  { id:12, title_en:'Tokyo Electron Reports Record Quarterly Orders on AI Chip Demand',
    title_ko:'도쿄일렉트론, AI 반도체 수요 급증으로 분기 수주 사상 최대',
    summary_en:'Tokyo Electron reported record quarterly orders of ¥847B driven by leading-edge foundry and memory manufacturers investing in AI chip capacity.',
    summary_ko:'도쿄일렉트론(TEL)이 AI 칩 캐파에 투자하는 파운드리·메모리 업체에 힘입어 분기 수주액 8,470억 엔으로 역대 최고를 기록했다.',
    source:'Nikkei Asia', url:'#', published_at:'2025-06-15T07:00:00Z', tags:['TEL','도쿄일렉트론','수주','장비'] },

  { id:13, title_en:'Arm Holdings Revenue Up 34% on AI and Automotive Royalty Surge',
    title_ko:'Arm, AI·자동차 로열티 급증으로 매출 34% 성장',
    summary_en:'Arm Holdings reported $1.24B quarterly revenue with royalties up 37% YoY as edge AI inference and automotive chip adoption accelerates.',
    summary_ko:'에지 AI 추론 및 자동차 반도체 채택 가속화에 힘입어 Arm 홀딩스의 로열티 수입이 37% 증가, 분기 매출 12.4억 달러를 기록했다.',
    source:'Financial Times', url:'#', published_at:'2025-06-14T18:00:00Z', tags:['Arm','로열티','AI','자동차'] },

  { id:14, title_en:'NAND Flash Prices Set to Surge 25% in Q3 on AI Storage Demand',
    title_ko:'NAND 플래시 가격, AI 스토리지 수요 초과 공급으로 3분기 25% 급등 전망',
    summary_en:'Analysts predict a 25% QoQ increase in NAND contract prices in Q3 2025 as AI data center enterprise SSD demand overwhelms production capacity.',
    summary_ko:'AI 데이터센터 엔터프라이즈 SSD 수요가 생산 캐파를 압도함에 따라 3분기 NAND 계약가격이 25% 급등할 것으로 전망된다.',
    source:'TrendForce', url:'#', published_at:'2025-06-14T10:00:00Z', tags:['NAND','가격','SSD','시장전망'] },

  { id:15, title_en:'UMC and GlobalFoundries Explore Merger to Create #2 Pure-Play Foundry',
    title_ko:'UMC·글로벌파운드리, 세계 2위 파운드리 위해 합병 논의 재개',
    summary_en:'UMC and GlobalFoundries are in early merger discussions that would create the world\'s second-largest pure-play foundry.',
    summary_ko:'UMC와 글로벌파운드리가 세계 2위 순수 파운드리 탄생을 목표로 합병 초기 논의를 재개했다는 보도가 나왔다.',
    source:'Reuters', url:'#', published_at:'2025-06-13T14:00:00Z', tags:['UMC','GlobalFoundries','합병','파운드리'] },

  { id:16, title_en:'ASML High-NA EUV Delivers Sub-2nm Resolution in Customer Benchmarks',
    title_ko:'ASML High-NA EUV, 고객 벤치마크서 2nm 이하 해상도 달성',
    summary_en:'ASML\'s High-NA EUV demonstrated sub-2nm resolution in formal benchmark tests at major customer sites, clearing a critical technical milestone.',
    summary_ko:'ASML의 High-NA EUV가 주요 고객사의 공식 벤치마크에서 2nm 이하 해상도를 구현해 핵심 기술 마일스톤을 달성했다.',
    source:'SEMI', url:'#', published_at:'2025-06-13T09:00:00Z', tags:['ASML','High-NA','EUV','리소그래피'] },

  { id:17, title_en:'Qualcomm Snapdragon X Takes 23% Notebook PC Share in Q1 2025',
    title_ko:'퀄컴 스냅드래곤 X, 2025년 1분기 노트북 PC 시장 23% 점유율 달성',
    summary_en:'Qualcomm\'s Snapdragon X Elite and Plus captured significant notebook PC share from Intel, driven by demand for AI-capable Windows on Arm devices.',
    summary_ko:'퀄컴 스냅드래곤 X가 AI 기능을 갖춘 Windows on Arm 기기 수요에 힘입어 인텔로부터 노트북 PC 시장 점유율을 빼앗아 왔다.',
    source:'IDC', url:'#', published_at:'2025-06-12T15:00:00Z', tags:['Qualcomm','Snapdragon','노트북','AI PC'] },

  { id:18, title_en:'Japan Chip Alliance Announces ¥3.5T Investment for Cutting-Edge Fab',
    title_ko:'일본 반도체 연합, 첨단 팹 구축 위해 3.5조 엔 투자 발표',
    summary_en:'A Japanese company consortium announced ¥3.5T investment to restore Japan\'s semiconductor manufacturing, including a Rapidus 2nm fab.',
    summary_ko:'일본 기업 컨소시엄이 라피더스 2nm 팹을 포함한 반도체 제조 역량 복원을 위해 3.5조 엔 투자 계획을 발표했다.',
    source:'Nikkei Asia', url:'#', published_at:'2025-06-12T08:00:00Z', tags:['일본','Rapidus','투자','2nm'] },

  { id:19, title_en:'GlobalFoundries Malta Fab on Track with CHIPS Act Funding',
    title_ko:'글로벌파운드리 몰타 팹, CHIPS법 자금으로 2026년 완공 순항',
    summary_en:'GlobalFoundries announced its Malta NY facility expansion is proceeding with $1.5B in US CHIPS Act manufacturing grants.',
    summary_ko:'글로벌파운드리가 미국 CHIPS법 15억 달러 보조금을 기반으로 뉴욕 몰타 팹 확장이 순조롭게 진행 중이라고 발표했다.',
    source:'Semiconductor Daily', url:'#', published_at:'2025-06-11T16:00:00Z', tags:['GlobalFoundries','CHIPS Act','미국','팹'] },

  { id:20, title_en:'KLA Introduces Process Control Suite for Gate-All-Around Transistors',
    title_ko:'KLA, GAA 트랜지스터용 공정 제어 시스템 신제품군 출시',
    summary_en:'KLA unveiled a new process control and inspection suite designed for Gate-All-Around nanosheet transistor manufacturing at 2nm and below.',
    summary_ko:'KLA가 2nm 이하 노드의 GAA 나노시트 트랜지스터 제조를 위한 공정 제어 및 검사 시스템 신제품군을 공개했다.',
    source:'Solid State Technology', url:'#', published_at:'2025-06-11T11:00:00Z', tags:['KLA','GAA','공정제어','검사'] },

  { id:21, title_en:'HBM Demand Forecast Raised to $65B by 2026 Amid AI Server Boom',
    title_ko:'HBM 수요 전망, AI 서버 붐에 힘입어 2026년 650억 달러로 상향',
    summary_en:'IDC raised its HBM demand forecast to $65B by 2026, citing accelerating AI server deployments and the transition to HBM4.',
    summary_ko:'IDC가 AI 서버 배포 가속화와 HBM4 전환을 이유로 2026년 HBM 수요 전망을 650억 달러로 상향 조정했다.',
    source:'IDC', url:'#', published_at:'2025-06-10T13:00:00Z', tags:['HBM','메모리','AI서버','시장전망'] },

  { id:22, title_en:'Infineon and STMicroelectronics Form SiC Partnership for EV Power Chips',
    title_ko:'인피니언·STMicro, 전기차 파워반도체용 SiC 파트너십 체결',
    summary_en:'Infineon and STMicroelectronics announced a strategic partnership to jointly develop and manufacture SiC power semiconductors for EVs.',
    summary_ko:'인피니언과 STMicro가 전기차용 SiC 파워 반도체 공동 개발·생산을 위한 전략적 파트너십을 체결했다.',
    source:'Automotive News', url:'#', published_at:'2025-06-10T09:00:00Z', tags:['Infineon','STMicro','SiC','전기차'] },

  { id:23, title_en:'TSMC Arizona Fab 2 Begins N3 Risk Production Ahead of Schedule',
    title_ko:'TSMC 애리조나 2공장, N3 공정 리스크 양산 예정보다 조기 개시',
    summary_en:'TSMC confirmed its second Arizona fab has commenced N3 risk production, a milestone for US semiconductor manufacturing expansion.',
    summary_ko:'TSMC가 애리조나 2공장에서 N3 공정 리스크 양산을 개시했다고 확인했다. 미국 반도체 제조 역량 확대의 중요한 이정표다.',
    source:'AZ Central', url:'#', published_at:'2025-06-09T14:00:00Z', tags:['TSMC','애리조나','N3','미국'] },

  { id:24, title_en:'AMD MI400 AI Accelerator Tapes Out at TSMC 3nm, Ships Q1 2026',
    title_ko:'AMD MI400 AI 가속기, TSMC 3nm 테이프아웃 완료 — 2026년 1분기 출하',
    summary_en:'AMD completed tape-out of its MI400 AI accelerator at TSMC 3nm, with volume shipments to data center customers planned for Q1 2026.',
    summary_ko:'AMD가 TSMC 3nm로 MI400 AI 가속기 테이프아웃을 완료했다. 데이터센터 고객 대상 양산 출하는 2026년 1분기로 예정됐다.',
    source:"Tom's Hardware", url:'#', published_at:'2025-06-08T11:00:00Z', tags:['AMD','MI400','AI가속기','3nm'] },

  { id:25, title_en:'Shin-Etsu and Sumco to Double 300mm Wafer Capacity by 2027',
    title_ko:'신에쓰화학·SUMCO, 2027년까지 300mm 웨이퍼 캐파 2배 확대',
    summary_en:'Japanese wafer makers Shin-Etsu Chemical and Sumco announced parallel plans to double 300mm silicon wafer production by 2027.',
    summary_ko:'신에쓰화학과 SUMCO가 장기 칩 수요에 대응해 2027년까지 300mm 실리콘 웨이퍼 생산 캐파를 각각 2배로 늘리는 계획을 발표했다.',
    source:'Nikkei Asia', url:'#', published_at:'2025-06-07T08:00:00Z', tags:['신에쓰','SUMCO','웨이퍼','소재'] },
];

// ── App state ──

let state = {
  articles: [],
  settings: { source:'mock', apiKey:'', koFirst:true, highFirst:true },
};

// ── Helpers ──
function classify(rules, text) {
  const t = text.toLowerCase();
  for (const [key, kws] of Object.entries(rules)) {
    if (kws.some(k => t.includes(k))) return key;
  }
  return null;
}

function calcScore(text) {
  const t = text.toLowerCase();
  let s = 0;
  for (const [pts, kws] of Object.entries(IMP_KW)) {
    if (kws.some(k => t.includes(k))) s += parseInt(pts);
  }
  return s;
}

function level(score) { return score >= 22 ? 'high' : score >= 11 ? 'medium' : 'normal'; }

function segKo(s) {
  return {Foundry:'파운드리', Equipment:'장비/소재', Memory:'메모리', Logic:'설계/로직', Materials:'소재', Other:'기타'}[s] || s;
}

function catCssClass(s) {
  return {Foundry:'cat-foundry', Equipment:'cat-equipment', Memory:'cat-memory', Logic:'cat-logic', Materials:'cat-materials'}[s] || 'cat-other';
}

function timeAgo(d) {
  const diff = (Date.now() - new Date(d)) / 1000;
  if (diff < 3600)  return `${Math.floor(diff/60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff/3600)}시간 전`;
  return `${Math.floor(diff/86400)}일 전`;
}

function process(raw) {
  return raw.map((a, i) => {
    const full = (a.title_en || '') + ' ' + (a.summary_en || '');
    const score = a.score || calcScore(full);
    return {
      ...a, id: a.id || i,
      segment: classify(SEG_RULES, full) || 'Other',
      region:  classify(REG_RULES, full) || 'Global',
      score, level: level(score), _ko: true,
    };
  });
}

// ── Settings ──
function loadSettings() {
  try { state.settings = { ...state.settings, ...JSON.parse(localStorage.getItem('semiMarketSettings') || '{}') }; } catch {}
  document.getElementById('sSrc').value      = state.settings.source;
  document.getElementById('sApiKey').value   = state.settings.apiKey;
  document.getElementById('sKoFirst').checked  = state.settings.koFirst;
  document.getElementById('sHighFirst').checked = state.settings.highFirst;
  document.getElementById('apiKeyGroup').style.display = state.settings.source === 'gnews' ? 'block' : 'none';
  applyDark();
}

function saveSettings() {
  state.settings.source   = document.getElementById('sSrc').value;
  state.settings.apiKey   = document.getElementById('sApiKey').value;
  state.settings.koFirst  = document.getElementById('sKoFirst').checked;
  state.settings.highFirst = document.getElementById('sHighFirst').checked;
  localStorage.setItem('semiMarketSettings', JSON.stringify(state.settings));
  closeModal('settingsModal');
  init();
}

function applyDark() { /* 라이트모드 고정 */ }

// KPI 숫자 카운터 애니메이션
function animateKPI(el, target) {
  if (isNaN(target)) return;
  const dur = 700, st = performance.now();
  const tick = now => {
    const p = Math.min((now - st) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * ease);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ── Data ──
async function fetchGNews(key) {
  const q = encodeURIComponent('semiconductor chip foundry memory AI');
  const r = await fetch(`https://gnews.io/api/v4/search?q=${q}&lang=en&max=25&apikey=${key}`);
  if (!r.ok) throw new Error('GNews ' + r.status);
  const d = await r.json();
  return (d.articles || []).map((a, i) => ({
    id: i+1000, title_en: a.title, title_ko: a.title,
    summary_en: a.description || '', summary_ko: a.description || '',
    source: a.source?.name || 'Unknown', url: a.url, published_at: a.publishedAt, tags: [],
  }));
}

async function translate(text) {
  try {
    const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ko&dt=t&q=${encodeURIComponent(text)}`);
    const d = await r.json();
    return d[0].map(s => s[0]).join('');
  } catch { return text; }
}

// ── Ticker tape ──
function renderTicker() {
  const wrap = document.getElementById('tickerWrap');
  if (!wrap) return;
  const items = MARKET.map(m => `
    <div class="ticker-item">
      <span class="ticker-name">${m.label}</span>
      <span class="ticker-val">${m.value}</span>
      <span class="${m.up ? 'ticker-up' : 'ticker-dn'}">${m.up ? '▲' : '▼'} ${m.change}</span>
    </div>`).join('');
  wrap.innerHTML = `<div class="ticker-track"><span class="ticker-label">SEMI·MKT</span>${items}${items}</div>`;
}

// ── Market strip ──
function renderMarket() {
  document.getElementById('marketStrip').innerHTML = MARKET.map(m => `
    <div class="mkt-card ${m.up ? 'mkt-card--up' : 'mkt-card--dn'}">
      <div class="mkt-label">${m.label}</div>
      <div class="mkt-value">${m.value}</div>
      <div class="mkt-change ${m.up ? 'mkt-up' : 'mkt-dn'}">${m.change}</div>
    </div>`).join('');
}

// ── Stats bar ──
function renderStats(articles) {
  const total = articles.length;
  const bySeg = { Foundry:0, Equipment:0, Memory:0, Logic:0, Materials:0 };
  let high = 0;
  articles.forEach(a => {
    if (bySeg[a.segment] !== undefined) bySeg[a.segment]++;
    if (a.level === 'high') high++;
  });
  const today = new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'2-digit', day:'2-digit' });
  document.getElementById('statsBar').innerHTML = `
    <div class="stat"><span class="stat-n">${total}</span><span class="stat-l">건</span></div>
    <span class="stat-sep">·</span>
    <div class="stat urgent"><span class="stat-n">${high}</span><span class="stat-l">고중요</span></div>
    <span class="stat-sep">·</span>
    <div class="stat"><span class="stat-n">${bySeg.Foundry}</span><span class="stat-l">파운드리</span></div>
    <span class="stat-sep">·</span>
    <div class="stat"><span class="stat-n">${bySeg.Equipment}</span><span class="stat-l">장비</span></div>
    <span class="stat-sep">·</span>
    <div class="stat"><span class="stat-n">${bySeg.Memory}</span><span class="stat-l">메모리</span></div>
    <span class="stat-sep">·</span>
    <div class="stat"><span class="stat-n">${bySeg.Logic}</span><span class="stat-l">설계</span></div>
    <span class="stat-sep">·</span>
    <div class="stat"><span class="stat-n">${bySeg.Materials}</span><span class="stat-l">소재</span></div>
    <span class="stat stat-date">${today}</span>
  `;
}

// ── Featured story ──
function renderFeatured(articles) {
  const top = articles.find(a => a.level === 'high');
  const el  = document.getElementById('featured');
  if (!top) { el.style.display = 'none'; return; }
  el.style.display = '';
  const title   = state.settings.koFirst ? top.title_ko   : top.title_en;
  const summary = state.settings.koFirst ? top.summary_ko : top.summary_en;
  el.innerHTML = `
    <div class="featured-eyebrow"><div class="featured-pulse"></div>주요 뉴스</div>
    <div class="featured-title" onclick="window.open('${top.url}','_blank')">${title}</div>
    <div class="featured-summary">${summary}</div>
    <div class="featured-meta">
      <span class="cat-tag ${catCssClass(top.segment)}">${segKo(top.segment)}</span>
      <span>·</span><span>${top.region}</span>
      <span>·</span><span>${top.source}</span>
      <span>·</span><span>${timeAgo(top.published_at)}</span>
    </div>`;
}

// ── News row ──
function renderRow(a) {
  const title   = (a._ko && state.settings.koFirst) ? a.title_ko   : a.title_en;
  const summary = (a._ko && state.settings.koFirst) ? a.summary_ko : a.summary_en;
  const scoreTag = a.score >= 22 ? `<span class="tag-sep">·</span><span class="score-tag">${a.score}p</span>` : '';
  return `
    <div class="news-row imp-${a.level}" data-id="${a.id}">
      <div class="row-imp"><span class="imp-dot"></span></div>
      <div class="row-main">
        <div class="row-title">${title}</div>
        <div class="row-summary">${summary}</div>
        <div class="row-footer">
          <span class="src-tag">${a.source}</span>
          <span class="tag-sep">·</span>
          <span class="time-tag">${timeAgo(a.published_at)}</span>
          ${scoreTag}
          <button class="btn-lang-row" onclick="toggleLang(${a.id})" title="원문/번역 전환">🔄</button>
        </div>
      </div>
      <div class="row-meta">
        <span class="cat-tag ${catCssClass(a.segment)}">${segKo(a.segment)}</span>
        <span class="reg-tag">${a.region}</span>
      </div>
    </div>`;
}

window.toggleLang = id => {
  const a = state.articles.find(x => x.id === id);
  if (!a) return;
  a._ko = !a._ko;
  const row = document.querySelector(`.news-row[data-id="${id}"]`);
  if (!row) return;
  row.querySelector('.row-title').textContent   = a._ko ? a.title_ko   : a.title_en;
  row.querySelector('.row-summary').textContent = a._ko ? a.summary_ko : a.summary_en;
};

// ── Filters ──
function applyFilters() {
  const seg  = document.querySelector('#chipBar .chip.active')?.dataset.seg || '';
  const reg  = document.getElementById('fReg').value;
  const imp  = document.getElementById('fImp').value;
  const q    = document.getElementById('fSearch').value.toLowerCase();

  let result = state.articles.filter(a => {
    if (seg && a.segment !== seg) return false;
    if (reg && a.region  !== reg) return false;
    if (imp && a.level   !== imp) return false;
    if (q) {
      const hay = (a.title_ko + a.title_en + a.summary_ko + (a.tags||[]).join(' ')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (state.settings.highFirst) result.sort((a, b) => b.score - a.score);

  const grid = document.getElementById('newsGrid');
  document.getElementById('fCount').textContent = `${result.length}건`;
  grid.innerHTML = result.length
    ? result.map(renderRow).join('')
    : `<div class="empty"><div class="ico">🔍</div><p>검색 결과가 없습니다</p></div>`;
}

// ── Report ──
function generateReport() {
  const today = new Date().toLocaleDateString('ko-KR', {year:'numeric', month:'long', day:'numeric'});
  const high   = state.articles.filter(a => a.level === 'high');
  const medium = state.articles.filter(a => a.level === 'medium');
  const bySegMap = {};
  state.articles.forEach(a => { bySegMap[a.segment] = (bySegMap[a.segment] || 0) + 1; });

  const rows = items => items.slice(0, 8).map(a => `
    <div class="report-row">
      <span class="cat-tag ${catCssClass(a.segment)}">${segKo(a.segment)}</span>
      <div><div class="report-txt">${a.title_ko}</div><div class="report-src">${a.source} · ${timeAgo(a.published_at)}</div></div>
    </div>`).join('');

  document.getElementById('reportBody').innerHTML = `
    <div class="report-top">
      <h2>🏭 일일 반도체 시장 인텔리전스 리포트</h2>
      <p>${today} 기준 · 총 ${state.articles.length}건 분석</p>
    </div>
    <div class="report-sec">
      <h3>🔴 고중요도 (${high.length}건)</h3>
      ${high.length ? rows(high) : '<p style="color:var(--text-sub);font-size:12px">해당 없음</p>'}
    </div>
    <div class="report-sec">
      <h3>🟡 주요 뉴스 (${medium.length}건)</h3>
      ${medium.length ? rows(medium) : '<p style="color:var(--text-sub);font-size:12px">해당 없음</p>'}
    </div>
    <div class="report-sec">
      <h3>📊 섹터별 현황</h3>
      ${Object.entries(bySegMap).map(([s, n]) => `
        <div class="report-stat"><span>${segKo(s)}</span><strong>${n}건</strong></div>`).join('')}
    </div>`;
  openModal('reportModal');
}

// ── Modal ──
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ── Events ──
function bindEvents() {
  document.getElementById('chipBar').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#chipBar .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    applyFilters();
  });
  document.getElementById('btnSettings').onclick = () => openModal('settingsModal');
  document.getElementById('btnReport').onclick   = generateReport;
  document.getElementById('btnSave').onclick     = saveSettings;
  document.getElementById('btnPrint').onclick    = () => window.print();
  document.getElementById('sSrc').onchange = function() {
    document.getElementById('apiKeyGroup').style.display = this.value === 'gnews' ? 'block' : 'none';
  };
  document.querySelectorAll('[data-close]').forEach(el => {
    el.onclick = () => closeModal(el.dataset.close);
  });
  document.querySelectorAll('.overlay').forEach(el => {
    el.onclick = e => { if (e.target === el) closeModal(el.id); };
  });
  ['fReg','fImp'].forEach(id => document.getElementById(id).onchange = applyFilters);
  document.getElementById('fSearch').oninput = applyFilters;
}

// ── Init ──
async function init() {
  loadSettings();
  let raw = [], mock = true;

  if (state.settings.source === 'gnews' && state.settings.apiKey) {
    document.getElementById('statusText').textContent = 'GNews API 로딩 중...';
    try {
      raw = await fetchGNews(state.settings.apiKey);
      for (let i = 0; i < Math.min(10, raw.length); i++) {
        raw[i].title_ko   = await translate(raw[i].title_en);
        raw[i].summary_ko = await translate(raw[i].summary_en);
        raw[i]._ko = true;
      }
      mock = false;
    } catch (e) {
      console.warn('GNews 실패, 샘플 데이터 사용:', e);
      raw = MOCK;
    }
  } else {
    raw = MOCK;
  }

  document.getElementById('mockBanner').style.display = mock ? 'flex' : 'none';
  state.articles = process(raw);
  if (state.settings.highFirst) state.articles.sort((a, b) => b.score - a.score);

  renderTicker();
  renderMarket();
  renderStats(state.articles);
  renderFeatured(state.articles);
  applyFilters();
  document.getElementById('statusText').textContent = `${state.articles.length}건 로드됨`;
}

window.addEventListener('DOMContentLoaded', () => { bindEvents(); init(); });
