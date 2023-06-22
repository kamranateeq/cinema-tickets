export default class BussinessRules {
    constructor() {
        
    }
    isTicketsQuantityValid(totalTickets) {
        
        if(totalTickets >20)
        {
            console.log('Sorry! only a maximum of 20 tickets that can be purchased at a time.');
            return false;
        }
        return true;
        

    }
    isTicketsAdultPurchaseValid(totalTickets, adultTicket) {
        if(totalTickets > 1 && adultTicket== 0)
        {
            console.log('Sorry! child and Infant tickets cannot be purchased without purchasing an Adult ticket.');
            return false;
        }
        return true;
    }
}

