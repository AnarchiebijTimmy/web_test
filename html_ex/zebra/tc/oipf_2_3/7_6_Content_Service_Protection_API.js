describe("7.6 Content Service Protection API", function() {
    var oipfobjectFactory;
    var drmAgent;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        drmAgent = oipfobjectFactory.createDrmAgentObject();

    }catch(e){
        drmAgent = undefined;
    }

    describe("7.6.1 The application/oipfDrmAgent embedded object", function() {
        describe("7.6.1.1 Properties", function() {
            it("onDRMMessageResult", function() { expect(drmAgent.onDRMMessageResult).toBeDefined(); });
            it("onDRMSystemStatusChange", function() { expect(drmAgent.onDRMSystemStatusChange).toBeDefined(); });
            it("onDRMSystemMessage", function() { expect(drmAgent.onDRMSystemMessage).toBeDefined(); });
        });
        describe("7.6.1.2 Methods", function() {
            it("sendDRMMessage", function() { expect(drmAgent.sendDRMMessage).toBeDefined(); });
            it("DRMSystemStatus", function() { expect(drmAgent.DRMSystemStatus).toBeDefined(); });
            it("canPlayContent", function() { expect(drmAgent.canPlayContent).toBeDefined(); });
            it("canRecordContent", function() { expect(drmAgent.canRecordContent).toBeDefined(); });
        });
    });
});