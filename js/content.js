/*
 * All bilingual text for the site lives here.
 * Each key maps to { zh: "...", en: "..." }.
 * In index.html, elements reference keys via data-i18n="key".
 * Keys ending in "_list" are arrays rendered as <li> items (data-i18n-list="key").
 * Keys ending in "_stats" are arrays of "value|label" (data-i18n-stats="key").
 * Keys ending in "_stack" are one string split on " · " into tag pills (data-i18n-tags="key").
 * Elements with data-email="key" get both their text and mailto: href from that key.
 *
 * After editing, run `node build-static.js` to re-bake the Chinese text into
 * index.html (so the page works without JavaScript and for search engines).
 */
window.RESUME_CONTENT = {
  meta_title: {
    zh: "张严之 Bruce Zhang · 个人简历",
    en: "Yanzhi (Bruce) Zhang · Resume"
  },
  meta_description: {
    zh: "张严之（Bruce Zhang）：把 AI 落到真实场景，餐厅运营自动化、AI 内容流水线、林业视觉测量。",
    en: "Yanzhi (Bruce) Zhang: putting AI to work in real settings — restaurant operations automation, an AI content pipeline, and forestry computer vision."
  },
  skip_link: { zh: "跳到主要内容", en: "Skip to main content" },
  nav_about: { zh: "简介", en: "About" },
  nav_experience: { zh: "经历", en: "Experience" },
  nav_project: { zh: "项目", en: "Project" },
  nav_education: { zh: "教育", en: "Education" },
  nav_skills: { zh: "技能", en: "Skills" },
  nav_contact: { zh: "联系", en: "Contact" },
  print_btn: { zh: "打印 / 保存 PDF", en: "Print / Save PDF" },

  name_primary: { zh: "张严之", en: "Yanzhi (Bruce) Zhang" },
  name_secondary: { zh: "Yanzhi (Bruce) Zhang", en: "张严之" },
  tagline: {
    zh: "把 AI 落到真实场景：餐厅运营自动化、AI 内容流水线、林业视觉测量。",
    en: "Putting AI to work in real settings: restaurant operations automation, an AI content pipeline, and forestry computer vision."
  },
  hero_stack: {
    zh: "AI 工作流 · 计算机视觉 · 运营自动化",
    en: "AI workflows · Computer vision · Operations automation"
  },

  about_title: { zh: "简介", en: "About" },
  about_body: {
    zh: "毕业于威尔弗里德·劳雷尔大学（Wilfrid Laurier University）计算机科学专业。现为安大略省伯灵顿 Alei Kitchen 的合伙人兼经理，从零开店，负责团队、供应链与财务流程，并把 AI 工具和自动化引入日常运营。此前曾创办茶叶品牌、联合创办留学咨询机构。业余独立开发软件项目，包括双目相机树木胸径测量（留出树 MAE 0.99 cm）、已投入日常使用的收租小程序，以及 AI 视频生产流水线。",
    en: "Computer science graduate of Wilfrid Laurier University. Partner & Manager at Alei Kitchen in Burlington, Ontario — opened the restaurant from scratch, runs the team, supply chain and finance workflows, and brings AI tools and automation into day-to-day operations. Previously founded a tea brand and co-founded an overseas-education consulting agency. Independently builds software projects, including stereo-camera tree DBH measurement (0.99 cm MAE on held-out trees), a rent-collection mini program in daily use, and an AI video production pipeline."
  },

  exp_title: { zh: "工作经历", en: "Experience" },
  exp1_role: { zh: "合伙人兼经理", en: "Partner & Manager" },
  exp1_org: { zh: "Alei Kitchen", en: "Alei Kitchen" },
  exp1_loc: { zh: "安大略省伯灵顿", en: "Burlington, Ontario" },
  exp1_date: { zh: "2025.01 – 至今", en: "Jan 2025 – Present" },
  exp1_list: {
    zh: [
      "从零开始筹备并开设餐厅。",
      "编写标准作业程序（SOP）。",
      "负责员工招聘、培训与排班。",
      "管理供应商、采购与库存。",
      "厨房采用自动炒菜机，负责设备系统程序的设置。",
      "使用 AI 搭建销售看板，计算工时、工资与小费，处理月度财务、库存与成本表，并进行经营分析。"
    ],
    en: [
      "Opened the restaurant from scratch.",
      "Wrote standard operating procedures (SOPs).",
      "Recruits, trains and schedules staff.",
      "Manages suppliers, purchasing and inventory.",
      "Set up the system program for the kitchen’s automatic stir-fry machine.",
      "Uses AI for sales dashboards, hours / payroll / tips calculation, monthly finance, inventory and cost sheets, and business analysis."
    ]
  },

  /* Earlier experience (compact) */
  exp_earlier_title: { zh: "早期经历", en: "Earlier experience" },
  exp2_role: { zh: "品牌运营主管兼人力资源主管", en: "Brand Operations Supervisor & HR Supervisor" },
  exp2_org: { zh: "Développement OKI S.A.", en: "Développement OKI S.A." },
  exp2_loc: { zh: "加拿大蒙特利尔与多伦多", en: "Montréal & Toronto, Canada" },
  exp2_date: { zh: "2023.04 – 2023.08", en: "Apr 2023 – Aug 2023" },
  exp2_list: {
    zh: [
      "负责初创公司品牌部门的日常运营；协调市场团队制定并执行营销策略，产出宣传物料、社交媒体帖子和博客文章。",
      "跟踪品牌认知与营销效果相关 KPI，为后续营销活动和公司决策提供数据依据。",
      "主管招聘流程与绩效管理，持续跟踪员工表现并给出改进反馈。"
    ],
    en: [
      "Supervised day-to-day brand operations at a startup; coordinated the marketing team to develop and execute strategies, producing promotional material, social media posts and blog articles.",
      "Monitored brand-awareness and marketing KPIs to inform future campaigns and organizational decisions.",
      "Oversaw recruitment and performance management, tracking employee performance and giving feedback for improvement."
    ]
  },
  exp3_role: { zh: "茶叶品牌创始人", en: "Founder" },
  exp3_org: { zh: "Zhangzhou Tea Craftsman Tea Co., Ltd.", en: "Zhangzhou Tea Craftsman Tea Co., Ltd." },
  exp3_loc: { zh: "中国漳州", en: "Zhangzhou, China" },
  exp3_date: { zh: "2020.09 – 2021.09", en: "Sep 2020 – Sep 2021" },
  exp3_list: {
    zh: [
      "创立面向中国年轻一代的茶叶品牌，推广传统茶文化与泡茶、品茶方式。",
      "按目标市场需求开发新茶品并参与包装内容设计；开展市场调研，为产品开发和营销策略提供依据。",
      "建立并维护供应商与合作伙伴关系、管理供应链；负责团队招聘、培训与绩效管理。"
    ],
    en: [
      "Founded a tea brand for China’s younger generation, promoting traditional tea culture and tea brewing.",
      "Developed new tea products for the target market and took part in packaging design; led market research to inform product development and marketing strategy.",
      "Built and maintained supplier and partner relationships and managed the supply chain; handled recruitment, training and performance management."
    ]
  },
  exp4_role: { zh: "留学咨询机构联合创始人 · 学生服务顾问兼市场专员", en: "Co-Founder, Student Services Consultant & Marketing Specialist" },
  exp4_org: { zh: "HangFeng Overseas Education Agency", en: "HangFeng Overseas Education Agency" },
  exp4_loc: { zh: "中国武汉", en: "Wuhan, China" },
  exp4_date: { zh: "2019.01 – 2020.01", en: "Jan 2019 – Jan 2020" },
  exp4_list: {
    zh: [
      "联合创办协助中国学生出国留学的咨询机构，设计选校申请、签证支持与学业规划服务。",
      "负责市场推广：制定并执行内容计划，在微信等社交平台发布内容以吸引潜在客户。",
      "为学生提供学业与职业规划、申请流程及海外生活咨询，并根据客户反馈和市场趋势改进服务。"
    ],
    en: [
      "Co-founded an agency helping Chinese students study abroad; designed consulting services for school applications, visa support and academic planning.",
      "Led marketing: planned and executed content and published on social platforms including WeChat to attract prospective clients.",
      "Advised students on academic and career planning, applications and living abroad; refined services based on client feedback and market trends."
    ]
  },

  proj_title: { zh: "项目", en: "Projects" },
  proj_role_label: { zh: "角色", en: "Role" },

  /* 1. 林业视觉 AI */
  proj1_name: { zh: "林业视觉 AI：双目相机野外树木胸径测量", en: "Forestry Vision AI: Stereo-Camera Tree DBH Measurement in the Field" },
  proj1_meta: { zh: "独立开发 · 2026.08 – 至今", en: "Solo developer · 2026.08 – Present" },
  proj1_stack: { zh: "Python · OpenCV · YOLO26-seg（Ultralytics）· SAM3 · NumPy · pytest", en: "Python · OpenCV · YOLO26-seg (Ultralytics) · SAM3 · NumPy · pytest" },
  /* Highlight stats: "value|label" per item */
  proj1_stats: {
    zh: ["0.99 cm|留出树 MAE（原 1.32 cm）", "92%|误差 ≤2 cm 占比（原 78%）", "约 270 株|围尺实测真值"],
    en: ["0.99 cm|MAE on held-out trees (from 1.32 cm)", "92%|within ≤2 cm (from 78%)", "~270|trees tape-measured as ground truth"]
  },
  proj1_summary: {
    zh: "林木调查要逐株用围尺量胸径（离地 1.3 m 处的树干直径），费人工也慢。目标：用双目相机对着树拍一下就自动算出胸径，用于径阶统计和蓄积估算。",
    en: "Forest inventory means tape-measuring each tree’s DBH (trunk diameter 1.3 m above ground) by hand — slow and labour-intensive. Goal: point a stereo camera at a tree and get its DBH automatically, for diameter-class statistics and volume estimation."
  },
  proj1_list: {
    zh: [
      "误差分析：留出树 MAE 从 1.32 cm 降至 0.99 cm，误差 ≤2 cm 的比例从 78% 提升至 92%。逐项拆解误差，定位瓶颈不在分割（人工轮廓误差同样有 1.3 cm），而在每次外业的双目视差漂移（胸径整体偏小 5–10%）；为此加入标定体检与开工前棋盘尺度校正，用训练集树木拟合视差偏移后应用到留出树。",
      "数据：实地拍摄 10 余段双目视频，围尺实测约 270 株树胸径作为真值；自写标注与质检工具，整理出 380 多张合格树干轮廓标注；按树分组切分 train/val/test，同一棵树不会同时出现在训练集和测试集。",
      "模型：用 YOLO26-seg 训练树干实例分割模型，在密林、杂草多、光线暗的野外画面中分出完整树干；加入 SAM3 点选辅助预标注，提高标注效率。",
      "测量算法：OpenCV 双目标定、立体校正与 SGBM 视差；树干轮廓结合深度，按圆柱切线几何算出胸径；加入深度质量门控、0.8–1.5 m 测距门控与多帧中位数融合，多棵树同框时自动选出目标树。",
      "工程化：实时 GUI 支持同一棵树多角度测量融合；ArUco 标记确认 1.3 m 胸高位置，无损录像与离线回放评测，200 多个测试用例。另设计了自制全局快门双目相机方案（树莓派 5 + 硬件同步触发），用于解决卷帘快门和野外暗光问题。"
    ],
    en: [
      "Error analysis: cut MAE on held-out trees from 1.32 cm to 0.99 cm and raised the share within ≤2 cm from 78% to 92%. Broke the error down source by source: the bottleneck was not segmentation (manual contours also err by 1.3 cm) but per-session stereo disparity drift that biased DBH 5–10% low. Fixed with a calibration health check and pre-session checkerboard scale correction, fitting the disparity offset on training trees and applying it to held-out trees.",
      "Data: shot 10+ stereo videos in a Fujian forest and tape-measured ~270 trees as ground truth; wrote my own annotation and QC tool and curated 380+ trunk-contour masks; split train/val/test by tree so no tree appears in both training and test sets.",
      "Model: trained a YOLO26-seg trunk instance-segmentation model that extracts full trunks in dense, weedy and low-light field scenes; added SAM3 point-prompt pre-labeling to speed up annotation.",
      "Measurement: OpenCV stereo calibration, rectification and SGBM disparity; DBH computed from trunk contour plus depth using cylinder-tangent geometry; depth-quality gating, 0.8–1.5 m range gating and multi-frame median fusion; automatic target-tree selection when several trees are in view.",
      "Engineering: real-time GUI that fuses measurements of one tree from multiple angles; ArUco markers to confirm 1.3 m breast height; lossless recording with offline replay evaluation; 200+ tests. Also designed a custom global-shutter stereo camera (Raspberry Pi 5 + hardware-synced trigger) to address rolling shutter and low light in the field."
    ]
  },

  /* 2. 福元家 */
  proj2_name: { zh: "福元家 · 家庭收租微信小程序", en: "Fuyuanjia · Family Rent-Collection WeChat Mini Program" },
  proj2_meta: { zh: "独立开发 · 2026.08 – 至今", en: "Solo developer · 2026.08 – Present" },
  proj2_stack: { zh: "微信小程序 · 微信云开发（CloudBase 云函数 + 云数据库）· Node.js · node:test", en: "WeChat Mini Program · WeChat CloudBase (cloud functions + cloud database) · Node.js · node:test" },
  proj2_summary: {
    zh: "为家庭出租物业（72 间房）开发的收租记账小程序，房东、协管、租客三类角色共用，已替代纸质账本投入日常使用。",
    en: "Built and shipped a WeChat Mini Program (CloudBase serverless) that runs rent collection for a family-owned 72-unit property, replacing the paper ledger in daily use."
  },
  proj2_list: {
    zh: [
      "账本数据模型重设计：定位「欠款既是派生值又是可写字段」这一根因，拆为 8 个集合，账本只追加不删除、欠款由收款记录推算，一次重构消除审计中 4 类记账错误。",
      "一致性与并发：客户端不直连数据库，24 个「意图动作」统一经云函数执行；requestId 幂等表防重复收款，单份租约乐观锁避免误冲突。",
      "权限与安全：房东 / 协管 / 租客三级角色，租客只能读到自己那一间；修复多处越权问题。",
      "测试与质量：自建模拟 CloudBase 限制的数据库替身和假微信 SDK，352 项自动化测试在 5 个时区下全部通过。"
    ],
    en: [
      "Redesigned the ledger data model: traced bugs to fields that were both derived and client-writable; split into 8 collections with an append-only ledger and balances derived from payment records, eliminating 4 classes of bookkeeping errors found in an audit.",
      "Consistency and concurrency: no direct client DB access — 24 intent-based actions run through a cloud function, with an idempotency table (requestId) against duplicate payments and per-lease optimistic locking.",
      "Permissions and security: three roles (owner / helper / tenant); tenants can only read their own unit; fixed several privilege-escalation issues.",
      "Testing: built a CloudBase-faithful fake database and fake WeChat SDK; 352 automated tests pass across 5 time zones."
    ]
  },

  /* 3. 一点就透 / Clearcut */
  proj3_name: { zh: "一点就透 / Clearcut · AI 驱动的知识短视频流水线", en: "Clearcut (一点就透) · AI-Driven Explainer Video Pipeline" },
  proj3_meta: { zh: "个人项目 · 2026.10 – 至今", en: "Personal project · 2026.10 – Present" },
  proj3_stack: { zh: "Claude Code Skill · Python CLI · pytest · three.js · ffmpeg · CosyVoice 3（声音克隆 TTS）", en: "Claude Code Skill · Python CLI · pytest · three.js · ffmpeg · CosyVoice 3 (voice-clone TTS)" },
  proj3_summary: {
    zh: "用 Claude Code 搭建的 AI 视频生产流水线（7 步 + 151 个测试守门），代码渲染画面、克隆声音配音，一周出了 6 期知识短视频。",
    en: "Built an AI video production pipeline with Claude Code (7 steps gated by 151 tests) — code-rendered visuals and a cloned-voice narration — producing 6 explainer shorts in one week."
  },
  proj3_list: {
    zh: [
      "设计「选题 → 研究 → 钩子包装 → 写稿 → 制作 → 四平台发布包 → 复盘」7 步流水线，封装为 Claude Code Skill，一句话即可驱动 AI Agent 产出一期完整视频。",
      "为每一步设计可机器检查的质量门槛：Python 编写的 cc.py 检查工具（14 个模块），配套 151 个 pytest 用例，不过门槛不能进入下一步。",
      "画面全部由代码生成：three.js 逐帧渲染 + ffmpeg 混流，克隆声音配音；一条 build.sh 完成配音、ASR 校对、配乐、渲染、母带与字幕，成片可一键复现。",
      "一周内产出 6 期竖屏短片并建立品牌系统；根据审片把 2 秒全屏片头改为 0.9 秒角标并重剪。"
    ],
    en: [
      "Designed a 7-step pipeline (topic → research → hook → script → production → 4-platform publish kit → review), packaged as a Claude Code Skill so one sentence drives an AI agent to produce a full episode.",
      "Machine-checkable quality gates at every step: a Python checker (cc.py, 14 modules) backed by 151 pytest cases; output that fails a gate cannot move on.",
      "All visuals generated by code: three.js frame-by-frame rendering + ffmpeg muxing, narrated in a cloned voice; a single build.sh handles voice, ASR proofreading, music, rendering, mastering and subtitles — fully reproducible.",
      "Produced 6 vertical shorts in one week with a full brand system; after review, replaced a 2-second full-screen intro with a 0.9-second corner badge and re-cut."
    ]
  },

  /* Course projects (compact list) */
  course_title: { zh: "课程项目", en: "Course projects" },
  course_list: {
    zh: [
      "心血管疾病预测：用 scikit-learn、Pandas、NumPy、Matplotlib 建模，采用 SVM 与随机森林，准确率 87.5%。",
      "Apriori 交叉销售推荐：对电商平台用户浏览会话做商品关联挖掘，构建交叉销售推荐。",
      "Linux 下 C 语言文件与目录管理系统：基于原生系统调用实现文件 / 目录的创建、移动、删除与读写，含错误处理与删除确认，并用 strace 分析系统调用。"
    ],
    en: [
      "Cardiovascular disease prediction: models built with scikit-learn, Pandas, NumPy and Matplotlib using SVM and Random Forest; 87.5% accuracy.",
      "Apriori cross-selling recommendation: data mining of item associations in e-commerce browsing sessions to drive cross-selling recommendations.",
      "C file & directory management system on Linux: create, move, delete and I/O via native system calls, with error handling, deletion confirmations and strace analysis of system calls."
    ]
  },

  edu_title: { zh: "教育背景", en: "Education" },
  edu1_school: { zh: "威尔弗里德·劳雷尔大学（Wilfrid Laurier University）", en: "Wilfrid Laurier University" },
  edu1_degree: { zh: "计算机科学荣誉理学学士", en: "Honours Bachelor of Science in Computer Science" },

  edu1_award: { zh: "入学奖学金（2019）", en: "Entrance Scholarship (2019)" },
  edu1_courses_label: { zh: "相关课程", en: "Relevant courses" },
  edu1_courses: {
    zh: "软件开发 · 面向对象编程 · 数字电子 · 数据结构 I & II · 人工智能 · 机器学习",
    en: "Software Development · Object-Oriented Programming · Digital Electronics · Data Structures I & II · Artificial Intelligence · Machine Learning"
  },
  edu2_name: { zh: "约克大学 × IBM 工作实习教育项目（Work Placement Education Program）", en: "York University & IBM — Work Placement Education Program" },
  edu2_date: { zh: "2023", en: "2023" },
  edu2_list: {
    zh: [
      "评估一家美国连锁养老护理机构的现有做法，识别数字化转型与运营改进方向。",
      "主导接入 IBM 数据库管理服务，为其建立患者数据库。"
    ],
    en: [
      "Assessed a US-based nursing-home chain’s existing practices to identify areas for digital transformation and operational improvement.",
      "Led the integration of IBM database management services to establish a patient database."
    ]
  },
  cert_title: { zh: "证书", en: "Certifications" },
  cert_list: {
    zh: ["iOS Machine Learning with Core ML 2 & Swift 5 — Udemy", "Mastering ARKit for iOS — Udemy"],
    en: ["iOS Machine Learning with Core ML 2 & Swift 5 — Udemy", "Mastering ARKit for iOS — Udemy"]
  },
  skills_title: { zh: "技能", en: "Skills" },
  skill1_name: { zh: "运营与 SOP", en: "Operations & SOPs" },
  skill1_desc: { zh: "开店筹备、标准作业程序、招聘培训与排班", en: "Restaurant launch, standard operating procedures, hiring, training and scheduling" },
  skill2_name: { zh: "供应链管理", en: "Supply Management" },
  skill2_desc: { zh: "库存、采购与供应商管理", en: "Inventory, purchasing and supplier management" },
  skill3_name: { zh: "AI 工作流自动化", en: "AI Workflow Automation" },
  skill3_desc: { zh: "销售看板、薪资与小费计算、财务与成本表、经营分析", en: "Sales dashboards, payroll and tips calculation, finance and cost sheets, business analysis" },
  skill4_name: { zh: "计算机视觉", en: "Computer Vision" },
  skill4_desc: { zh: "OpenCV · YOLO26-seg · SAM3 · 双目立体视觉 · 实例分割 · 野外数据采集", en: "OpenCV · YOLO26-seg · SAM3 · stereo vision · instance segmentation · field data collection" },

  skill5_name: { zh: "软件开发", en: "Software Development" },
  skill5_desc: { zh: "Python · Java · SQL · C++ · Node.js · scikit-learn · Pandas · 微信小程序 / CloudBase", en: "Python · Java · SQL · C++ · Node.js · scikit-learn · Pandas · WeChat Mini Program / CloudBase" },
  skill6_name: { zh: "媒体与测试", en: "Media & Testing" },
  skill6_desc: { zh: "three.js · ffmpeg · 自动化测试（pytest、node:test）", en: "three.js · ffmpeg · automated testing (pytest, node:test)" },

  skill7_name: { zh: "语言", en: "Languages" },
  skill7_desc: { zh: "中文、英语", en: "Chinese, English" },

  contact_title: { zh: "联系方式", en: "Contact" },
  contact_email_label: { zh: "邮箱", en: "Email" },
  contact_email: { zh: "zyzbruce123321@gmail.com", en: "zyzbruce123321@gmail.com" },
  work_auth: { zh: "可在加拿大工作", en: "Authorized to work in Canada" },

  footer: { zh: "© 张严之 Bruce Zhang", en: "© Yanzhi (Bruce) Zhang" }
};
