export default class EditorWebViewServices {
  webView: null;

  static getWebView(): null {
    return this.webView;
  }

  static setWebView(value: null) {
    this.webView = value;
  }
}
