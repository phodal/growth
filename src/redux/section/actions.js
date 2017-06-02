export const SAVE_SECTION = 'SAVE_SECTION';

export function saveSection(section) {
  return {
    type: SAVE_SECTION, section,
  };
}
