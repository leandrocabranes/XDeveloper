import { LightningElement, api } from 'lwc';

import FISCAL_STREET from '@salesforce/schema/Account.Fiscal_Street__c';
import FISCAL_CITY from '@salesforce/schema/Account.Fiscal_City__c';
import FISCAL_POSTAL_CODE from '@salesforce/schema/Account.Fiscal_Postal_Code__c';
import FISCAL_STATE from '@salesforce/schema/Account.Fiscal_State__c';
import FISCAL_COUNTRY from '@salesforce/schema/Account.Fiscal_Country__c';

export default class FiscalAddressForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [FISCAL_STREET, FISCAL_CITY, FISCAL_POSTAL_CODE, FISCAL_STATE, FISCAL_COUNTRY];

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}