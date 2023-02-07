//
//  MyPlugin.m
//  App
//
//  Created by MacPro Dev on 4/26/19.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(
           MyPlugin,
           "MyPlugin",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openCamera, CAPPluginReturnPromise);
)
