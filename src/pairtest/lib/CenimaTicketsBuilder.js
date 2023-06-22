import ticketRequest from '../lib/TicketTypeRequest.js';
import seatReservation from '../../../src/thirdparty/seatbooking/SeatReservationService.js';
import ticketPaymentRequest from '../../thirdparty/paymentgateway/TicketPaymentService.js';
import bussinessRules from './BussinessRules.js';
import TicketService from '../TicketService.js';


export default class CenimaTicketsBuilder {
    constructor(adult, child, infant, accountID) {
        this.adult = adult;
        this.child = child;
        this.infant = infant;
        this.TotalSeats =  Number(this.adult) + Number(this.child) + Number(this.infant*0);
        this.accountID = accountID;
        this.totalTicketAllowed = 20;
        this.adultTicketPrice = 20;
        this.childTicketPrice = 10;
        this.infantTicketPrice = 0;
    }

    // calculateTotalSeats() {
    //     // calculate total seats
    //     var totalSeats = Number(this.adult) + Number(this.child) + Number(this.infant*0);
    //     return totalSeats;
    // }
    calculateTotalSeats() {
        
     return this.TotalSeats;
    }
    calculateTotalCost() {
     var totalCost = (this.adult*this.adultTicketPrice)+(this.child*this.childTicketPrice)+(this.infant*this.infantTicketPrice);
     return totalCost;
    }

    isTicketsPurchaseValid() {
        
        var bussinesRule = new bussinessRules();
        if(bussinesRule.isTicketsQuantityValid(this.TotalSeats) && bussinesRule.isTicketsAdultPurchaseValid(this.TotalSeats,this.adult))
        {
            return true;
        }
        
        else
        {
            console.log('Sorry! ticket purchase is not valid.');
            return false;
            
        }
    }
    // function to purchase tickets and book seats
     purchaseAllTickets(adultTicket,childTicket,infantTicket) {
    
    // creating new ticket request object
    var ticketRequestAdult = new ticketRequest('ADULT',adultTicket);
    var ticketRequestCHILD = new ticketRequest('CHILD',childTicket);
    var ticketRequestINFANT = new ticketRequest('INFANT',infantTicket);
    var ticketService = new TicketService()
    ticketService.purchaseTickets(this.accountID,ticketRequestAdult);
    ticketService.purchaseTickets(this.accountID,ticketRequestCHILD);
    ticketService.purchaseTickets(this.accountID,ticketRequestINFANT);
    
    // creating request for ticket payment
    var ticketPayment = new ticketPaymentRequest();
    ticketPayment.makePayment(this.accountID, this.calculateTotalCost());
    console.log('Total cost of tickets paid: ' + this.calculateTotalCost() );
    
    // creating request to book seats
    var seatBooking = new seatReservation();
    seatBooking.reserveSeat(this.accountID,this.TotalSeats);
    console.log('Total seats booked: ' + this.TotalSeats );
    }

    
}

