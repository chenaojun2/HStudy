package org.chen.hummerdemo

import com.didi.hummer.HummerActivity
import com.didi.hummer.adapter.navigator.NavPage

class MainActivity : HummerActivity() {

    override fun getPageInfo(): NavPage {

        return NavPage("http://192.168.3.1:8000/index.js")
    }

}