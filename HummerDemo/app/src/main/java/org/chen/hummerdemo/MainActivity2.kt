package org.chen.hummerdemo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.didi.hummer.HummerRender
import com.didi.hummer.HummerRender.HummerRenderCallback
import com.didi.hummer.render.style.HummerLayout
import com.didi.hummer.core.engine.JSValue

import com.didi.hummer.context.HummerContext
import java.lang.Exception


class MainActivity2 : AppCompatActivity() {

    // Hummer渲染器
    private var hmRender: HummerRender? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initHummerLayout()
    }

    private fun initHummerLayout() {
        //val container = findViewById<HummerLayout>(R.id.layout_hummer_1)
        //hmRender = HummerRender(container,"test_namespace")
        hmRender?.setRenderCallback(object : HummerRenderCallback {
            override fun onSucceed(hmContext: HummerContext?, jsPage: JSValue?) {

            }

            override fun onFailed(e: Exception?) {

            }
        })
        hmRender?.renderWithUrl("http://192.168.3.1:8000/index.js");
    }

    override fun onResume() {
        super.onResume()
        hmRender?.onResume()
    }

    override fun onPause() {
        super.onPause()
        hmRender?.onPause()
    }

    override fun onDestroy() {
        super.onDestroy()
        hmRender?.onDestroy()
    }

    override fun onBackPressed() {
        if(hmRender != null && hmRender?.onBack()!! ){
            return
        }
        super.onBackPressed()
    }

}