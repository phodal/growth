export default class EditorWebViewServices {
  webview: null;

  static getWebview(): null {
    return this.webview;
  }

  static setWebview(value: null) {
    this.webview = value;
  }
}
