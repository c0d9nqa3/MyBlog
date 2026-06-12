export type Lang = 'zh' | 'en';

export const ui = {
  zh: {
    siteName: 'YANN',
    siteTagline: '嵌入式 · 智能系统 · 工业软件',
    nav: {
      resume: '履历',
      blog: '手记',
      proving: '试验场',
    },
    home: {
      greeting: '你好，我是 Yann。',
      intro:
        '航空装备软件、嵌入式系统与工业 AI 交叉地带的长线记录。这里不是模板站——是项目、实验与思考的真实出口。',
      introEn: 'A personal terminal for embedded systems, avionics software, and industrial AI.',
      featured: '精选',
      recent: '最近更新',
      viewCount: '访问计数',
      viewCountSite: '本站',
      viewCountPage: '本页',
      explore: '进入试验场',
      readBlog: '阅读手记',
      viewResume: '查看履历',
      findMe: '联系',
    },
    resume: {
      title: '履历',
      subtitle: '教育、经历与技能档案',
      education: '教育背景',
      experience: '职业经历',
      skills: '专业技能',
      projects: '项目一览',
      honors: '荣誉奖项',
      contact: '联系方式',
      viewDetail: '查看详情',
      present: '至今',
      gpa: 'GPA',
      rank: '专业排名',
    },
    blog: {
      title: '手记',
      subtitle: '技术笔记、学习记录与工程思考',
      readMore: '阅读全文',
      tags: '标签',
      back: '返回列表',
      empty: '暂无文章。在 src/content/blog/ 添加 Markdown 即可发布。',
    },
    proving: {
      title: '试验场',
      subtitle: '高复杂度原型与标志性交付',
      viewProject: '项目档案',
      tech: '技术栈',
      status: '状态',
      back: '返回试验场',
    },
    footer: {
      rights: '保留所有权利',
    },
    langSwitch: 'EN',
  },
  en: {
    siteName: 'YANN',
    siteTagline: 'Embedded · Intelligent Systems · Industrial Software',
    nav: {
      resume: 'Dossier',
      blog: 'Dispatch',
      proving: 'Proving Ground',
    },
    home: {
      greeting: 'Hey — I\'m Yann.',
      intro:
        'Long-form notes from the intersection of avionics software, embedded systems, and industrial AI. Not a template — a live export of projects and experiments.',
      introEn: 'A personal terminal for embedded systems, avionics software, and industrial AI.',
      featured: 'Featured',
      recent: 'Recent',
      viewCount: 'Traffic',
      viewCountSite: 'Site',
      viewCountPage: 'Page',
      explore: 'Enter Proving Ground',
      readBlog: 'Read Dispatch',
      viewResume: 'Open Dossier',
      findMe: 'Connect',
    },
    resume: {
      title: 'Dossier',
      subtitle: 'Education, experience & skills archive',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      honors: 'Honors',
      contact: 'Contact',
      viewDetail: 'Details',
      present: 'Present',
      gpa: 'GPA',
      rank: 'Rank',
    },
    blog: {
      title: 'Dispatch',
      subtitle: 'Technical notes, learning logs & engineering thoughts',
      readMore: 'Read',
      tags: 'Tags',
      back: 'Back to list',
      empty: 'No posts yet. Add Markdown files under src/content/blog/.',
    },
    proving: {
      title: 'Proving Ground',
      subtitle: 'High-complexity prototypes & signature deliveries',
      viewProject: 'Project file',
      tech: 'Stack',
      status: 'Status',
      back: 'Back',
    },
    footer: {
      rights: 'All rights reserved',
    },
    langSwitch: '中',
  },
} as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let val: unknown = ui[lang];
  for (const k of keys) {
    val = (val as Record<string, unknown>)?.[k];
  }
  return typeof val === 'string' ? val : key;
}
