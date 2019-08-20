import { LightningElement, api } from 'lwc';

import SHIPPING_STREET from '@salesforce/schema/Account.ShippingStreet';
import SHIPPING_CITY from '@salesforce/schema/Account.ShippingCity';
import SHIPPING_POSTAL_CODE from '@salesforce/schema/Account.ShippingPostalCode';
import SHIPPING_STATE from '@salesforce/schema/Account.ShippingState';
import SHIPPING_COUNTRY from '@salesforce/schema/Account.ShippingCountry';

export default class ShippingAddressForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [SHIPPING_STREET, SHIPPING_CITY, SHIPPING_POSTAL_CODE, SHIPPING_STATE, SHIPPING_COUNTRY];

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}