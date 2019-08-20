import { LightningElement, api } from 'lwc';

import BILLING_STREET from '@salesforce/schema/Account.BillingStreet';
import BILLING_CITY from '@salesforce/schema/Account.BillingCity';
import BILLING_POSTAL_CODE from '@salesforce/schema/Account.BillingPostalCode';
import BILLING_STATE from '@salesforce/schema/Account.BillingState';
import BILLING_COUNTRY from '@salesforce/schema/Account.BillingCountry';

export default class BillingAddressForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [BILLING_STREET, BILLING_CITY, BILLING_POSTAL_CODE, BILLING_STATE, BILLING_COUNTRY];

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}