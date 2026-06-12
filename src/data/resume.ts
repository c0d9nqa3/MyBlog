export interface WorkEntry {
  company: { zh: string; en: string };
  role: { zh: string; en: string };
  period: string;
  location?: string;
  highlights: { zh: string[]; en: string[] };
}

export interface EducationEntry {
  school: { zh: string; en: string };
  degree: { zh: string; en: string };
  period: string;
  gpa?: string;
  rank?: { zh: string; en: string };
  courses?: { zh: string[]; en: string[] };
  honors?: { zh: string[]; en: string[] };
}

export interface ResumeProject {
  id: string;
  title: { zh: string; en: string };
  period: string;
  role: { zh: string; en: string };
  summary: { zh: string; en: string };
  tags: string[];
  provingGroundId?: string;
}

export const profile = {
  name: 'Yann Yan',
  nameZh: '阎先生',
  title: { zh: '嵌入式软件工程师', en: 'Embedded Software Engineer' },
  email: 'Wj.yann@outlook.com',
  phone: '17317328183',
  location: { zh: '上海', en: 'Shanghai' },
  github: 'https://github.com/c0d9nqa3',
  linkedin: '',
  summary: {
    zh: [
      '航空领域软件研发，参与大型装备预测性维护平台建设，推动设备状态实时监测与故障预警。',
      '民机软件系统及工业数字化项目核心模块设计与实现，助力按期交付。',
      'AI 应用、数据分析、嵌入式与系统工程综合经验，主导智能算法在工业场景落地。',
      '关注智能装备、无人系统、工业 AI 与数字化转型，具备技术洞察与项目推动能力。',
    ],
    en: [
      'Avionics software R&D on predictive maintenance platforms — real-time monitoring and fault early-warning.',
      'Core module design for civil aircraft cabin systems and industrial digitalization projects.',
      'Cross-stack experience in AI apps, data analytics, embedded systems, and systems engineering.',
      'Focused on intelligent equipment, unmanned systems, industrial AI, and digital transformation.',
    ],
  },
};

export const work: WorkEntry[] = [
  {
    company: { zh: '上海某航空研究所', en: 'Aviation Research Institute (Shanghai)' },
    role: { zh: '嵌入式软件工程师', en: 'Embedded Software Engineer' },
    period: '2025.06 — 至今',
    highlights: {
      zh: [
        '航空装备预测性维护平台：设备状态监测、异常预警、寿命预测。',
        '民机客舱软件系统：广播系统及核心业务模块，Android 平台优化。',
        'WQAR 空地一体机载服务器：卫星链路数据传输、舱音录制模块研发。',
      ],
      en: [
        'Predictive maintenance platform: condition monitoring, anomaly alerts, life prediction.',
        'Civil aircraft cabin systems: PA/broadcast and core modules on Android.',
        'WQAR airborne server: satellite link data transfer and cockpit voice recording modules.',
      ],
    },
  },
  {
    company: { zh: '上海千兆会贸易有限公司', en: 'Shanghai Qianzhaohui Trading Co.' },
    role: { zh: '技术合伙人', en: 'Technical Partner' },
    period: '2024.08 — 至今',
    highlights: {
      zh: [
        '企业数字化建设与创新业务探索。',
        '软件系统、AI 应用及数据分析能力建设。',
        '技术方案评估、需求分析及外部资源协同。',
      ],
      en: [
        'Enterprise digitalization and innovation business exploration.',
        'Software systems, AI applications, and analytics capability building.',
        'Technical evaluation, requirements analysis, and external resource coordination.',
      ],
    },
  },
  {
    company: { zh: '阿维塔科技（重庆）有限公司', en: 'Avatr Technology' },
    role: { zh: '产品数据实习生', en: 'Product Data Intern' },
    period: '2024.04 — 2024.08',
    highlights: {
      zh: [
        'ERP 集成接口开发，低代码平台 VOC 问题处理 NLP 系统，归纳成功率 93%。',
        '主导 VOC 问题分类流程固化，优化 5 个流程，周承接 600+ 数据。',
        'VOC 数据分析与 PowerBI 可视化，每周完成分析报告。',
      ],
      en: [
        'ERP integration APIs; NLP pipeline for VOC issue handling — 93% categorization success.',
        'Led VOC classification workflow hardening — 5 flows, 600+ tickets/week.',
        'VOC analytics with PowerBI — weekly executive reports.',
      ],
    },
  },
  {
    company: { zh: '上海高知特信息技术有限公司', en: 'Cognizant (Shanghai)' },
    role: { zh: 'Python 开发', en: 'Python Developer' },
    period: '2023.02 — 2023.07',
    highlights: {
      zh: [
        'Apple Portus 平台 AWS 云环境搭建，Auto Scaling + Lambda + SQS，效率提升约 23%。',
        'OCR 发票识别小程序开发。',
      ],
      en: [
        'Portus on AWS — Auto Scaling, Lambda, SQS; ~23% runtime efficiency gain.',
        'OCR invoice recognition mini-program.',
      ],
    },
  },
  {
    company: { zh: '普华永道信息技术（上海）有限公司', en: 'PwC IT (Shanghai)' },
    role: { zh: '测试开发实习生', en: 'Test Development Intern' },
    period: '2022.07 — 2022.12',
    highlights: {
      zh: [
        'Merck 合规流程系统 JMeter 接口/回归测试，发现 15 个关键 bug。',
        'Appian 低代码平台数据预处理 10 万条。',
      ],
      en: [
        'Merck compliance system — JMeter API/regression testing, 15 critical bugs filed.',
        'Appian low-code data prep — 100k records.',
      ],
    },
  },
  {
    company: { zh: '得物', en: 'Poizon (Dewu)' },
    role: { zh: '算法工程师', en: 'Algorithm Engineer' },
    period: '2021.07 — 2021.10',
    highlights: {
      zh: [
        '搜索热词分析与训练，日均 15 个问题热词，点击率提升 60%。',
        '搜索归因与平台优化，商品点击率转化提升 64%。',
      ],
      en: [
        'Search hot-word analysis & training — ~15 daily terms, +60% CTR.',
        'Search attribution & platform tuning — +64% click-through conversion.',
      ],
    },
  },
];

