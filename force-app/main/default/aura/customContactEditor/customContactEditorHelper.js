({
    createContact: function (component, contact) {
        //1
        let action = component.get("c.saveContact");        // c.saveContact refers to saveContact of Apex Controller
        action.setParams({
            "contactToSave": contact
        });

        //3
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.savedContact", response.getReturnValue());
                let newContactReset = {
                    'sobjectType': 'CustomContact__c',
                    'Name': '',
                    'LastName__c': '',
                    'Email__c': '',
                    'Phone__c': '',
                    'Fax__c': ''
                };
                component.set("v.newContact", newContactReset);
                component.set("v.errorMessage", '');
            } else {
                component.set("v.errorMessage", "Failed to save contact");
            }
        });

        //2
        $A.enqueueAction(action);
    }
})
