import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Test extends LightningElement {
   

    handleSuccess(event){
        this.showToast();
    }
    showToast() {
        const event = new ShowToastEvent({
            title: 'Sucesso',
            message:
                'A despesa foi criada com sucesso',
                variant: 'success'
        });
        this.dispatchEvent(event);
    }
}