export const education: EducationEntry[] = [
  {
    school: { zh: '美国东北大学', en: 'Northeastern University' },
    degree: { zh: '硕士 · 软件工程系统', en: 'MS · Software Engineering Systems' },
    period: '2023 — 2025',
    gpa: '4.0 / 4.0',
    rank: { zh: '专业排名前 5%', en: 'Top 5%' },
    courses: {
      zh: [
        'Web 设计与网络工程',
        '程序结构与算法',
        '高性能并行机器学习与 AI',
        '操作系统架构',
        '数据科学',
        'AIGC 理论与实践',
      ],
      en: [
        'Web Design & Network Engineering',
        'Program Structure & Algorithms',
        'High-Performance Parallel ML & AI',
        'OS Architecture',
        'Data Science',
        'Generative AI Theory & Practice',
      ],
    },
    honors: {
      zh: ['2024.09–12 担任课程助教 (TA)'],
      en: ['Teaching Assistant, Sep–Dec 2024'],
    },
  },
  {
    school: { zh: '上海电力大学', en: 'Shanghai University of Electric Power' },
    degree: { zh: '本科 · 软件工程', en: 'BS · Software Engineering' },
    period: '2019 — 2023',
    honors: {
      zh: [
        '2020–2022 连续三次学业奖学金',
        '2019–2021 连续三次学生会优秀干部',
        '2020 计算机学院优秀标兵',
        '校文体部部长 · 足球队边锋',
      ],
      en: [
        'Academic scholarship ×3 (2020–2022)',
        'Outstanding Student Union Officer ×3',
        'CS Department Merit Award 2020',
        'Student Affairs Minister · Football winger',
      ],
    },
    courses: {
      zh: [
        '计算机组成原理',
        'C 语言程序设计',
        '计算机网络',
        '智能控制与 Matlab',
        'RPA 开发',
        '操作系统',
        '数字电路',
        '算法设计',
        '大数据应用',
      ],
      en: [
        'Computer Organization',
        'C Programming',
        'Computer Networks',
        'Intelligent Control & Matlab',
        'RPA Development',
        'Operating Systems',
        'Digital Logic',
        'Algorithm Design',
        'Big Data Applications',
      ],
    },
  },
];

export const skills = {
  zh: [
    '语言：Java、Python 熟练；C/C++ 熟悉',
    '框架：Spring Boot、SSM、Django',
    'ML：层次聚类、回归、DQN、YOLO、EfficientNet',
    '嵌入式：Linux SBC、Android、机载系统',
    '数据：MySQL、SQL Server、PowerBI',
    '语言：托福 97 · CET-4 · 英语工作语言',
  ],
  en: [
    'Languages: Java, Python (proficient); C/C++ (familiar)',
    'Frameworks: Spring Boot, SSM, Django',
    'ML: clustering, regression, DQN, YOLO, EfficientNet',
    'Embedded: Linux SBC, Android, airborne systems',
    'Data: MySQL, SQL Server, PowerBI',
    'English: TOEFL 97 · CET-4 · professional working proficiency',
  ],
};

