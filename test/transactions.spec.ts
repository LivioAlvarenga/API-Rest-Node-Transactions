import { execSync } from "node:child_process"; // to execute commands in the terminal
import request from "supertest";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready(); // start the server
  });

  afterAll(async () => {
    await app.close(); // close the server
  });

  // Obs: The ideal is in e2e tests is to kill and recreate the database tables before each test, but this is not performative. For this reason, we have little e2e tests and do more unit tests, as they are more performant!
  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all"); // rollback all migrations in test.db before all tests
    execSync("npm run knex migrate:latest"); // run migrations in test.db before all tests
  });

  it("should be able can create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "Transaction 1 - test",
        amount: 100,
        type: "credit",
      })
      .expect(201);
  });

  it("should be able can list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Transaction 1 - test",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("set-cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "Transaction 1 - test",
        amount: 100,
      }),
    ]);
  });

  it("should be able to get specific transaction", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Transaction 1 - test",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("set-cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    const transactionId = listTransactionsResponse.body.transactions[0].id;

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set("Cookie", cookies)
      .expect(200);

    expect(getTransactionResponse.body.transaction).toEqual(
      expect.objectContaining({
        title: "Transaction 1 - test",
        amount: 100,
      })
    );
  });

  it("should be able to get the summary", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Credit Transaction - test",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("set-cookie");

    await request(app.server).post("/transactions").set("Cookie", cookies).send({
      title: "Debit Transaction - test",
      amount: 50,
      type: "debit",
    });

    const summaryResponse = await request(app.server)
      .get("/transactions/summary")
      .set("Cookie", cookies)
      .expect(200);

    expect(summaryResponse.body.summary).toEqual({ amount: 50 });
  });
});
