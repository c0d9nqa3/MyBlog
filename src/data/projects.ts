export interface ProvingGroundProject {
  id: string;
  title: { zh: string; en: string };
  codename: string;
  period: string;
  status: { zh: string; en: string };
  hero: string;
  summary: { zh: string; en: string };
  challenge: { zh: string; en: string };
  approach: { zh: string[]; en: string[] };
  outcome: { zh: string[]; en: string[] };
  tech: string[];
  github?: string;
  featured: boolean;
  image?: string;
}

export const projects: ProvingGroundProject[] = [
  {
    id: 'predictive-maintenance',
    title: { zh: '航空装备预测性维护平台', en: 'Aviation Predictive Maintenance Platform' },
    codename: 'PHM-CORE',
    period: '2025 — Present',
    status: { zh: '生产中', en: 'In Production' },
    hero: '多源传感融合驱动的装备健康管理中枢',
    summary: {
      zh: '面向大型关键装备的预测性维护能力平台。通过实时状态监测、异常预警与寿命预测模型，将被动维修转化为主动运维。',
      en: 'A predictive maintenance hub for mission-critical equipment — real-time monitoring, anomaly alerts, and remaining-useful-life models that shift maintenance from reactive to proactive.',
    },
    challenge: {
      zh: '航空装备传感数据异构、采样频率不一，故障模式复杂且标注稀缺，需要在边缘与云端之间平衡实时性与模型精度。',
      en: 'Heterogeneous sensor streams, sparse fault labels, and complex failure modes — all while balancing edge latency against model fidelity.',
    },
    approach: {
      zh: [
        '构建多源数据融合管道，统一时序对齐与特征工程',
        '部署设备状态监测与异常检测模块，支持规则 + ML 混合预警',
        '寿命预测模型与运维工单系统联动，闭环验证',
      ],
      en: [
        'Multi-source fusion pipeline with temporal alignment and feature engineering',
        'Hybrid rule + ML anomaly detection for condition monitoring',
        'RUL models tied to work-order systems for closed-loop validation',
      ],
    },
    outcome: {
      zh: [
        '平台支撑关键装备健康管理能力建设',
        '运维响应速度显著提升，故障预警提前量 measurable',
        '推动客户运维数字化升级',
      ],
      en: [
        'Platform enables fleet-wide health management capability',
        'Measurable reduction in response time with earlier fault warnings',
        'Drives customer O&M digital transformation',
      ],
    },
    tech: ['Python', 'Time-Series ML', 'IoT', 'Kubernetes', 'InfluxDB'],
    featured: true,
  },
  {
    id: 'drone-detection',
    title: { zh: '无人机实时目标检测与跟踪', en: 'Real-Time Drone Detection & Tracking' },
    codename: 'SKY-EYE',
    period: '2024',
    status: { zh: '已交付', en: 'Delivered' },
    hero: '空中视角的多目标感知与地图级跟踪',
    summary: {
      zh: '为无人机平台设计的实时目标检测与跟踪系统，支持人体、车辆及多类目标的 onboard 推理与轨迹关联。',
      en: 'Onboard perception stack for UAVs — real-time detection of humans, vehicles, and multi-class targets with map-anchored tracking.',
    },
    challenge: {
      zh: '机载算力受限、画面抖动大、目标尺度变化剧烈，需要在精度与帧率之间找到可部署的平衡点。',
      en: 'Constrained onboard compute, aerial motion blur, and extreme scale variation — deployable accuracy at usable frame rates.',
    },
    approach: {
      zh: [
        'YOLOv8 与 RT-DETRv2 双路线 benchmark，按场景选型',
        '地图坐标系下的目标关联与轨迹平滑',
        '边缘设备 TensorRT / ONNX 推理优化',
      ],
      en: [
        'Dual-track benchmark: YOLOv8 vs RT-DETRv2 per scenario',
        'Map-frame association with trajectory smoothing',
        'TensorRT / ONNX edge inference optimization',
      ],
    },
    outcome: {
      zh: ['实现多类目标实时检测', '地图基准跟踪链路跑通', '开源仓库可复现部署流程'],
      en: ['Multi-class real-time detection', 'Map-based tracking pipeline', 'Open-source reproducible deployment'],
    },
    tech: ['YOLOv8', 'RT-DETRv2', 'Python', 'OpenCV', 'ONNX'],
    github: 'https://github.com/c0d9nqa3/Object-Detection-and-Tracking-System-for-Drone-Applications',
    featured: true,
  },
  {
    id: 'rots',
    title: { zh: '远程气味传输系统', en: 'Remote Odor Transmission System' },
    codename: 'ROTS',
    period: '2023 — 2024',
    status: { zh: '原型验证', en: 'Prototype Validated' },
    hero: '数字嗅觉：从传感感知到气味合成的闭环',
    summary: {
      zh: '结合先进传感器阵列、边缘 AI 处理与精确气味生成装置，探索远程数字化嗅觉传输的技术边界。',
      en: 'Sensor arrays, edge AI, and precision odor actuators — probing the frontier of remote digital olfaction.',
    },
    challenge: {
      zh: '气味信号高维、环境干扰强，合成端需要毫秒级响应且配方空间巨大。',
      en: 'High-dimensional scent signals, environmental noise, and a vast formulation space requiring millisecond actuator response.',
    },
    approach: {
      zh: [
        '多通道气体传感器阵列 + 边缘特征提取',
        '气味配方编码与生成装置驱动',
        '端到端延迟与感知一致性评估框架',
      ],
      en: [
        'Multi-channel gas sensor array with edge feature extraction',
        'Scent formulation encoding and actuator drive',
        'End-to-end latency and perceptual consistency evaluation',
      ],
    },
    outcome: {
      zh: ['完成系统级原型', '验证远程气味传输可行性', '边缘 AI 推理链路稳定运行'],
      en: ['System-level prototype complete', 'Remote odor transmission feasibility demonstrated', 'Stable edge AI inference path'],
    },
    tech: ['C', 'Embedded Linux', 'Edge AI', 'Sensor Fusion'],
    github: 'https://github.com/c0d9nqa3/Remote-Odor-Transmission-System-ROTS',
    featured: true,
  },
  {
    id: 'happywhale',
    title: { zh: 'Kaggle Happywhale 鲸豚识别', en: 'Kaggle Happywhale — Whale ID' },
    codename: 'FIN-PRINT',
    period: '2022',
    status: { zh: '竞赛银牌', en: 'Kaggle Silver' },
    hero: '背鳍特征提取与度量学习排序',
    summary: {
      zh: '基于 YOLOv5x6 裁剪背鳍区域，EfficientNet-B7 + DOLG 特征融合，KNN 聚类排序 top-5 候选，准确率 83.2%。',
      en: 'YOLOv5x6 fin cropping, EfficientNet-B7 + DOLG fusion, KNN ranking for top-5 candidates — 83.2% accuracy.',
    },
    challenge: {
      zh: '类内差异大、类间相似度高，训练数据含噪，需要鲁棒的度量学习策略。',
      en: 'High intra-class variance, noisy labels, and look-alike species — demanding robust metric learning.',
    },
    approach: {
      zh: [
        'YOLOv5x6 精确定位背鳍 ROI',
        'EfficientNet-B7 + DOLG 全局-局部特征融合',
        '伪标签融入噪音数据，KNN 聚类距离排序',
      ],
      en: [
        'YOLOv5x6 dorsal fin ROI localization',
        'EfficientNet-B7 + DOLG global-local fusion',
        'Pseudo-labeling for noisy data, KNN distance ranking',
      ],
    },
    outcome: {
      zh: ['准确率 83.2%', '排名 23 / 1654', 'Kaggle 银牌'],
      en: ['83.2% accuracy', 'Rank 23 / 1654', 'Kaggle Silver Medal'],
    },
    tech: ['PyTorch', 'EfficientNet-B7', 'DOLG', 'KNN', 'YOLOv5'],
    featured: true,
  },
  {
    id: 'simple-os',
    title: { zh: 'Simple-OS', en: 'Simple-OS' },
    codename: 'KERNEL-0',
    period: '2022 — 2023',
    status: { zh: '完整运行', en: 'Fully Bootable' },
    hero: '从引导扇区到用户态 Shell 的全栈手写',
    summary: {
      zh: '从零构建的轻量级操作系统：自定义引导程序、基础内核、键盘中断、简易文件系统与用户命令 Shell。',
      en: 'A lightweight OS built from scratch — custom bootloader, kernel, keyboard IRQ, simple FS, and user-space shell.',
    },
    challenge: {
      zh: '裸机环境无调试器友好支持，内存管理与中断处理必须精确到字节。',
      en: 'Bare-metal debugging with byte-precise memory management and interrupt handling.',
    },
    approach: {
      zh: [
        '16-bit 实模式引导 → 32-bit 保护模式切换',
        '内核内存分页与 GDT/IDT 初始化',
        '简易 inode 文件系统 + 交互式 Shell',
      ],
      en: [
        '16-bit real-mode boot → 32-bit protected mode',
        'Kernel paging with GDT/IDT setup',
        'Simple inode FS + interactive shell',
      ],
    },
    outcome: {
      zh: ['系统可引导并运行用户命令', '完整开源可学习', '深入理解 OS 底层机制'],
      en: ['Bootable with user commands', 'Fully open-source', 'Deep OS internals understanding'],
    },
    tech: ['C', 'x86 Assembly', 'Bootloader', 'Kernel'],
    github: 'https://github.com/c0d9nqa3/Simple-OS',
    featured: false,
  },
  {
    id: 'autoredl',
    title: { zh: 'AutoRedL 激光跟随', en: 'AutoRedL Laser Tracking' },
    codename: 'RED-DOT',
    period: '2023',
    status: { zh: '原型完成', en: 'Prototype Done' },
    hero: '嵌入式 CV 人体锁定与激光持续跟随',
    summary: {
      zh: '自动检测并跟踪人体目标，激光指针持续跟随，面向嵌入式平台的低延迟视觉闭环。',
      en: 'Human detection and tracking with a laser pointer that continuously follows the target — low-latency embedded vision loop.',
    },
    challenge: {
      zh: '摄像头-激光坐标标定、跟踪丢帧恢复、嵌入式算力限制。',
      en: 'Camera-laser calibration, track recovery after occlusion, embedded compute limits.',
    },
    approach: {
      zh: ['轻量检测模型选型与量化', 'PID 云台控制闭环', '丢帧重捕获策略'],
      en: ['Lightweight model selection & quantization', 'PID gimbal control loop', 'Re-acquisition after track loss'],
    },
    outcome: {
      zh: ['实现稳定人体跟随', '嵌入式设备实时运行'],
      en: ['Stable human following', 'Real-time on embedded hardware'],
    },
    tech: ['Python', 'OpenCV', 'Embedded', 'PID Control'],
    github: 'https://github.com/c0d9nqa3/autoredL',
    featured: false,
  },
  {
    id: 'career-navigator',
    title: { zh: 'Career Navigator', en: 'Career Navigator' },
    codename: 'ORACLE-RAG',
    period: '2024',
    status: { zh: '可演示', en: 'Demo Ready' },
    hero: 'RAG 驱动的 AI 职业导航',
    summary: {
      zh: '向量数据库 + 大模型集成的职业导航应用，支持语义检索与个性化建议生成。',
      en: 'Vector DB + LLM career navigation with semantic retrieval and personalized recommendations.',
    },
    challenge: {
      zh: '职业知识碎片化、检索相关性难保证、幻觉控制。',
      en: 'Fragmented career knowledge, retrieval relevance, and hallucination control.',
    },
    approach: {
      zh: ['文档切片与 embedding 入库', '混合检索 + rerank', 'Prompt 约束与引用溯源'],
      en: ['Chunking & embedding pipeline', 'Hybrid retrieval + rerank', 'Prompt constraints with citations'],
    },
    outcome: {
      zh: ['端到端 RAG 链路跑通', '可演示的问答体验'],
      en: ['End-to-end RAG pipeline', 'Demo-ready Q&A experience'],
    },
    tech: ['Python', 'RAG', 'Vector DB', 'LLM'],
    github: 'https://github.com/c0d9nqa3/Career-Navigator',
    featured: false,
  },
  {
    id: 'empathetic-chatbot',
    title: { zh: '共情对话机器人', en: 'Empathetic Chatbot' },
    codename: 'ECHO-CN',
    period: '2022',
    status: { zh: '研究原型', en: 'Research Prototype' },
    hero: '中文共情对话生成',
    summary: {
      zh: '基于 EmpDG 框架与 GPT-2 Chinese 的共情对话系统，探索情感一致性的生成策略。',
      en: 'Empathetic dialogue with EmpDG and GPT-2 Chinese — exploring emotionally consistent generation.',
    },
    challenge: {
      zh: '中文情感标注稀缺，共情回复容易流于模板化。',
      en: 'Sparse Chinese empathy annotations and templated-sounding replies.',
    },
    approach: {
      zh: ['EmpDG 多轮情感建模', 'GPT-2 Chinese fine-tune', '情感词注入与多样性采样'],
      en: ['EmpDG multi-turn emotion modeling', 'GPT-2 Chinese fine-tuning', 'Emotion word injection & diverse sampling'],
    },
    outcome: {
      zh: ['可运行的中文共情对话 demo'],
      en: ['Working Chinese empathetic dialogue demo'],
    },
    tech: ['PyTorch', 'GPT-2', 'Transformer', 'NLP'],
    github: 'https://github.com/c0d9nqa3/Empathetic-dialogue-generate-Empathetic-Chatbot-',
    featured: false,
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
