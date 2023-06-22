import TicketBuilder from './src/pairtest/lib/CenimaTicketsBuilder.js';

let _adultTicket= 1;
let _childTicket= 2;
let _infantTicket= 1;
let _accountID = 100;

var cerateTicket = new TicketBuilder(_adultTicket,_childTicket,_infantTicket, _accountID);
if(cerateTicket.isTicketsPurchaseValid())
{
    cerateTicket.purchaseAllTickets(_adultTicket,_childTicket,_infantTicket);
}
else
{
    console.log('Purchase of tickets is unsuccessful. Please try again. ');
}

// Test case 1= more than 20 tickets

var cerateTicket = new TicketBuilder(12,12,12, _accountID);
if(cerateTicket.isTicketsPurchaseValid())
{
    cerateTicket.purchaseAllTickets(12,12,12);
}
else
{
    console.log('Purchase of tickets is unsuccessful. Please try again. ');
}

// Test case 2 = 0 adults

var cerateTicket = new TicketBuilder(0,12,12, _accountID);
if(cerateTicket.isTicketsPurchaseValid())
{
    cerateTicket.purchaseAllTickets(0,12,12);
}
else
{
    console.log('Purchase of tickets is unsuccessful. Please try again. ');
}






