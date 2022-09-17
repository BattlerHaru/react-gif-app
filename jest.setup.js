import "whatwg-fetch";

require("dotenv").config({
  path: ".env.test",
});

jest.mock("./src/helpers/getEnv", () => ({
  getEnv: () => ({ ...process.env }),
}));
