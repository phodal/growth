package ren.growth.rn;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;

import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactApplication;
import com.rnziparchive.RNZipArchivePackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import ren.growth.rn.util.AppUtil;
import ren.growth.rn.util.FileUtils;
import com.rnfs.RNFSPackage;
import com.benwixen.rnfilesystem.RNFileSystemPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import cl.json.RNSharePackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNZipArchivePackage(),
            new RNFetchBlobPackage(),
            new OrientationPackage(),
            new GoogleAnalyticsBridgePackage(),
            new RNFSPackage(),
            new RNFileSystemPackage(),
            new SplashScreenReactPackage(),
            new RNSharePackage(),
            new RNDeviceInfo(),
            new RNSpinkitPackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    FileUtils.copyGrowthContent2externalSdcard(getApplicationContext());
  }
}
