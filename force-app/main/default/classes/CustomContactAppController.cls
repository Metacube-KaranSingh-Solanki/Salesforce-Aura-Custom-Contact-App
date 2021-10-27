public with sharing class CustomContactAppController {

    @AuraEnabled
    public static CustomContact__c saveContact(CustomContact__c contactToSave){
        upsert contactToSave;
        return contactToSave;
    }
}
