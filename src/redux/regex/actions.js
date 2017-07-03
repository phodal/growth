export const CHOICE_REGEX = 'CHOICE_REGEX';

export function choiceRegex(regex) {
  return {
    type: CHOICE_REGEX, regex,
  };
}
