// Multi-language Translation Dictionaries
const TRANSLATIONS = {
    ko: {
        nav_home: "홈",
        nav_dashboard: "대시보드",
        nav_feed: "뉴스 피드",
        nav_review: "학습 노트",
        nav_qa: "기술 Q&A",
        system_online: "시스템 정상 작동 중",
        demo_user: "데모 사용자: JD",

        // Home page
        home_tag: "차세대 반도체 인텔리전스",
        home_title: "실리콘 세기를 위한 정밀 학습 어시스턴트",
        home_desc: "포토리소그래피부터 패키징까지, 반도체 8대 공정의 복잡한 메커니즘을 마스터하세요. 실시간 뉴스 피드, 공정별 체크리스트, AI 기술 Q&A 어시스턴트를 제공합니다.",
        home_btn_dash: "대시보드로 이동",
        home_btn_qa: "AI Q&A 시작하기",
        home_processes_title: "반도체 8대 공정 도서관",

        // Dashboard page
        dash_chart_title: "반도체 공정별 기준 수율 곡선",
        dash_chart_footnote: "* 빨간 선은 각 공정 챔버 전체의 기준 수율 목표를 나타냅니다.",
        dash_chart_detail: "상세 수율 분석 보기 &rarr;",
        dash_checklist_title: "현재 진행 중인 학습 목표",
        dash_streak_title: "연속 학습일",
        dash_streak_desc: "일일 목표 120% 달성 완료",
        dash_streak_sub: "다음 목표: 7일 연속 학습 보너스",
        dash_dist_title: "공정 노드 지식 분포도",
        dash_quick_qa_title: "AI 어시스턴트 빠른 질문 추천",

        // News Feed page
        feed_title: "반도체 업계 실시간 피드",
        feed_desc: "글로벌 반도체 제조 생태계에서 수집되는 실시간 정밀 인텔리전스.",
        feed_placeholder: "키워드로 뉴스 기사 검색 (예: TSV, GAA, EUV)...",
        feed_share_title: "업계 인텔리전스 공유하기",
        feed_form_title: "기사 제목",
        feed_form_source: "회사 / 출처",
        feed_form_desc: "상세 기술 및 시장 업데이트 설명",
        feed_form_submit: "피드에 게시",
        feed_trending_tag: "인기 트렌드 토픽",
        feed_trending_title: "High-NA EUV 양산 도입 현황",
        feed_trending_desc: "High-NA 리소그래피는 더 무거워진 렌즈 컬럼과 정밀한 온도 보정이 필요하여 Fab 레이아웃 규격의 변경을 강제하고 있습니다.",
        feed_trending_btn: "Q&A에서 연관 분석 보기",

        // Review Notes page
        review_tab_date: "날짜별",
        review_tab_process: "공정별",
        review_chip_title: "공정 단계 필터링",
        review_create_title: "새 학습 노트 작성",
        review_create_submit: "노트 등록",
        review_notes_timeline: "학습 노트 타임라인",
        review_notes_timeline_filter: "공정별 노출 필터: ",

        // Q&A page
        qa_ai_title: "반도체 특화 AI 어시스턴트",
        qa_input_placeholder: "TSV 수율 스트레스, EUV stochastic 노이즈, GAA 나노시트 등에 대해 질문해 보세요...",
        qa_blueprints_title: "주요 기술 청사진 (클릭 시 즉시 답변)",
        qa_blueprints_desc: "아래 항목을 클릭해 AI의 정밀 공정 도식과 기술 분석을 확인해보세요.",
        qa_didyouknow_title: "알고 계셨나요?",
        qa_didyouknow_desc: "실리콘 관통 전극(TSV)은 칩 내부에 수천 개의 미세한 구멍을 뚫어 칩을 수직으로 연결하는 기술로, HBM 메모리의 핵심입니다.",

        // Modal
        modal_summary_title: "핵심 3줄 요약",
        modal_summary_details: "본문 자세히 보기"
    },
    en: {
        nav_home: "Home",
        nav_dashboard: "Dashboard",
        nav_feed: "News Feed",
        nav_review: "Review Notes",
        nav_qa: "Technical Q&A",
        system_online: "System Online",
        demo_user: "Demo User: JD",

        // Home page
        home_tag: "Next-Gen Semiconductor Intelligence",
        home_title: "Precision Study Assistant for the Silicon Century",
        home_desc: "Navigate the complexity of semiconductor processes—from Photolithography to Packaging. Access real-time industry updates, review checklists, and AI-powered technical Q&A.",
        home_btn_dash: "Go to Dashboard",
        home_btn_qa: "Ask AI Q&A",
        home_processes_title: "The 8 Great Semiconductor Processes",

        // Dashboard page
        dash_chart_title: "Semiconductor Process Yield Curve",
        dash_chart_footnote: "* Red line represents the target yield benchmark across different processing chambers.",
        dash_chart_detail: "Detail Analytics &rarr;",
        dash_checklist_title: "Active Study Checklist",
        dash_streak_title: "Study Streak",
        dash_streak_desc: "120% target achieved",
        dash_streak_sub: "Next milestone: 7-day streak bonus reward",
        dash_dist_title: "Knowledge Distribution",
        dash_quick_qa_title: "Ask Assistant Quick Links",

        // News Feed page
        feed_title: "Industry News Feed",
        feed_desc: "Real-time intelligence from the semiconductor manufacturing ecosystem.",
        feed_placeholder: "Search news articles by keywords (e.g. TSV, GAA, EUV)...",
        feed_share_title: "Share Industry Intel",
        feed_form_title: "Article Title",
        feed_form_source: "Company / Tag",
        feed_form_desc: "Short Description",
        feed_form_submit: "Post to Feed",
        feed_trending_tag: "Trending Topic",
        feed_trending_title: "High-NA EUV Integration",
        feed_trending_desc: "Fab installation requirements are shifting as high-NA lithography introduces heavier lens columns and thermal correction complexities.",
        feed_trending_btn: "Explore Q&A Analysis",

        // Review Notes page
        review_tab_date: "BY DATE",
        review_tab_process: "BY PROCESS",
        review_chip_title: "Filter by Process Stage",
        review_create_title: "Create Study Note",
        review_create_submit: "Add Review Note",
        review_notes_timeline: "Notes Timeline",
        review_notes_timeline_filter: "Process: ",

        // Q&A page
        qa_ai_title: "Semiconductor AI Assistant",
        qa_input_placeholder: "Ask about TSVs, EUV stochastics, GAA architecture, packaging...",
        qa_blueprints_title: "Technical Blueprints",
        qa_blueprints_desc: "Click a blueprint to populate it in the chat console and analyze its structural schematics.",
        qa_didyouknow_title: "Did you know?",
        qa_didyouknow_desc: "Through-Silicon Vias (TSVs) allow memory cells to stack directly over logic, dramatically reducing latency compared to traditional routing lanes.",

        // Modal
        modal_summary_title: "3-Line Summary",
        modal_summary_details: "Read Full Details"
    }
};

