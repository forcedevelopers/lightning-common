<aura:application template="c:mainTemplate">
    
    <ltng:require styles="/resource/styles/css/qunit-1.19.0.css"
			      scripts="/resource/styles/js/qunit-1.19.0.js"
                  afterScriptsLoaded="{!c.onInit}"/>
    
    <div id="qunit"></div>
  	<div id="qunit-fixture"></div>
    
    <c:lightningDemoContainer />
</aura:application>