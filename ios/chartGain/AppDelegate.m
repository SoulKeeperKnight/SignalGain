/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RCCManager.h"
#import <React/RCTRootView.h>

@implementation AppDelegate

@synthesize oneSignal = _oneSignal;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.oneSignal = [[RCTOneSignal alloc] initWithLaunchOptions:launchOptions appId:@"f58be678-d083-4dc8-a3cd-e316a13cedd4"];

  NSURL *jsCodeLocation;
#ifdef DEBUG
  //  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
  
  
  // **********************************************
  // *** DON'T MISS: THIS IS HOW WE BOOTSTRAP *****
  // **********************************************
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];
  return YES;
}

@end
