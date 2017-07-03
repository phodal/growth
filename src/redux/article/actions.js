export const SAVE_ARTICLE = 'SAVE_ARTICLE';

export function saveArticle(regex) {
  return {
    type: SAVE_ARTICLE, regex,
  };
}
