({
	runUnitTests : function(component){
        
        // Prepare test data
        var testData = 1;
        
        // Execute business process
        testData++;
        
        // Assert test
        QUnit.test( "Test Lightning Demo Container Component", function( assert ) {
			
			assert.equal( 2, testData, "Passed!" );
            testData++;
            assert.equal( 3, testData, "Passed!" );
            testData--;
            assert.equal( 2, testData, "Passed!" );
            testData = 0;
            assert.equal( 0, testData, "Passed!" );
            
        });
    }
})