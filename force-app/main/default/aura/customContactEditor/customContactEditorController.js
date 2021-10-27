({
    clickCreateContact: function (component, event, helper) {
        let validContact = component.find('contactform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);

        if (validContact) {
            let newContact = component.get("v.newContact");
            helper.createContact(component, newContact);
        }
    }
})
