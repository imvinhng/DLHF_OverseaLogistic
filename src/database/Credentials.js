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
        username: 'admin',
        password: 'admin',
        name: 'Admin',
        type: 'sales_order_creator',
        profile_pic_uri: require('../assets/images/profile-pics/default-profile.jpeg'),
    },
    {
        username: 'thanhnga',
        password: 'thanhnga',
        name: 'Thanh Nga',
        type: 'manager',
        profile_pic_uri: require('../assets/images/profile-pics/thanh_nga-profile.png'),
    },
    {
        username: 'thedong',
        password: 'thedong',
        name: 'The Dong',
        type: 'customers',
        profile_pic_uri: require('../assets/images/profile-pics/angel_girl-profile.png'),
    },
    {
        username: 'thevinh',
        password: 'thevinh',
        name: 'The Vinh',
        type: 'customers',
        profile_pic_uri: require('../assets/images/profile-pics/goku-profile.jpeg'),
    },
    {
        username: 'receiver',
        password: 'receiver',
        name: 'Receiver',
        type: 'receiver',
        profile_pic_uri: require('../assets/images/profile-pics/default-profile.jpeg'),
    },
]