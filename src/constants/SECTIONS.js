import SECTION0 from './sections/section-0';
import SECTION1 from './sections/section-1';
import SECTION2 from './sections/section-2';
import SECTION3 from './sections/section-3';
import SECTION4 from './sections/section-4';
import SECTION5 from './sections/section-5';
import SECTION6 from './sections/section-6';
import SECTION7 from './sections/section-7';

const SECTIONS = [
  {
    title: '从零开始',
    description: '从这里准备你的技能图谱',
    sections: [
      SECTION0.hello, SECTION0.env,
    ],
  },
  {
    title: '前期准备',
    description: '前期，我们需要搭建好构建系统',
    sections: [
      SECTION1.build, SECTION1.front, SECTION1.backend,
    ],
  },
  {
    title: '编码',
    description: '写代码之前，你需要知道哪些事?',
    sections: [
      SECTION2.before, SECTION2.test, SECTION2.coding,
    ],
  },
  {
    title: '上线',
    description: '上线，如何才能不痛苦？',
    sections: [
      SECTION3.container, SECTION3.server, SECTION3.configurable,
    ],
  },
  {
    title: '数据分析',
    description: '怎样才能开发出用户喜爱的产品?',
    sections: [
      SECTION4.analytics, SECTION4.ux,
    ],
  },
  {
    title: '持续交付',
    description: '持续地做下去才有价值',
    sections: [
      SECTION5.ci, SECTION5.cd,
    ],
  },
  {
    title: '遗留系统',
    description: '糟糕，我们又玩过火了',
    sections: [
      SECTION6.legacy, SECTION6.refactor,
    ],
  },
  {
    title: '回顾与新架构',
    description: '哈哈，世界又迎来了新的曙光',
    sections: [
      SECTION7.retro, SECTION7.arch,
    ],
  },
];

export default SECTIONS;
