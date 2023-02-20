import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able can create a new transaction - POST /transactions", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "Transaction 1 - test",
        amount: 100,
        type: "credit",
      })
      .expect(201);
  });

  it("should be able can list all transactions - GET /transactions", async () => {
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
});
