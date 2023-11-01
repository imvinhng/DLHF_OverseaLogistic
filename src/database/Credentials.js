/**
 * Type of Users:
 * sales order creator: in-charge of creating oversea orders in system
 * 
 * shipment creator: in-charge of converting sales-orders into shipments
 * 
 * on-site checker: in-charge of onsite checking after packing products into containers.
 * Shooting photo for any issues.
 * 
 * Manager: who can see all reports but not allow to create sales order or shipment
 * 
 * Customer: receive orders, confirm if othe order is normal or detect any issues.
 * Can make claim and communication with shipment creator or sales order creator.
 */

export const USERS = [
    {
        phone_number: 'admin',
        password: 'admin',
        name: 'Admin',
        type: 'sales_order_creator',
    },
    {
        phone_number: '0123456789',
        password: 'thanhnga',
        name: 'Thanh Nga',
        type: 'manager',
    },
    {
        phone_number: '0989181123',
        password: 'thedong',
        name: 'The Dong',
        type: 'customers',
    },
    {
        phone_number: '0373404205',
        password: 'thevinh',
        name: 'The Vinh',
        type: 'customers',
    },
]