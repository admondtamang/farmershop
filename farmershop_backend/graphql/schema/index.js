import { buildSchema } from "graphql";

const graphQlSchema = buildSchema(`

type Product{
    _id:ID!
    name:String!
    price:Int!
    quantity:Int!
    creator:User
}
type User{
    _id:ID!
    email:String!
    password:String
}

type AuthData{
    userId:ID!
    token:String!
}

input UserInput{
    email:String!
    password:String!
}
input ProductInput{
    name:String!
    quantity:Int!
    price:Int!
}
 
type RootQuery{
    products:[Product!]!
    login(email:String!,password:String!):AuthData!
}

type RootMutation{
    createUser(userInput:UserInput):User
    createProduct(productInput:ProductInput):Product
}

schema{
    query:RootQuery
    mutation:RootMutation
}

`);

export default graphQlSchema;
