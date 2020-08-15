import { buildSchema } from "graphql";

const graphQlSchema = buildSchema(`

type Product{
    _id:ID!
    name:String!
    price:Int!
    quantity:Int!
    weight:String!
    description:String!
    creator:User
}
type User{
    _id:ID!
    email:String!
    password:String
    location:String
    phone:String
}

type AuthData{
    userId:ID!
    token:String!
}

input UserInput{
    email:String!
    password:String!
    phone:String
    location:String
}
input ProductInput{
    name:String!
    quantity:Int!
    price:Int!
    weight:String!
    description:String!

}
 
type RootQuery{
    products:[Product!]!
    login(email:String!,password:String!):AuthData!
    me:User
}

type RootMutation{
    createUser(userInput:UserInput):User
    createProduct(productInput:ProductInput):Product
    demandProduct(productInput:ProductInput):Product
}

schema{
    query:RootQuery
    mutation:RootMutation
}

`);

export default graphQlSchema;