// Global Current Language
let currentLanguage = localStorage.getItem('semilog_lang') || 'ko';

// News Articles with Full Body and 3-Line Summary (Both English and Korean Versions)
const NEWS_DATA = {
    en: [
        {
            id: 1,
            title: "SK Hynix Accelerates HBM4 Integration via Advanced TSV Stacking",
            source: "SK Hynix",
            tag: "Packaging",
            date: "June 18, 2026",
            desc: "SK Hynix announced key upgrades to its vertical interconnect packaging pipelines. By leveraging customized Base Dies developed with TSMC, the new HBM4 module uses fine-pitch Through-Silicon Via (TSV) configurations to maximize routing efficiency.",
            body: "SK Hynix has officially entered the tooling phase for HBM4 (6th generation High Bandwidth Memory) stacks. The primary engineering challenge of HBM4 lies in handling thermal stresses while increasing vertical wiring density. The new base die, manufactured using TSMC's advanced logic process, incorporates sub-micron Through-Silicon Via (TSV) channels. By packing more TSV structures into the memory stack, the bandwidth climbs to 1.6 TB/s per stack, while reducing thermal resistance through custom materials.\n\nIn addition, SK Hynix is preparing to move from microbump reflow towards copper-to-copper Hybrid Bonding (Direct Bond Interconnect) as pad pitches approach sub-9um ranges, marking a major milestone in advanced memory packaging.",
            summary: [
                "SK Hynix uses advanced fine-pitch TSV technology to hit HBM4 memory bandwidth of 1.6 TB/s.",
                "Customized base dies developed with TSMC reduce mechanical stress and improve electrical properties.",
                "Transitioning to Direct Copper-to-Copper Hybrid Bonding as interconnect pitches shrink below 9 micrometers."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU"
        },
        {
            id: 2,
            title: "Samsung Electronics Succeeds in GAA 3nm Node Stable Yield Scaling",
            source: "Samsung",
            tag: "Manufacturing",
            date: "June 17, 2026",
            desc: "Samsung Electronics reports reaching stable yield rates for its 3nm Gate-All-Around (GAA) nanosheet node, outperforming legacy FinFET layouts in electrostatic control.",
            body: "Samsung's Foundry Division has reached its target 3nm GAA (Gate-All-Around) yield line. GAA technology replaces traditional FinFET structures by wrapping the gate fully around the channel nanosheets. This provides excellent channel control, allowing chip designers to shrink supply voltage and leakage currents.\n\nThe yield breakthrough is attributed to automated metrology scans that correct thickness variations in the sacrificial SiGe/Si epitaxial layers. The resulting nanosheets maintain uniform channel mobility across the wafer, accelerating supply to main consumer chips.",
            summary: [
                "Samsung achieves stable yield targets for its 3nm Gate-All-Around (GAA) nanosheet node.",
                "GAA wraps the gate entirely around nanosheets, lowering power leakage relative to FinFET.",
                "Thickness variance in SiGe/Si layers was optimized using automated wafer metrology."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGp4MqP3-DvacMQwyMK_20naHE69EiXsrDeQwHJxcWdIkxCuE8ygFWVI2-1-GIVa6LmQ0dHPe9wbS0qFCARqSu5NpkUuTFz6PrZvqKpMtc-I-ioK1QFezi0jpJs7JuJSfx-ml00iDJr8TCgF2aoNIN44C3MbnwWC9Ltn8BfK2Wl1r-HqavTKakcmGi0SXainpOyWX5NNGoglkzz91eE0t1TFy_i-W-ar2X_76eMBllIwUL2wzKx0bBlfT9dSs_GesypAPDqQcsBkg",
        },
        {
            id: 3,
            title: "TSMC N2 Nanosheet Pilot Fab Yields and TSV Packaging Tests",
            source: "TSMC",
            tag: "Yield Curve",
            date: "June 16, 2026",
            desc: "TSMC is accelerating packaging validation for N2 nanosheet wafer designs. Initial testing includes integrated TSV interconnects for monolithic and chiplet stack configurations.",
            body: "TSMC's Baoshan N2 (2nm) pilot facility has reported robust early transistor metrics. The N2 node uses nanosheet architectures to sustain Moore's Law scaling. Crucially, TSMC is pairing N2 logic with advanced CoWoS and SoIC packaging.\n\nEarly testing shows that silicon-through-vias (TSVs) routed through active logic dies maintain signal integrity even under high-frequency thermal loads, facilitating massive chiplet assemblies for AI data centers.",
            summary: [
                "TSMC 2nm (N2) pilot fab records solid initial transistor performance parameters.",
                "Monolithic logic is integrated with advanced packaging styles utilizing high-density TSVs.",
                "Signal integrity tests verify TSV reliability under high thermal loads."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqOhrGps0pRU-K8QmixTrXnTXCQvZdLA2vvZG9DnJ1NrlHu3iq8DTP8MYds8edODtH2OZfOqVRa-jvInSvMZAmKfFctvJBqxrBcVA6UiF7mflWO65mRKx2NyEzFDk6q_grGLQcCpb-MR5toNVJjOTXZR-3t6nOXIDQGAgRmgwb0XbciK0K_DKuUxCrlzeb1O0Nk_pVwBwd1u-5pq2eqOQxA7dU3uFkBqS51MXLTsSBPaW40AwSv2my_YNd66UFcDycmFqJ7C6BTk"
        }
    ],
    ko: [
        {
            id: 1,
            title: "SK하이닉스, 첨단 TSV 패킹 기술로 HBM4 적층 통합 가속화",
            source: "SK Hynix",
            tag: "패키징",
            date: "2026년 6월 18일",
            desc: "SK하이닉스가 수직 상호연결 패키징 공정의 주요 업그레이드를 발표했습니다. TSMC와 공동 개발하는 맞춤형 베이스 다이(Base Die)를 활용하여 HBM4 모듈은 미세 피치 실리콘 관통 전극(TSV) 구조로 라우팅 효율을 극대화합니다.",
            body: "SK하이닉스가 HBM4(6세대 고대역폭 메모리) 적층을 위한 장비 구축 및 툴링 단계에 공식 진입했습니다. HBM4 적층의 가장 큰 기술적 과제는 수직 전선 밀도를 높이면서 열 방출 스트레스를 최소화하는 것입니다. TSMC의 첨단 로직 공정으로 제조되는 새로운 베이스 다이는 서브 마이크론 수준의 미세 실리콘 관통 전극(TSV) 채널을 포함하고 있습니다. 스택당 더 많은 TSV 연결 구조를 촘촘히 배치함으로써 대역폭이 1.6 TB/s까지 향상되었으며 맞춤형 신소재 개발로 열 저항을 감소시켰습니다.\n\n나아가 SK하이닉스는 접합 패드 피치가 9마이크로미터 이하로 좁아짐에 따라 기존 마이크로범프 리플로우 방식에서 구리-구리 하이브리드 본딩(Direct Bond Interconnect)으로 전환을 서두르고 있어 차세대 메모리 패키징 경쟁에서 중대한 전환점을 맞이하고 있습니다.",
            summary: [
                "SK하이닉스는 미세 피치 TSV 기술을 고도화하여 HBM4 스택당 1.6 TB/s의 대역폭을 확보했습니다.",
                "TSMC와 공동 개발한 맞춤형 로직 베이스 다이를 적용해 열적 스트레스를 완화하고 전기 신호를 강화했습니다.",
                "접합부 피치가 9㎛ 미만으로 축소됨에 따라 구리-구리 직접 하이브리드 본딩 방식으로의 전환을 착수했습니다."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU"
        },
        {
            id: 2,
            title: "삼성전자, 3나노 GAA 공정 안정 수율 스케일링 성공",
            source: "Samsung",
            tag: "제조",
            date: "2026년 6월 17일",
            desc: "삼성전자 파운드리 사업부가 3나노 게이트올어라운드(GAA) 나노시트 노드에서 안정적인 수율 라인을 달성하여 기존 FinFET 대비 뛰어난 정전기 제어 능력을 보여주었습니다.",
            body: "삼성전자 파운드리 사업부가 내부 목표 수준의 3나노 GAA(Gate-All-Around) 양산 수율을 확보했습니다. GAA 기술은 게이트가 채널 나노시트의 4면을 완전히 감싸는 방식으로 기존 FinFET을 대체합니다. 이를 통해 극도로 높은 채널 제어력을 확보함으로써 동작 전압을 낮추고 누설 전류를 줄이는 데 성공했습니다.\n\n수율 개선의 주요 원인은 희생층 역할을 하는 SiGe/Si 에피택셜 레이어의 두께 편차를 자동으로 보정하는 계측 장비 최적화입니다. 이를 통해 웨이퍼 전 영역에서 균일한 채널 이동도를 확보하게 되었습니다.",
            summary: [
                "삼성전자는 3나노 GAA 나노시트 양산 노드에서 안정적이고 계획된 수율 수준에 진입했습니다.",
                "GAA는 게이트로 채널을 360도 감싸 기존 FinFET 구조 대비 누설 전력을 크게 개선했습니다.",
                "웨이퍼 전체의 SiGe/Si 두께 편차를 정밀 제어하는 자동 웨이퍼 계측 공정을 도입해 최적화했습니다."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGp4MqP3-DvacMQwyMK_20naHE69EiXsrDeQwHJxcWdIkxCuE8ygFWVI2-1-GIVa6LmQ0dHPe9wbS0qFCARqSu5NpkUuTFz6PrZvqKpMtc-I-ioK1QFezi0jpJs7JuJSfx-ml00iDJr8TCgF2aoNIN44C3MbnwWC9Ltn8BfK2Wl1r-HqavTKakcmGi0SXainpOyWX5NNGoglkzz91eE0t1TFy_i-W-ar2X_76eMBllIwUL2wzKx0bBlfT9dSs_GesypAPDqQcsBkg"
        },
        {
            id: 3,
            title: "TSMC, 2나노(N2) 나노시트 파일럿 수율 분석 및 TSV 패키징 테스트",
            source: "TSMC",
            tag: "수율 곡선",
            date: "2026년 6월 16일",
            desc: "TSMC가 2나노 나노시트 공정의 패키징 검증을 서두르고 있습니다. 초기 테스트에는 모놀리식 및 칩렛 적층 구성을 위한 고밀도 TSV(실리콘 관통 전극) 상호연결이 포함됩니다.",
            body: "TSMC의 바오산 N2(2나노) 파일럿 라인에서 초기 트랜지스터 수율 지표가 강력하게 측정되었습니다. N2 공정은 무어의 법칙을 유지하기 위해 기존 FinFET 대신 나노시트 트랜지스터를 사용합니다. 아울러 TSMC는 2나노 로직 칩을 CoWoS 및 SoIC와 같은 첨단 패키징에 실시간 결합하고 있습니다.\n\n적층된 액티브 로직 다이를 통과하는 실리콘 관통 전극(TSV)이 고주파 및 열 부하 상황에서도 우수한 신호 신뢰도를 증명함으로써, AI 데이터센터용 거대 칩렛 패키지 양산 가능성을 확보했습니다.",
            summary: [
                "TSMC 2나노(N2) 파일럿 라인의 초기 트랜지스터 동작 성능이 긍정적으로 확인되었습니다.",
                "차세대 로직 다이에 초고밀도 TSV를 정밀하게 결합하는 테스트를 진행하고 있습니다.",
                "고부하 동작 상황에서 TSV 연결부의 신호 무결성과 내열 신뢰성 검증을 마쳤습니다."
            ],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqOhrGps0pRU-K8QmixTrXnTXCQvZdLA2vvZG9DnJ1NrlHu3iq8DTP8MYds8edODtH2OZfOqVRa-jvInSvMZAmKfFctvJBqxrBcVA6UiF7mflWO65mRKx2NyEzFDk6q_grGLQcCpb-MR5toNVJjOTXZR-3t6nOXIDQGAgRmgwb0XbciK0K_DKuUxCrlzeb1O0Nk_pVwBwd1u-5pq2eqOQxA7dU3uFkBqS51MXLTsSBPaW40AwSv2my_YNd66UFcDycmFqJ7C6BTk"
        }
    ]
};

// Default Checklists
const CHECKLIST_DATA = {
    en: [
        { id: 1, text: "Compare Samsung GAA (SF3) vs TSMC N2 Nanosheet architecture", checked: true },
        { id: 2, text: "Review stochastic photon noise limits in High-NA EUV lithography", checked: false },
        { id: 3, text: "Explain CTE mismatch stresses in HBM3e stack vertical interconnects (TSV)", checked: false },
        { id: 4, text: "Understand Atomic Layer Etching (ALE) mechanism for self-aligned contact formation", checked: true }
    ],
    ko: [
        { id: 1, text: "삼성 GAA (SF3) vs TSMC N2 나노시트 구조 비교 및 분석하기", checked: true },
        { id: 2, text: "High-NA EUV 리소그래피 공정 내 포톤 샷 노이즈 수치 복습", checked: false },
        { id: 3, text: "HBM3e 메모리 적층 내 TSV 수직 연결부의 열팽창계수(CTE) 기계 응력 분석", checked: false },
        { id: 4, text: "자기정렬 콘택트 형성을 위한 원자층 식각(ALE) 메커니즘 설명하기", checked: true }
    ]
};

// Default Review Notes
const NOTES_DATA = {
    en: [
        {
            id: 1,
            title: "EUV Stochastic Defect Mechanism",
            process: "Photolithography",
            content: "EUV stochastic variations refer to random, non-repeating defects that occur during extreme ultraviolet exposure. These defects arise from photon shot noise and inhomogeneous photoresist absorption, causing line edge roughness (LER) and micro-bridging.",
            date: "June 19, 2026",
            day: 19,
            bookmarked: false,
            tags: ["#EUV", "#Stochastics", "#Lithography"]
        },
        {
            id: 2,
            title: "Atomic Layer Deposition (ALD) Conformality",
            process: "Deposition",
            content: "ALD is self-limiting and offers precise thickness control at the atomic level. This makes it crucial for deposition of high-k metal gate oxides inside GAA nanosheets where aspect ratios are high.",
            date: "June 12, 2026",
            day: 12,
            bookmarked: true,
            tags: ["#ALD", "#High-K", "#Deposition"]
        },
        {
            id: 3,
            title: "Through-Silicon Via (TSV) Mechanical Stresses",
            process: "Packaging",
            content: "TSVs are copper cylinders passing vertically through the silicon wafer. Due to the coefficient of thermal expansion (CTE) mismatch between Copper and Silicon, significant mechanical stresses can develop around the TSV during thermal cycling, impacting carrier mobility.",
            date: "June 10, 2026",
            day: 10,
            bookmarked: false,
            tags: ["#TSV", "#Packaging", "#HBM"]
        }
    ],
    ko: [
        {
            id: 1,
            title: "EUV 스토캐스틱(확률적) 결함 분석",
            process: "Photolithography",
            content: "EUV 확률적 편차는 극자외선 노광 공정에서 발생하는 비반복적이고 무작위적인 결함을 뜻합니다. 이는 미세한 포톤 개수의 불균일(포톤 샷 노이즈)과 포토레지스트 흡수 불균일로 인해 라인 에지 거칠기(LER)나 미세 가교(Micro-bridge) 현상을 일으킵니다.",
            date: "2026년 6월 19일",
            day: 19,
            bookmarked: false,
            tags: ["#극자외선", "#스토캐스틱", "#노광공정"]
        },
        {
            id: 2,
            title: "원자층 증착(ALD) 박막 정합성",
            process: "Deposition",
            content: "ALD 공정은 자체 제한적 표면 반응 메커니즘을 가집니다. 따라서 종횡비가 아주 큰 GAA 나노시트 트랜지스터 내부 구조에서도 나노 수준의 일정한 두께로 고유전율(High-k) 절연막을 균일하게 적층할 수 있는 핵심 기술입니다.",
            date: "2026년 6월 12일",
            day: 12,
            bookmarked: true,
            tags: ["#ALD증착", "#하이K", "#박막증착"]
        },
        {
            id: 3,
            title: "실리콘 관통 전극(TSV) 열팽창 응력 분석",
            process: "Packaging",
            content: "TSV는 구리 기둥이 실리콘 웨이퍼를 수직 관통하는 연결부입니다. 구리와 실리콘 간의 열팽창계수(CTE) 불일치로 인해 칩이 작동할 때 고열에서 강한 열팽창 응력이 주변 실리콘에 가해져 전하 이동도에 기계적 왜곡을 줍니다.",
            date: "2026년 6월 10일",
            day: 10,
            bookmarked: false,
            tags: ["#TSV구조", "#패키징", "#HBM적층"]
        }
    ]
};

// Predefined Q&A mapping
const PREDEFINED_QA = {
    ko: {
        "compare hbm3e thermal vias vs hybrid bonding": {
            answer: "HBM3e는 현재 마이크로범프를 이용한 어드밴스드 MR-MUF 공정 또는 TC-NCF 기술에 기반하고 있습니다. 신호를 전송하고 고열을 배출하기 위해 TSV 전극 라인을 배치하지만, 16단 적층 수준에 도달하면 칩 사이 접착 필름층의 높은 열 저항이 심각한 병목을 유발합니다. \n\n**하이브리드 본딩(Direct Copper-to-Copper)** 기술은 마이크로범프 갭을 제거합니다. 주요 강점:\n\n1. **열 소산 개선:** 유기물 접착층이나 갭이 사라져 수직 열 전도율이 35% 이상 대폭 증대됩니다.\n2. **초고밀도 피치:** 기존 범프 피치(10~15㎛) 대비 1㎛ 미만까지 축소 가능해 상호연결 패드 수가 폭발적으로 증가합니다.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqOhrGps0pRU-K8QmixTrXnTXCQvZdLA2vvZG9DnJ1NrlHu3iq8DTP8MYds8edODtH2OZfOqVRa-jvInSvMZAmKfFctvJBqxrBcVA6UiF7mflWO65mRKx2NyEzFDk6q_grGLQcCpb-MR5toNVJjOTXZR-3t6nOXIDQGAgRmgwb0XbciK0K_DKuUxCrlzeb1O0Nk_pVwBwd1u-5pq2eqOQxA7dU3uFkBqS51MXLTsSBPaW40AwSv2my_YNd66UFcDycmFqJ7C6BTk"
        },
        "euv lithography line edge roughness causes": {
            answer: "EUV 노광 공정에서 발생하는 LER(라인 에지 거칠기)의 주요 원인은 **스토캐스틱(확률적 현상)**입니다. 주 원인은 다음과 같습니다:\n\n1. **포톤 샷 노이즈:** 13.5nm 파장을 가지는 EUV는 에너지가 크기 때문에 동일 조사량 조건에서 공급되는 절대적인 포톤 수가 적습니다. 따라서 포톤 도달 위치의 무작위 분산율이 높아집니다.\n2. **화학적 스토캐스틱:** 포토레지스트 내부의 PAG(광산발생제) 분포도 불균일과 산 확산 범위의 무작위성에 기인해 경계면이 오차를 겪습니다.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU"
        },
        "gate-all-around (gaa) transistor structural advantages": {
            answer: "GAA(나노시트) 트랜지스터는 3나노 노드부터 기존 FinFET을 전격 대체하고 있습니다. 주요 구조적 이점:\n\n1. **전기장 통제력 극대화:** 게이트 전극이 채널의 4면을 완전히 감싸기 때문에 드레인 유도 장벽 감소(DIBL)와 대기 상태 누설 전류를 획기적으로 차단합니다.\n2. **유연한 채널 폭 조절:** 이산적인 지느러미 형태의 핀(Fin)과 달리 나노시트의 폭을 레이아웃 단계에서 가변적으로 커스터마이징하여 전류 구동 능력을 동적으로 조절할 수 있습니다.\n3. **소자 집적도 증가:** 게이트 폭과 피치를 추가 축소하여 동일 면적 대비 더 많은 연산 로직을 배치할 수 있습니다.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGp4MqP3-DvacMQwyMK_20naHE69EiXsrDeQwHJxcWdIkxCuE8ygFWVI2-1-GIVa6LmQ0dHPe9wbS0qFCARqSu5NpkUuTFz6PrZvqKpMtc-I-ioK1QFezi0jpJs7JuJSfx-ml00iDJr8TCgF2aoNIN44C3MbnwWC9Ltn8BfK2Wl1r-HqavTKakcmGi0SXainpOyWX5NNGoglkzz91eE0t1TFy_i-W-ar2X_76eMBllIwUL2wzKx0bBlfT9dSs_GesypAPDqQcsBkg"
        }
    },
    en: {
        "compare hbm3e thermal vias vs hybrid bonding": {
            answer: "HBM3e currently relies on Advanced Mass Reflow (MR-MUF) or Thermal Compression with Non-Conductive Film (TC-NCF) with microbumps. Microbumps utilize vertical TSVs to route signals and dissipate heat. However, as stacks reach 16-high, the thermal resistance of the adhesive layer between chips becomes a major bottleneck. \n\n**Hybrid Bonding (Direct Copper-to-Copper bonding)** removes the microbump gap entirely. Key highlights:\n\n1. **Thermal Dissipation:** Direct bonding reduces thermal resistance by up to 35% because there is no organic/underfill interface.\n2. **Density:** Pad pitch can shrink below 1µm compared to 10-15µm for microbumps, expanding communication lanes.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqOhrGps0pRU-K8QmixTrXnTXCQvZdLA2vvZG9DnJ1NrlHu3iq8DTP8MYds8edODtH2OZfOqVRa-jvInSvMZAmKfFctvJBqxrBcVA6UiF7mflWO65mRKx2NyEzFDk6q_grGLQcCpb-MR5toNVJjOTXZR-3t6nOXIDQGAgRmgwb0XbciK0K_DKuUxCrlzeb1O0Nk_pVwBwd1u-5pq2eqOQxA7dU3uFkBqS51MXLTsSBPaW40AwSv2my_YNd66UFcDycmFqJ7C6BTk"
        },
        "euv lithography line edge roughness causes": {
            answer: "Line Edge Roughness (LER) in EUV lithography is primarily driven by **Stochastics (Randomness)** at sub-32nm pitches. The fundamental causes include:\n\n1. **Photon Shot Noise:** At 13.5nm wavelength, EUV photons carry 14x more energy than 193nm DUV photons. Thus, for the same exposure dose, there are far fewer photons available, leading to high spatial Poisson fluctuations.\n2. **Chemical Stochastics:** Variations in photoresist chemistry, such as photoacid generator (PAG) density, distribution, and acid diffusion lengths, lead to uneven boundary dissolution.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU"
        },
        "gate-all-around (gaa) transistor structural advantages": {
            answer: "GAA (Nanosheet) transistors replace FinFETs starting at 3nm nodes. Key advantages:\n\n1. **Electrostatic Control:** The gate wraps completely around the channel (nanosheet), minimizing drain-induced barrier lowering (DIBL) and sub-threshold leakage.\n2. **Drive Current Optimization:** Nanosheet width can be tailored dynamically (unlike discrete FinFET fins). Wider sheets deliver higher performance, while narrower sheets minimize power.\n3. **Sub-3nm Scaling:** GAA layout offers higher density and allows logic gate sizing reductions.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGp4MqP3-DvacMQwyMK_20naHE69EiXsrDeQwHJxcWdIkxCuE8ygFWVI2-1-GIVa6LmQ0dHPe9wbS0qFCARqSu5NpkUuTFz6PrZvqKpMtc-I-ioK1QFezi0jpJs7JuJSfx-ml00iDJr8TCgF2aoNIN44C3MbnwWC9Ltn8BfK2Wl1r-HqavTKakcmGi0SXainpOyWX5NNGoglkzz91eE0t1TFy_i-W-ar2X_76eMBllIwUL2wzKx0bBlfT9dSs_GesypAPDqQcsBkg"
        }
    }
};

// State Variables
let currentTab = 'home';
let reviewFilterMode = 'date';
let selectedProcessFilter = '';
let currentFeedFilter = 'all';

// Load or Initialize lists
let newsList = JSON.parse(localStorage.getItem('semilog_news_list')) || NEWS_DATA;
let notesList = JSON.parse(localStorage.getItem('semilog_notes_list')) || NOTES_DATA;
let checklistState = JSON.parse(localStorage.getItem('semilog_checklist_state')) || CHECKLIST_DATA;

// Save current arrays
function saveState() {
    localStorage.setItem('semilog_news_list', JSON.stringify(newsList));
    localStorage.setItem('semilog_notes_list', JSON.stringify(notesList));
    localStorage.setItem('semilog_checklist_state', JSON.stringify(checklistState));
}

// Language Switcher Function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('semilog_lang', lang);

    // Toggle active classes on language buttons
    const langKo = document.getElementById('lang-ko');
    const langEn = document.getElementById('lang-en');

    if (lang === 'ko') {
        langKo.className = 'px-2.5 py-1 text-xs font-extrabold rounded transition-all bg-primary text-white';
        langEn.className = 'px-2.5 py-1 text-xs font-extrabold rounded transition-all text-dark-plum/70 hover:bg-background';
    } else {
        langEn.className = 'px-2.5 py-1 text-xs font-extrabold rounded transition-all bg-primary text-white';
        langKo.className = 'px-2.5 py-1 text-xs font-extrabold rounded transition-all text-dark-plum/70 hover:bg-background';
    }

    // Apply translations to all DOM elements with matching data tags or IDs
    const dict = TRANSLATIONS[lang];
    for (const [id, value] of Object.entries(dict)) {
        const el = document.getElementById(id);
        if (el) {
            // Update placeholders if input/textarea, else textContent
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerText = value;
            }
        }
    }

    // Re-render UI elements to sync language arrays
    if (currentTab === 'dashboard') {
        renderDashboardChecklist();
    } else if (currentTab === 'feed') {
        renderNewsFeed();
    } else if (currentTab === 'review') {
        renderReviewNotes();
        renderCalendar();
        renderProcessChips();
    } else if (currentTab === 'qa') {
        initChatLog();
    }
}

// SPA Routing
function navigateTo(tabId) {
    currentTab = tabId;

    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) targetView.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const targetLink = document.getElementById(`nav-${tabId}`);
    if (targetLink) targetLink.classList.add('active');

    // Refresh page structures
    changeLanguage(currentLanguage);
}

// ----------------------------------------------------
// DASHBOARD VIEW LOGIC
// ----------------------------------------------------
function renderDashboardChecklist() {
    const container = document.getElementById('checklist-container');
    if (!container) return;

    const list = checklistState[currentLanguage];
    container.innerHTML = '';

    list.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex items-start gap-3 p-3 bg-surface border border-outline-variant/60 rounded-xl hover:border-primary/50 transition-colors';
        itemDiv.innerHTML = `
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleChecklistItem(${item.id})" class="mt-0.5 rounded text-primary focus:ring-primary border-outline-variant">
            <span class="text-sm font-semibold text-dark-plum ${item.checked ? 'line-through opacity-50' : ''}">${item.text}</span>
        `;
        container.appendChild(itemDiv);
    });

    const streakText = document.getElementById('streak-count');
    const checkedCount = list.filter(c => c.checked).length;
    if (streakText) {
        streakText.innerText = `${checkedCount}/${list.length} Done`;
    }
}

