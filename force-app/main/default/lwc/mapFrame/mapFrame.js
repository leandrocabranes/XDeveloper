import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [
    'Account.BillingStreet',
    'Account.BillingCity',
    'Account.BillingPostalCode',
    'Account.BillingState',
    'Account.BillingCountry',
    'Account.ShippingStreet',
    'Account.ShippingCity',
    'Account.ShippingPostalCode',
    'Account.ShippingState',
    'Account.ShippingCountry',
    'Account.Fiscal_Street__c',
    'Account.Fiscal_City__c',
    'Account.Fiscal_Postal_Code__c',
    'Account.Fiscal_State__c',
    'Account.Fiscal_Country__c'
];

export default class MapFrame extends LightningElement {
    @api recordId;
    @track mapMarkers = [];
    listView = '';
    @wire(getRecord, {recordId: '$recordId', fields})
    loadAddress({error, data}) {
        if (error) {
            window.console.log(error);
        } else if (data) {
            this.mapMarkers = [
                {
                    location: {
                        Street: data.fields.BillingStreet.value,
                        City: data.fields.BillingCity.value,
                        PostalCode: data.fields.BillingPostalCode.value,
                        State: data.fields.BillingState.value,
                        Country: data.fields.BillingCountry.value
                    },
                    icon: 'utility:email',
                    title: 'Billing Address',
                    description: 'Dirección de facturación'
                },
                {
                    location: {
                        Street: data.fields.ShippingStreet.value,
                        City: data.fields.ShippingCity.value,
                        PostalCode: data.fields.ShippingPostalCode.value,
                        State: data.fields.ShippingState.value,
                        Country: data.fields.ShippingCountry.value
                    },
                    icon: 'utility:send',
                    title: 'Shipping Address',
                    description: 'Dirección de envío'
                },
                {
                    location: {
                        Street: data.fields.Fiscal_Street__c.value,
                        City: data.fields.Fiscal_City__c.value,
                        PostalCode: data.fields.Fiscal_Postal_Code__c.value,
                        State: data.fields.Fiscal_State__c.value,
                        Country: data.fields.Fiscal_Country__c.value
                    },
                    icon: 'utility:knowledge_base',
                    title: 'Fiscal Address',
                    description: 'Dirección fiscal'
                }
            ];
            this.listView = 'visible';
        }
    };
}