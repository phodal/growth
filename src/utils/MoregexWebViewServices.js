export default class MoregexWebViewServices {
  webView: null;

  static getWebView(): null {
    return this.webView;
  }

  static setWebView(value: null) {
    this.webView = value;
  }
}
