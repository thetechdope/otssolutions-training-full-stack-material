/*

Real Candid Feedback App

/customers

Customer Schema -

id: Mongoose Default
firstName : String
lastName: String
email: String (Unique)
password: String (Encrypt)
phoneNumber: String
isBlocked: Boolean (Default -> False)
feedbacksProvided : [
    {
        rating: Number (0 to 2)
        comment: String
        createdAt: Date
    }
]

/feedbacks/:id

[
    {
        id: 
        isAnonymous: Boolean (False)
        rating: Number (1 to 5)
        comment: String
        createdAt: Date
    }
]

/anonymousFeedbacks

[
    {
        id: Mongo Default ID
        rating: Number (1 to 5)
        comment: String
        createdAt: Date
    }
]


/getAllFeedbacks


*/
