package org.chen.hummerdemo

import android.app.Application
import com.didi.hummer.Hummer

class MyApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        Hummer.init(this)
    }

}