function toggleChecklistItem(id) {
    const list = checklistState[currentLanguage];
    const updated = list.map(item => {
        if (item.id === id) {
            return { ...item, checked: !item.checked };
        }
        return item;
    });
    checklistState[currentLanguage] = updated;
    saveState();
    renderDashboardChecklist();
}

// ----------------------------------------------------
// NEWS FEED VIEW LOGIC & SEARCH ENGINE
// ----------------------------------------------------
function renderNewsFeed() {
    const grid = document.getElementById('news-feed-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const currentNews = newsList[currentLanguage];

    let filtered = currentNews;
    if (currentFeedFilter !== 'all') {
        filtered = currentNews.filter(article => article.source.toLowerCase() === currentFeedFilter.toLowerCase());
    }

    filtered.forEach(article => {
        const card = document.createElement('article');
        card.className = 'bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer';
        card.onclick = () => openArticleModal(article.id);
        card.innerHTML = `
            <div class="h-44 w-full bg-slate-100 relative">
                <img src="${article.img}" class="w-full h-full object-cover" alt="Article banner">
                <span class="absolute top-3 right-3 bg-white text-secondary font-bold text-[10px] px-2.5 py-1 rounded-full uppercase border border-secondary">${article.tag}</span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs font-bold text-primary uppercase">${article.source}</span>
                        <span class="text-[10px] text-on-surface-variant font-bold opacity-60">${article.date}</span>
                    </div>
                    <h3 class="font-bold text-dark-plum text-base mb-2 hover:text-primary transition-colors">${article.title}</h3>
                    <p class="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">${article.desc}</p>
                </div>
                <button class="text-xs font-bold text-primary hover:underline text-left">${currentLanguage === 'ko' ? '기사 전체 읽기' : 'Read full article'} &rarr;</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterFeed(source) {
    currentFeedFilter = source;
    ['all', 'Samsung', 'SKHynix'].forEach(id => {
        const button = document.getElementById(`feed-filter-${id}`);
        if (button) {
            button.className = 'px-4 py-1.5 rounded-full border border-outline-variant bg-white text-on-surface-variant font-bold text-xs uppercase hover:bg-background transition-all';
        }
    });

    const activeBtn = document.getElementById(`feed-filter-${source.replace(' ', '')}`);
    if (activeBtn) {
        activeBtn.className = 'px-4 py-1.5 rounded-full bg-primary text-white font-bold text-xs uppercase shadow-sm';
    }

    renderNewsFeed();
}

function searchFeed() {
    const query = document.getElementById('feed-search-input').value.toLowerCase().trim();
    const grid = document.getElementById('news-feed-grid');
    if (!grid) return;

    const currentNews = newsList[currentLanguage];
    let filtered = currentNews;

    if (currentFeedFilter !== 'all') {
        filtered = currentNews.filter(article => article.source.toLowerCase() === currentFeedFilter.toLowerCase());
    }

    if (query !== "") {
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.desc.toLowerCase().includes(query) ||
            article.body.toLowerCase().includes(query) ||
            article.tag.toLowerCase().includes(query)
        );
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full bg-white border border-outline-variant rounded-2xl p-8 text-center text-on-surface-variant/60 font-bold">
                ${currentLanguage === 'ko' ? '검색어와 관련된 매칭 뉴스가 없습니다. (예: "tsv", "gaa", "euv")' : 'No matching articles found. (Try searching "tsv", "gaa", or "euv")'}
            </div>
        `;
        return;
    }

    filtered.forEach(article => {
        const card = document.createElement('article');
        card.className = 'bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer';
        card.onclick = () => openArticleModal(article.id);
        card.innerHTML = `
            <div class="h-44 w-full bg-slate-100 relative">
                <img src="${article.img}" class="w-full h-full object-cover" alt="Article banner">
                <span class="absolute top-3 right-3 bg-white text-secondary font-bold text-[10px] px-2.5 py-1 rounded-full uppercase border border-secondary">${article.tag}</span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs font-bold text-primary uppercase">${article.source}</span>
                        <span class="text-[10px] text-on-surface-variant font-bold opacity-60">${article.date}</span>
                    </div>
                    <h3 class="font-bold text-dark-plum text-base mb-2 hover:text-primary transition-colors">${article.title}</h3>
                    <p class="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">${article.desc}</p>
                </div>
                <button class="text-xs font-bold text-primary hover:underline text-left">${currentLanguage === 'ko' ? '기사 전체 읽기' : 'Read full article'} &rarr;</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleNewArticle(e) {
    e.preventDefault();
    const title = document.getElementById('article-title').value;
    const source = document.getElementById('article-source').value;
    const desc = document.getElementById('article-desc').value;

    const newArtEn = {
        id: Date.now(),
        title,
        source,
        desc,
        body: desc + "\n\nThis is a custom-contributed semiconductor intelligence brief.",
        summary: [title, "Contributed by user JD.", "Source verified from local fab updates."],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU",
        tag: "Intel",
        date: "Today"
    };

    const newArtKo = {
        id: Date.now(),
        title,
        source,
        desc,
        body: desc + "\n\n이 기사는 사용자가 작성한 반도체 연구 커뮤니티 공유 자료입니다.",
        summary: [title, "사용자 JD에 의해 작성됨.", "로컬 팹 라인을 통해 소스 검증됨."],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60cVtaPV3BjLrI_fhiWCOy0A7L6MUcE6MOm3v2OIfklCiG73Iq2LTMqmI351XRUq7gcwsopy3QiANvdqXRAmXFR-IGCqjPwZOjNGP6t6m6IWdlFuFhaJI4Cj4PTZuowHiCKClbExC6Zb4ZveoYGSqzLpwBSX19ljRwjiHQfMJCTGL9DneJqyRSeTC95iNUY3_dCeBK2IGVyBgqn0A0PVC0wdbBLyz1nMklAMM96Puot5wfaYE_JOpeSPmms3haKqj154t9GO3SRU",
        tag: "인텔리전스",
        date: "오늘"
    };

    newsList.en.unshift(newArtEn);
    newsList.ko.unshift(newArtKo);
    saveState();

    document.getElementById('add-article-form').reset();
    renderNewsFeed();
    alert(currentLanguage === 'ko' ? '피드에 기사가 성공적으로 포스팅되었습니다!' : 'Article posted successfully to the community feed!');
}

// ----------------------------------------------------
// FULL DETAIL MODAL WITH 3 LINE SUMMARY
// ----------------------------------------------------
function openArticleModal(id) {
    const currentNews = newsList[currentLanguage];
    const article = currentNews.find(n => n.id === id);
    if (!article) return;

    document.getElementById('modal-article-tag').innerText = article.tag;
    document.getElementById('modal-article-source').innerText = article.source;
    document.getElementById('modal-article-date').innerText = article.date;
    document.getElementById('modal-article-title').innerText = article.title;
    document.getElementById('modal-article-img').src = article.img;
    document.getElementById('modal-article-body').innerText = article.body;

    const summaryContainer = document.getElementById('modal-article-summary');
    summaryContainer.innerHTML = '';

    const summaryLines = article.summary || [
        currentLanguage === 'ko' ? '상세 본문을 정독해 보세요.' : 'Read full text for insights.',
        currentLanguage === 'ko' ? '주요 제조사 공정 업데이트 소스입니다.' : 'Key manufacturer pipeline update.',
        currentLanguage === 'ko' ? '수율 극대화 및 미세화 관련 기사입니다.' : 'Yield optimization target details.'
    ];

    summaryLines.forEach(line => {
        const li = document.createElement('li');
        li.innerText = line;
        summaryContainer.appendChild(li);
    });

    document.getElementById('article-modal').classList.remove('hidden');
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.add('hidden');
}

// ----------------------------------------------------
// REVIEW NOTES VIEW LOGIC
// ----------------------------------------------------
function switchReviewTab(mode) {
    reviewFilterMode = mode;
    const dateBtn = document.getElementById('review-tab-date');
    const processBtn = document.getElementById('review-tab-process');
    const calendarPanel = document.getElementById('review-calendar-panel');
    const processPanel = document.getElementById('review-process-panel');

    if (mode === 'date') {
        dateBtn.className = 'flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-300 bg-primary text-white';
        processBtn.className = 'flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-300 text-on-surface-variant hover:bg-background';
        calendarPanel.classList.remove('hidden');
        processPanel.classList.add('hidden');
        selectedProcessFilter = '';
    } else {
        processBtn.className = 'flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-300 bg-primary text-white';
        dateBtn.className = 'flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-300 text-on-surface-variant hover:bg-background';
        calendarPanel.classList.add('hidden');
        processPanel.classList.remove('hidden');
    }
    renderReviewNotes();
}

function renderCalendar() {
    const daysContainer = document.getElementById('calendar-days');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';
    const totalDays = 30;
    const currentNotes = notesList[currentLanguage];
    const activeDays = currentNotes.map(n => n.day);

    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        const hasNote = activeDays.includes(day);

        dayDiv.className = `py-2 rounded-lg cursor-pointer transition-all hover:scale-110 flex items-center justify-center font-bold ${
            hasNote ? 'bg-secondary/20 text-secondary border border-secondary/40' : 'text-dark-plum/70 hover:bg-background'
        }`;
        dayDiv.innerText = day;
        dayDiv.onclick = () => {
            if (hasNote) {
                const matchingNotes = currentNotes.filter(n => n.day === day);
                renderNotesList(matchingNotes, currentLanguage === 'ko' ? `2026년 6월 ${day}일 작성 노트` : `Notes on June ${day}, 2026`);
            } else {
                alert(currentLanguage === 'ko' ? `6월 ${day}일에 작성된 학습 노트가 없습니다.` : `No review notes saved on June ${day}, 2026.`);
            }
        };
        daysContainer.appendChild(dayDiv);
    }
}

function renderProcessChips() {
    const container = document.getElementById('process-chips-container');
    if (!container) return;

    container.innerHTML = '';
    const uniqueProcesses = ["Photolithography", "Etching", "Deposition", "Oxidation", "Ion Implantation", "Metallization", "EDS", "Packaging"];

    uniqueProcesses.forEach(proc => {
        const chip = document.createElement('button');
        const isActive = selectedProcessFilter === proc;
        chip.className = `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            isActive ? 'bg-secondary text-white shadow-sm' : 'bg-background hover:bg-outline-variant/30 text-dark-plum border border-outline-variant'
        }`;
        chip.innerText = proc;
        chip.onclick = () => {
            selectedProcessFilter = selectedProcessFilter === proc ? '' : proc;
            renderProcessChips();
            renderReviewNotes();
        };
        container.appendChild(chip);
    });
}

function renderReviewNotes() {
    const currentNotes = notesList[currentLanguage];
    let filtered = currentNotes;

    if (reviewFilterMode === 'process' && selectedProcessFilter) {
        filtered = currentNotes.filter(n => n.process === selectedProcessFilter);
    }

    renderNotesList(filtered, reviewFilterMode === 'process' && selectedProcessFilter ? `Process: ${selectedProcessFilter}` : (currentLanguage === 'ko' ? "전체 저장된 노트" : "All Saved Notes"));
}

function renderNotesList(notesArray, headerText) {
    const container = document.getElementById('review-notes-container');
    const header = document.getElementById('notes-list-header');
    const counter = document.getElementById('notes-counter');

    if (!container) return;

    header.innerText = headerText;
    counter.innerText = `${notesArray.length} ${currentLanguage === 'ko' ? '개의 노트 발견됨' : 'notes found'}`;
    container.innerHTML = '';

    if (notesArray.length === 0) {
        container.innerHTML = `
            <div class="bg-white border border-outline-variant rounded-2xl p-8 text-center text-on-surface-variant/60 font-semibold">
                ${currentLanguage === 'ko' ? '저장된 학습 노트가 없습니다. 새로 등록해 보세요!' : 'No study notes found. Create a new note!'}
            </div>
        `;
        return;
    }

    notesArray.forEach(note => {
        const card = document.createElement('div');
        card.className = 'bg-white border border-outline-variant p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4 items-start';
        card.innerHTML = `
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">${note.process === 'Photolithography' ? 'light_mode' : 'science'}</span>
            </div>
            <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-primary">${note.process}</span>
                        <h4 class="font-bold text-dark-plum text-lg">${note.title}</h4>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="toggleBookmark(${note.id})" class="p-1 hover:bg-background rounded-full transition-colors text-on-surface-variant">
                            <span class="material-symbols-outlined text-sm ${note.bookmarked ? 'fill-1 text-primary' : ''}">bookmark</span>
                        </button>
                        <button onclick="deleteNote(${note.id})" class="p-1 hover:bg-red-50 rounded-full transition-colors text-red-500">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>
                <p class="text-sm text-on-surface-variant leading-relaxed mb-4">${note.content}</p>
                <div class="flex justify-between items-center">
                    <div class="flex gap-1.5 flex-wrap">
                        ${(note.tags || []).map(t => `<span class="bg-background text-[10px] px-2 py-0.5 rounded text-dark-plum font-semibold">${t}</span>`).join('')}
                    </div>
                    <span class="text-[10px] font-bold text-on-surface-variant/60">${note.date}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleBookmark(id) {
    notesList.ko = notesList.ko.map(n => n.id === id ? { ...n, bookmarked: !n.bookmarked } : n);
    notesList.en = notesList.en.map(n => n.id === id ? { ...n, bookmarked: !n.bookmarked } : n);
    saveState();
    renderReviewNotes();
}

function deleteNote(id) {
    if (confirm(currentLanguage === 'ko' ? '정말 이 노트를 삭제하시겠습니까?' : 'Are you sure you want to delete this study note?')) {
        notesList.ko = notesList.ko.filter(n => n.id !== id);
        notesList.en = notesList.en.filter(n => n.id !== id);
        saveState();
        renderReviewNotes();
        renderCalendar();
    }
}

function handleNewNote(e) {
    e.preventDefault();
    const title = document.getElementById('note-title').value;
    const process = document.getElementById('note-process').value;
    const content = document.getElementById('note-content').value;

    const newNoteEn = {
        id: Date.now(),
        title,
        process,
        content,
        date: "June 19, 2026",
        day: 19,
        bookmarked: false,
        tags: [`#${process}`, "#StudyGuide"]
    };

    const newNoteKo = {
        id: Date.now(),
        title: title,
        process,
        content: content,
        date: "2026년 6월 19일",
        day: 19,
        bookmarked: false,
        tags: [`#${process}`, "#학습가이드"]
    };

    notesList.en.unshift(newNoteEn);
    notesList.ko.unshift(newNoteKo);
    saveState();

    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';

    renderReviewNotes();
    renderCalendar();
    alert(currentLanguage === 'ko' ? '학습 노트가 추가되었습니다!' : 'Study note created successfully!');
}

// ----------------------------------------------------
// AI Q&A ASSISTANT LOGIC
// ----------------------------------------------------
const chatMessages = {
    ko: [
        { sender: 'ai', text: 'SemiLog 반도체 전문 Q&A 어시스턴트에 오신 것을 환영합니다. 리소그래피 노이즈, HBM 적층 내 TSV 열팽창 스트레스, GAA 나노시트 등 최첨단 공정 설계 사양에 대해 물어보세요!' }
    ],
    en: [
        { sender: 'ai', text: 'Welcome to SemiLog Semiconductor Q&A Assistant. Ask me any highly technical question on lithography, etching, advanced memory packaging (HBM3e/HBM4), or manufacturing yield stochastics.' }
    ]
};

function initChatLog() {
    const log = document.getElementById('qa-messages-log');
    if (!log) return;

    const messages = chatMessages[currentLanguage];
    log.innerHTML = '';

    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        if (msg.sender === 'ai') {
            msgDiv.className = 'flex items-start gap-3 fade-in';
            msgDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <span class="material-symbols-outlined text-sm">psychology</span>
                </div>
                <div class="bg-background/40 border border-outline-variant p-4 rounded-2xl rounded-tl-none max-w-[85%]">
                    <p class="text-sm font-semibold text-dark-plum whitespace-pre-line">${msg.text}</p>
                    ${msg.image ? `
                    <div class="mt-4 border border-outline-variant rounded-lg overflow-hidden max-w-md">
                        <img src="${msg.image}" class="w-full object-contain h-48" alt="Technical Schema">
                    </div>` : ''}
                </div>
            `;
        } else {
            msgDiv.className = 'flex items-start gap-3 justify-end fade-in';
            msgDiv.innerHTML = `
                <div class="bg-primary text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                    <p class="text-sm font-semibold whitespace-pre-line">${msg.text}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-dark-plum flex items-center justify-center text-white shrink-0 font-bold text-xs">
                    JD
                </div>
            `;
        }
        log.appendChild(msgDiv);
    });
    log.scrollTop = log.scrollHeight;
}

function handleSendQuestion(e) {
    e.preventDefault();
    const input = document.getElementById('qa-input-field');
    const question = input.value.trim();
    if (!question) return;

    submitQuestion(question);
    input.value = '';
}

function triggerQuickQuestion(blueprintQuestion) {
    submitQuestion(blueprintQuestion);
}

function submitQuestion(question) {
    chatMessages[currentLanguage].push({ sender: 'user', text: question });
    initChatLog();

    const log = document.getElementById('qa-messages-log');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.className = 'flex items-start gap-3 fade-in';
    typingDiv.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <span class="material-symbols-outlined text-sm animate-pulse">psychology</span>
        </div>
        <div class="bg-background/40 border border-outline-variant px-4 py-3 rounded-2xl rounded-tl-none">
            <p class="text-xs font-bold text-dark-plum/70 tracking-widest uppercase animate-pulse">
                ${currentLanguage === 'ko' ? 'AI 가상 추론 및 분석 시뮬레이션 중...' : 'Thinking / Simulating AI Inference...'}
            </p>
        </div>
    `;
    log.appendChild(typingDiv);
    log.scrollTop = log.scrollHeight;

    setTimeout(() => {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) indicator.remove();

        const key = question.toLowerCase();
        const currentPredefined = PREDEFINED_QA[currentLanguage];
        let matched = currentPredefined[key];

        if (!matched) {
            const foundKey = Object.keys(currentPredefined).find(k => key.includes(k) || k.includes(key));
            if (foundKey) {
                matched = currentPredefined[foundKey];
            }
        }

        let responseText = '';
        let responseImg = '';

        if (matched) {
            responseText = matched.answer;
            responseImg = matched.image;
        } else {
            if (currentLanguage === 'ko') {
                responseText = `차세대 고성능 반도체 공정 노드 스펙 관점 분석:\n\n입력하신 질문: "${question}"은 미세화 공정 극복 사안에 부합합니다. \n\n1. **공정 극복 해결책:** EUV 공정 미세 마스크 보정과 TSV 구리 응력 완화를 위한 신규 베리어 메탈(Cobalt/Ruthenium) 도금 기법 배치가 필요합니다.\n2. **소자 물리 최적화:** N2  nanosheet 설계 시 채널 수직 간격(Suspended channel height) 조절을 병행하여 게이트 산화막 열화를 방지해야 합니다.`;
            } else {
                responseText = `Based on semiconductor process engineering specs for high-performance computing (HPC):\n\nYour query: "${question}" pertains to advanced node integration issues.\n\n1. **Engineering Workaround:** Implement barrier metal stack upgrades (e.g. Cobalt or Ruthenium) to prevent TSV voiding and electromigration stresses.\n2. **Gate Oxide optimization:** Adjust vertical spacing inside GAA nanosheets to control threshold voltages and prevent gate leakage.`;
            }
        }

        chatMessages[currentLanguage].push({ sender: 'ai', text: responseText, image: responseImg });
        initChatLog();
    }, 1200);
}

// ----------------------------------------------------
// APP INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
