package org.chen.hummerdemo

import android.app.Application
import com.didi.hummer.Hummer
import com.didi.hummer.adapter.storage.impl.DefaultStorageAdapter

import com.didi.hummer.adapter.http.impl.DefaultHttpAdapter

import com.didi.hummer.adapter.imageloader.impl.DefaultImageLoaderAdapter

import com.didi.hummer.adapter.navigator.impl.DefaultNavigatorAdapter

import com.didi.hummer.HummerConfig
import com.didi.hummer.core.exception.ExceptionCallback
import com.didi.hummer.tools.JSLogger
import java.lang.Exception


class MyApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        val config = HummerConfig.Builder() // 自定义namespace（用于业务线隔离，需和Hummer容器中的namespace配合使用，可选）
            .setNamespace("test_namespace") // JS日志回调（可选）
            .setJSLogger { level: Int, msg: String? -> } // JS异常回调（可选）
            .setExceptionCallback { e: Exception? -> } // RTL支持（可选）
            .setSupportRTL(false) // 字体文件Assets目录设置（可选）
            .setFontsAssetsPath("fonts") // 自定义路由（可在这里指定自定义Hummer容器，可选）
            .setNavigatorAdapter(DefaultNavigatorAdapter()) // 自定义图片库（可选）
            .setImageLoaderAdapter(DefaultImageLoaderAdapter()) // 自定义网络库（可选）
            .setHttpAdapter(DefaultHttpAdapter()) // 自定义持久化存储（可选）
            .setStorageAdapter(DefaultStorageAdapter()) // 构造HummerConfig
            .builder()
        Hummer.init(this, config)
    }


    override fun onTerminate() {
        super.onTerminate()
        Hummer.release()
    }
}