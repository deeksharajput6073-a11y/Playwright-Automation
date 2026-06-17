const TestData = {

    SignupPage: {
        name: 'Test'
    },

    SignupDetails: {

        password: 'Test@123',

        day: '10',
        month: '5',
        year: '1998',

        firstName: 'Test',
        lastName: 'User',

        company: 'ABC Pvt Ltd',

        address1: 'Delhi',
        address2: 'Near Metro',

        country: 'India',
        state: 'Delhi',
        city: 'New Delhi',

        zipcode: '110001',

        mobileNumber: '9876543210'
    },

    contact: {

        name:
            'Test',

        email:
            'test@gmail.com',

        subject:
            'Automation Testing',

        message:
            'Testing contact form'
    },

    subscription: {

        email:
            'subscribe@gmail.com'
    },

    // Payment Data (for place order)
    Payment: {
        name: 'Test User',
        cardNumber: '4111111111111111',
        cvc: '123',
        month: '12',
        year: '2028'
    },

    // Checkout Comment
    Checkout: {
        comment: 'Order Automation Test'
    }
};

module.exports = TestData;