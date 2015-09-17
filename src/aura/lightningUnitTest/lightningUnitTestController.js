({
	onInit : function(component, event, helper) {
		$A.get("e.c:unitTestEvent").fire();
	}
})