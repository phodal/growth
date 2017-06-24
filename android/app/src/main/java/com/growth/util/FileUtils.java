package ren.growth.util;

import android.content.Context;
import android.content.SharedPreferences;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

/**
 * Created by geezer. on 2017/5/26.
 */

public class FileUtils {
    /**
     *  从assets目录中复制整个文件夹内容
     *  @param  context  Context 使用CopyFiles类的Activity
     *  @param  oldPath  String  原文件路径  如：/aa
     *  @param  newPath  String  复制后路径  如：xx:/bb/cc
     */
    public static void copyFilesFassets(Context context, String oldPath, String newPath) {
        try {
            String fileNames[] = context.getAssets().list(oldPath);//获取assets目录下的所有文件及目录名
            if (fileNames.length > 0) {//如果是目录
                File file = new File(newPath);
                file.mkdirs();//如果文件夹不存在，则递归
                for (String fileName : fileNames) {
                    copyFilesFassets(context,oldPath + "/" + fileName,newPath+"/"+fileName);
                }
            } else {//如果是文件
                InputStream is = context.getAssets().open(oldPath);
                FileOutputStream fos = new FileOutputStream(new File(newPath));
                byte[] buffer = new byte[1024];
                int byteCount=0;
                while((byteCount=is.read(buffer))!=-1) {//循环从输入流读取 buffer字节
                    fos.write(buffer, 0, byteCount);//将读取的输入流写入到输出流
                }
                fos.flush();//刷新缓冲区
                is.close();
                fos.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            //如果捕捉到错误则通知UI线程
        }
    }

    public static boolean deleteDir(File dir) {
        if (dir.exists() && dir.isDirectory()) {
            String[] children = dir.list();
            //递归删除目录中的子目录下
            for (int i=0; i<children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
        }
        // 目录此时为空，可以删除
        return dir.delete();
    }

    public static void copyGrowthContent2externalSdcard(final Context context) {
        int versionCode = AppUtil.getVersionCode(context);
        SharedPreferences sharedPreferences =
                context.getSharedPreferences("spf_growth", Context.MODE_PRIVATE);
        int oldVersion = sharedPreferences.getInt("oldVersion", -1);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putInt("oldVersion", versionCode);
        editor.commit();
        if (oldVersion != versionCode) {

            new Thread(new Runnable() {
                @Override
                public void run() {
                    final String path = context.getExternalFilesDir("growth-content").getPath();
                    File file = new File(path);
                    FileUtils.deleteDir(file);
                    FileUtils.copyFilesFassets(context,
                            "growth-content",
                            path
                    );
                }
            }).run();
        }
    }
}
