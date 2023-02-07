//
//  MyPlugin.swift
//  App
//
//  Created by MacPro Dev on 4/26/19.
//

import Foundation

import Capacitor

@objc(MyPlugin)
public class MyPlugin: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success(["value": value])
    }

    @objc func openCamera(_ call: CAPPluginCall) {
        call.success()
    }

}