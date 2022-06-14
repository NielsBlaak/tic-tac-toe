import { AdMob, BannerAdSize, BannerAdPosition, BannerAdPluginEvents, RewardAdPluginEvents } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export async function initialize() {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    /**
     * If you want to explain TrackingAuthorization before showing the iOS dialog,
     * you can show the modal here.
     * ex)
     * const modal = await this.modalCtrl.create({
     *   component: RequestTrackingPage,
     * });
     * await modal.present();
     * await modal.onDidDismiss();  // Wait for close modal
     **/
  }
 
  AdMob.initialize({
    requestTrackingAuthorization: true,
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  });
}

export async function banner() {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size) => {
      // Subscribe Change Banner Size
    });

    const adId = Capacitor.getPlatform() === 'ios' ? 'ca-app-pub-6318474483266051/9703224269' : 'ca-app-pub-6318474483266051/9028692725';

    const options = {
      adId,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      // isTesting: true
      // npa: true
    };
    AdMob.showBanner(options);
}

export async function rewardVideo() {
    AdMob.addListener(RewardAdPluginEvents.Loaded, (info) => {
      // Subscribe prepared rewardVideo
    });
  
    AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem) => {
      // Subscribe user rewarded
      console.log(rewardItem);
    });

    const adId = Capacitor.getPlatform() === 'ios' ? 'ca-app-pub-6318474483266051/9954505708' : 'ca-app-pub-6318474483266051/7360131954';
  
    const options = {
      adId,
      // isTesting: true
      // npa: true
      // ssv: {
      //   userId: "A user ID to send to your SSV"
      //   customData: JSON.stringify({ ...MyCustomData })
      //}
    };
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd();
  }