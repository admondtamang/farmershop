import axios from "axios";

describe("Auth resolvers", () => {
  test("create user", async () => {
    const response = await axios.post("http://localhost:3000/graphql", {
      query: `
      mutation{
        createUser(userInput:{userName:"geeta",email:"geeta@gmail.com" password:"geeta",location:"ktm",phone:"7778788998"}){
        email
      }
    }
      `,
    });

    const { data } = response;

    expect(data).toMatchObject({
      data: {
        createUser: {
          email: "geeta@gmail.com",
        },
      },
    });
  });

  test("login user", async () => {
    const response = await axios.post("http://localhost:3000/graphql", {
      query: `
      query{
        login(userInput:{email:"geeta@gmail.com" password:"geeta"}){
        userId
      }
    }
      `,
    });

    const { data } = response;

    expect(data).toMatchObject({
      data: {
        login: {
          userId: "5f3761b11bae47503024c8c5",
        },
      },
    });
  });

  test("current user", async () => {
    const response = await axios.post("http://localhost:3000/graphql", {
      query: `
      query{
        me{
         email
       } 
       }
      `,
    });

    const { data } = response;

    expect(data).toMatchObject({
      data: {
        errors: {
          userId: "5f3761b11bae47503024c8c5",
        },
      },
    });
  });
});
