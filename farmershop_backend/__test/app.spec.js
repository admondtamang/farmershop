import axios from "axios";

describe("auth resolvers", () => {
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
});
