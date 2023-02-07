package mx.minu.app;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class MyPlugin extends Plugin {

    private Context mContext;

    // Aqui se inicializa el plugin
    public void load() {
       this.mContext = getContext();
    }

    @PluginMethod()
    public void openCamera(PluginCall call) {

        try {
            // DO SOMETHING

            call.success();
        } catch (Exception e) {
            call.reject(e.getLocalizedMessage(), e);
        }

    }

}