export const resumeProjects: ResumeProject[] = [
  {
    id: 'predictive-maintenance',
    title: { zh: '航空装备预测性维护平台', en: 'Aviation Predictive Maintenance Platform' },
    period: '2025.07 — 至今',
    role: { zh: '核心开发', en: 'Core Developer' },
    summary: {
      zh: '多源传感融合、设备状态监测、故障预测与寿命评估，支撑运维数字化升级。',
      en: 'Multi-source sensor fusion, condition monitoring, fault prediction, and life assessment.',
    },
    tags: ['Python', 'ML', 'IoT', 'Avionics'],
    provingGroundId: 'predictive-maintenance',
  },
  {
    id: 'happywhale',
    title: { zh: 'Kaggle Happywhale 鲸豚识别', en: 'Kaggle Happywhale Identification' },
    period: '2022.04 — 2022.05',
    role: { zh: '核心成员', en: 'Core Member' },
    summary: {
      zh: 'EfficientNet-B7 + DOLG 特征融合，伪标签降噪，KNN 聚类排序，准确率 83.2%，银牌 23/1654。',
      en: 'EfficientNet-B7 + DOLG fusion, pseudo-labeling, KNN ranking — 83.2% accuracy, Silver 23/1654.',
    },
    tags: ['CV', 'EfficientNet', 'KNN', 'Kaggle'],
    provingGroundId: 'happywhale',
  },
  {
    id: 'drone-detection',
    title: { zh: '无人机目标检测与跟踪', en: 'Drone Object Detection & Tracking' },
    period: '2024',
    role: { zh: '独立开发', en: 'Solo Developer' },
    summary: {
      zh: 'YOLOv8 / RT-DETRv2 实时检测人体、车辆等多类目标，地图基准跟踪。',
      en: 'Real-time YOLOv8 / RT-DETRv2 detection with map-based tracking for humans, vehicles, and more.',
    },
    tags: ['YOLOv8', 'RT-DETR', 'Python', 'Edge AI'],
    provingGroundId: 'drone-detection',
  },
  {
    id: 'rots',
    title: { zh: '远程气味传输系统 ROTS', en: 'Remote Odor Transmission System' },
    period: '2023 — 2024',
    role: { zh: '系统架构', en: 'System Architect' },
    summary: {
      zh: '传感器阵列 + 边缘 AI + 精确气味生成，数字嗅觉技术原型。',
      en: 'Sensor arrays, edge AI, and precise odor synthesis — digital olfaction prototype.',
    },
    tags: ['C', 'Edge AI', 'Sensors', 'Embedded'],
    provingGroundId: 'rots',
  },
  {
    id: 'simple-os',
    title: { zh: 'Simple-OS 自研操作系统', en: 'Simple-OS from Scratch' },
    period: '2022 — 2023',
    role: { zh: '独立开发', en: 'Solo Developer' },
    summary: {
      zh: '自定义引导程序、内核、键盘中断、简易文件系统与用户态 Shell。',
      en: 'Custom bootloader, kernel, keyboard IRQ, simple FS, and user-space shell.',
    },
    tags: ['C', 'OS', 'Bootloader', 'Kernel'],
    provingGroundId: 'simple-os',
  },
  {
    id: 'autoredl',
    title: { zh: 'AutoRedL 激光跟随系统', en: 'AutoRedL Laser Tracking' },
    period: '2023',
    role: { zh: '独立开发', en: 'Solo Developer' },
    summary: {
      zh: '嵌入式 CV 人体检测与跟踪，激光指针持续跟随目标。',
      en: 'Embedded CV human detection with continuous laser-pointer tracking.',
    },
    tags: ['Python', 'CV', 'Embedded', 'Tracking'],
    provingGroundId: 'autoredl',
  },
  {
    id: 'career-navigator',
    title: { zh: 'Career Navigator RAG', en: 'Career Navigator RAG' },
    period: '2024',
    role: { zh: '独立开发', en: 'Solo Developer' },
    summary: {
      zh: '向量数据库 + LLM 集成的 AI 职业导航应用。',
      en: 'AI career navigation with vector DB and LLM integration.',
    },
    tags: ['RAG', 'LLM', 'Vector DB', 'Python'],
    provingGroundId: 'career-navigator',
  },
  {
    id: 'empathetic-chatbot',
    title: { zh: '共情对话机器人', en: 'Empathetic Chinese Chatbot' },
    period: '2022',
    role: { zh: '独立开发', en: 'Solo Developer' },
    summary: {
      zh: '基于 EmpDG 与 GPT-2 Chinese 的共情对话生成系统。',
      en: 'Empathetic dialogue generation with EmpDG and GPT-2 Chinese.',
    },
    tags: ['NLP', 'GPT-2', 'Transformer', 'Python'],
    provingGroundId: 'empathetic-chatbot',
  },
];
