import SECTION0 from './sections/section-0';
import SECTION1 from './sections/section-1';
import SECTION2 from './sections/section-2';
import SECTION3 from './sections/section-3';
import SECTION4 from './sections/section-4';
import SECTION5 from './sections/section-5';
import SECTION6 from './sections/section-6';
import SECTION7 from './sections/section-7';

const SECTIONS = [
  [
    SECTION0.hello, SECTION0.env,
  ],
  [
    SECTION1.build, SECTION1.front, SECTION1.backend,
  ],
  [
    SECTION2.before, SECTION2.test, SECTION2.coding,
  ],
  [
    SECTION3.container, SECTION3.server, SECTION3.configurable,
  ],
  [
    SECTION4.analytics, SECTION4.ux,
  ],
  [
    SECTION5.ci, SECTION5.cd,
  ],
  [
    SECTION6.legacy, SECTION6.refactor,
  ],
  [
    SECTION7.retro, SECTION7.arch,
  ],
];

export default SECTIONS;
