describe("3.5 HDlna", function() {
    var humaxobjectFactory;
    var dlnaManager;
    var dmp, dms, dmr;

    beforeEach(function() {
        humaxobjectFactory = window.humaxObjectFactory;
        dlnaManager = humaxobjectFactory.createDlnaManagerObject();
        dmp = dlnaManager.dmp;
        dms = dlnaManager.dms;
        dmr = dlnaManager.dmr;
    });

    describe("3.5.1 HDlna", function() { 
        describe("3.6.1.1 Properties", function() {
            it("dmp", function() { expect(dlnaManager.dmp).toBeDefined(); });
            it("dms", function() { expect(dlnaManager.dms).toBeDefined(); });
            it("dmr", function() { expect(dlnaManager.dmr).toBeDefined(); });
        });
    });

    describe("3.5.2 HDlnaDmp", function() { 
        describe("3.5.2.1 Properties", function() {
            it("state", function() { expect(dmp.state).toBeDefined(); });
            it("onCDSScan", function() { expect(dmp.onCDSScan).toBeDefined(); });
        });

        describe("3.5.2.2 Methods", function() {
            it("startScan", function() { expect(dmp.startScan).toBeDefined(); });
            it("stopScan", function() { expect(dmp.stopScan).toBeDefined(); });
            it("refreshDms", function() { expect(dmp.refreshDms).toBeDefined(); });
            it("getAvailableCdsList", function() { expect(dmp.getAvailableCdsList).toBeDefined(); });
        });
    });

    describe("3.5.3 HDlnaDms", function() { 
        describe("3.5.3.1 Properties", function() {
            it("started", function() { expect(dms.started).toBeDefined(); });
            it("friendlyName", function() { expect(dms.friendlyName).toBeDefined(); });
        });

        describe("3.5.3.2 Methods", function() {
            it("start", function() { expect(dms.start).toBeDefined(); });
            it("stop", function() { expect(dms.stop).toBeDefined(); });
        });
    });

    describe("3.5.4 HDlnaDmr", function() { 
        describe("3.5.4.1 Properties", function() {
            it("started", function() { expect(dmr.started).toBeDefined(); });
            it("activated", function() { expect(dmr.activated).toBeDefined(); });
            it("friendlyName", function() { expect(dmr.friendlyName).toBeDefined(); });
            it("onReqPlay", function() { expect(dmr.onReqPlay).toBeDefined(); });
            it("onReqStop", function() { expect(dmr.onReqStop).toBeDefined(); });
            it("onReqPause", function() { expect(dmr.onReqPause).toBeDefined(); });
            it("onReqSeek", function() { expect(dmr.onReqSeek).toBeDefined(); });
            it("onReqSetVolume", function() { expect(dmr.onReqSetVolume).toBeDefined(); });
            it("onReqMute", function() { expect(dmr.onReqMute).toBeDefined(); });
        });

        describe("3.5.4.2 Methods", function() {
            it("start", function() { expect(dmr.start).toBeDefined(); });
            it("stop", function() { expect(dmr.stop).toBeDefined(); });
            it("setMediaChange", function() { expect(dmr.setMediaChange).toBeDefined(); });
        });
    });

    describe("3.5.5 HDlnaCds", function() { 
        describe("3.5.5.1 Properties", function() {
            // To Do - senario test
            /*
            it("udn", function() { expect(cds.udn).toBeDefined(); });
            it("friendlyName", function() { expect(cds.friendlyName).toBeDefined(); });
            it("ipAddress", function() { expect(cds.ipAddress).toBeDefined(); });
            it("onContentBrowse", function() { expect(cds.onContentBrowse).toBeDefined(); });
            it("onContentSearch", function() { expect(cds.onContentSearch).toBeDefined(); });
            */
        });

        describe("3.5.5.2 Methods", function() {
            // To Do - senario test
            /*
            it("browseContent", function() { expect(cds.browseContent).toBeDefined(); });
            it("searchContent", function() { expect(cds.searchContent).toBeDefined(); });
            */
        });
    });

    describe("3.5.6 HDlnaCdsContent", function() { 
        describe("3.5.6.1 Properties", function() {
            // To Do - senario test
            /*
            it("objectID", function() { expect(cdsContent.objectID).toBeDefined(); });
            it("parentID", function() { expect(cdsContent.parentID).toBeDefined(); });
            it("class", function() { expect(cdsContent.class).toBeDefined(); });
            it("restricted", function() { expect(cdsContent.restricted).toBeDefined(); });
            it("objectType", function() { expect(cdsContent.objectType).toBeDefined(); });
            it("importURI", function() { expect(cdsContent.importURI).toBeDefined(); });
            it("thumbnailUrl", function() { expect(cdsContent.thumbnailUrl).toBeDefined(); });
            it("byteSeekAble", function() { expect(cdsContent.byteSeekAble).toBeDefined(); });
            it("timeSeekAble", function() { expect(cdsContent.timeSeekAble).toBeDefined(); });
            it("title", function() { expect(cdsContent.title).toBeDefined(); });
            it("date", function() { expect(cdsContent.date).toBeDefined(); });
            it("duration", function() { expect(cdsContent.duration).toBeDefined(); });
            it("resolution", function() { expect(cdsContent.resolution).toBeDefined(); });
            it("digitalCopyControl", function() { expect(cdsContent.digitalCopyControl).toBeDefined(); });
            it("genre", function() { expect(cdsContent.genre).toBeDefined(); });
            it("childCount", function() { expect(cdsContent.childCount).toBeDefined(); });
            it("album", function() { expect(cdsContent.album).toBeDefined(); });
            it("artist", function() { expect(cdsContent.artist).toBeDefined(); });
            */
        });
    });

    describe("3.5.7 HDlnaCdsContentCollection", function() { 
    });

    describe("3.5.8 HMXdlnaManager", function() { 
        describe("3.5.8.1 Properties", function() {
            // To Do - senario test
            /*
            it("onPhysicalstorageAttached", function() { expect(cdsContentCollection.onPhysicalStorageAttached).toBeDefined(); });
            */
        });

        describe("3.5.8.2 Methods", function() {
            // To Do - senario test
            /*
            it("getPhysicalStorages", function() { expect(cdsContentCollection.getPhysicalStorages).toBeDefined(); });
            */
        });
    });

});
