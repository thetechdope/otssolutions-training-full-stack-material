/*

Real Candid Feedback App

Sign Up

/signup

Customer Schema -

id: Mongoose Default
firstName : String
lastName: String
email: String (Unique)
password: String (Encrypt)
phoneNumber: String
isActive: Boolean (Default -> True)
feedbacksProvided : [
    {
        rating: Number (0 to 2)
        business: String
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

/*

APIs -

/signup - 1
/verifyotp - 1
/signin - 1
/forgetpassword - 2
/verifyotp - 1
/resetpassword - 2
/changepassword - 2
/getprofile - 1
/updateprofile - 2
/deleteaccount - 3
/recentlyAddedFeedbacks - 2
/searchBusiness - 3
/getBusinessDetails - 1
/getAllFeedbacks - 2
/addFeedback - 2
/addAnonymousFeedback - 2

*/
