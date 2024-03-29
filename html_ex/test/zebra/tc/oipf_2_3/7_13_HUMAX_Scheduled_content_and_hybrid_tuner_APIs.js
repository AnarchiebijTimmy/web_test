describe("7.13 Scheduled content and hybrid tuner APIs", function() {
    var oipfobjectFactory;
    var videoBroadcast;
    var channelConfig;
    var channelList;
    var channel;
    var favouriteListCollection;
    var favouriteList;
    var channelScanOptions;
    var dVBTChannelScanParameters;
    var dVBSChannelScanParameters;
    var channelScanParametersCollection;
    var channelScanParameters;
    var cSearchedInfo;
    var dVBCChannelScanParameters;
    var streamEvent;
    var aTSCTChannelScanParameters;

    var ID_DVB_T = 12;
    var ID_DVB_T2 = 16;
    var ID_DVB_C = 10;
    var ID_DVB_C2 = 14;
    var ID_DVB_S = 11;
    var ID_DVB_S2 = 15;
    var ID_ATSC_T = 30;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
    }catch(e){
        videoBroadcast = undefined;
    }

    describe("7.13.1 The video/broadcast embedded object", function() {
        describe("Hmx Properties", function() {
            it("startOffset", function() { expect(videoBroadcast.startOffset).toBeDefined(); });
            it("trickRestrictMode", function() { expect(videoBroadcast.trickRestrictMode).toBeDefined(); });
            it("maxDuration", function() { expect(videoBroadcast.maxDuration).toBeDefined(); });
            it("onTrickRestrictModeChanged", function() { expect(videoBroadcast.onTrickRestrictModeChanged).toBeDefined(); });
            it("onCasMessageNotify", function() { expect(videoBroadcast.onCasMessageNotify).toBeDefined(); });
            it("onCasUiNotify", function() { expect(videoBroadcast.onCasUiNotify).toBeDefined(); });
            it("onRctInfoChanged", function() { expect(videoBroadcast.onRctInfoChanged).toBeDefined(); });
            it("onNCDChanged", function() { expect(videoBroadcast.onNCDChanged).toBeDefined(); });
            it("onRequestPincode", function() { expect(videoBroadcast.onRequestPincode).toBeDefined(); });
            it("onRequestMhegTune", function() { expect(videoBroadcast.onRequestMhegTune).toBeDefined(); });
            it("onRequestMhegInterrupt", function() { expect(videoBroadcast.onRequestMhegInterrupt).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("recordNow", function() { expect(videoBroadcast.recordNow).toBeDefined(); });
            it("setChannelFCC", function() { expect(videoBroadcast.setChannelFCC).toBeDefined(); });
            it("recordDelayed", function() { expect(videoBroadcast.recordDelayed).toBeDefined(); });
            it("offComponent", function() { expect(videoBroadcast.offComponent).toBeDefined(); });
            it("requestThumbnail", function() { expect(videoBroadcast.requestThumbnail).toBeDefined(); });
            it("checkChannelChangable", function() { expect(videoBroadcast.checkChannelChangable).toBeDefined(); });
            it("getPlayingThumbnail", function() { expect(videoBroadcast.getPlayingThumbnail).toBeDefined(); });
            it("resultPincode", function() { expect(videoBroadcast.resultPincode).toBeDefined(); });
        });
    });
    describe("7.13.9 The ChannelConfig class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
        });
        describe("Hmx Properties", function() {
            it("genre", function() { expect(channelConfig.genre).toBeDefined(); });
            it("genreExt", function() { expect(channelConfig.genreExt).toBeDefined(); });
            it("onChannelScanHumax", function() { expect(channelConfig.onChannelScanHumax).toBeDefined(); });
            it("onChannelListUpdateHumax", function() { expect(channelConfig.onChannelListUpdateHumax).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("createChannelSearchedInfoObject", function() { expect(channelConfig.createChannelSearchedInfoObject).toBeDefined(); });
            it("removeChannel", function() { expect(channelConfig.removeChannel).toBeDefined(); });
            it("removeChannelList", function() { expect(channelConfig.removeChannelList).toBeDefined(); });
            it("controlScan", function() { expect(channelConfig.controlScan).toBeDefined(); });
            it("setSelectedConflictLcn", function() { expect(channelConfig.setSelectedConflictLcn).toBeDefined(); });
            it("createChannelScanParametersObject", function() { expect(channelConfig.createChannelScanParametersObject).toBeDefined(); });
            it("startScan", function() { expect(channelConfig.startScan).toBeDefined(); });
        });
    });
    describe("7.13.11 The Channel class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            channelList = channelConfig.channelList;
            channel = channelList[0];
        });
        describe("Hmx Properties", function() {
            it("svcSection", function() { expect(channel.svcSection).toBeDefined(); });
            it("hasTeletext", function() { expect(channel.hasTeletext).toBeDefined(); });
            it("defaultAuth", function() { expect(channel.defaultAuth).toBeDefined(); });
            it("svcoptype", function() { expect(channel.svcoptype).toBeDefined(); });
            it("removed", function() { expect(channel.removed).toBeDefined(); });
            it("channelStatus", function() { expect(channel.channelStatus).toBeDefined(); });
            it("tuningInfo", function() { expect(channel.tuningInfo).toBeDefined(); });
            it("casIDs", function() { expect(channel.casIDs).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("changeMajorChannel", function() { expect(channel.changeMajorChannel).toBeDefined(); });
        });
    });
    describe("7.13.12 The FavouriteListCollection class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            favouriteListCollection = channelConfig.favouriteLists;
        });
        describe("Hmx Methods", function() {
            it("getFavouriteList", function() { expect(favouriteListCollection.getFavouriteList).toBeDefined(); });
        });
    });
    describe("7.13.13 The FavouriteList class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            favouriteListCollection = channelConfig.favouriteLists;
            favouriteList = favouriteListCollection[0];
        });
        describe("Hmx Methods", function() {
            it("insertBefore2", function() { expect(favouriteList.insertBefore2).toBeDefined(); });
            it("commit2", function() { expect(favouriteList.commit2).toBeDefined(); });
        });
    });
    describe("7.13.16 The ChannelScanOptions class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            channelScanOptions = channelConfig.createChannelScanOptionsObject();
        });
        describe("Hmx Properties", function() {
            it("casType", function() { expect(channelScanOptions.casType).toBeDefined(); });
            it("enableNetworkScan", function() { expect(channelScanOptions.enableNetworkScan).toBeDefined(); });
        });
    });
    describe("7.13.17 The ChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBCChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_C);;
        });
        describe("Hmx Properties", function() {
            it("idType", function() { expect(dVBTChannelScanParameters.idType).toBeDefined(); });
        });
    });
    describe("7.13.18 The DVBTChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBTChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_T);;
        });
        describe("Hmx Properties", function() {
            it("transmission", function() { expect(dVBTChannelScanParameters.transmission).toBeDefined(); });
        });
    });
    describe("7.13.19 The DVBSChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBSChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_S);
        });
        describe("Hmx Properties", function() {
            it("antennaId", function() { expect(dVBSChannelScanParameters.antennaId).toBeDefined(); });
            it("antennaName", function() { expect(dVBSChannelScanParameters.antennaName).toBeDefined(); });
        });
    });
    describe("7.13.22 The ChannelScanParametersCollection class", function() {
        beforeEach(function() {
            channelScanParametersCollection;
        });
        it("ChannelScanParametersCollection", function() { expect(channelScanParametersCollection).toBeDefined(); });
        describe("Hmx Methods", function() {
            it("removeChannelScanParam", function() { expect(channelScanParametersCollection.removeChannelScanParam).toBeDefined(); });
            it("addChannelScanParam", function() { expect(channelScanParametersCollection.addChannelScanParam).toBeDefined(); });
        });
    });
    describe("7.13.23 The CSearchedInfo class", function() {
        beforeEach(function() {
            cSearchedInfo;
        });
        describe("Hmx Properties", function() {
            it("length", function() { expect(cSearchedInfo.length).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("getInfo", function() { expect(cSearchedInfo.getInfo).toBeDefined(); });
            it("setInfo", function() { expect(cSearchedInfo.setInfo).toBeDefined(); });
            it("geStringtInfo", function() { expect(cSearchedInfo.geStringtInfo).toBeDefined(); });
            it("setStringInfo", function() { expect(cSearchedInfo.setStringInfo).toBeDefined(); });
        });
    });
});
