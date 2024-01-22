import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("HW7eyogFBY6zTtS8ycCsPyMBTvb5mGuLGkeS1C5Ms6Tk");

export async function airdrop(publicKey: PublicKey, amount: number) {
  const conn = new Connection("http://localhost:8899", "confirmed");
  const signature = await conn.requestAirdrop(
    publicKey,
    amount * LAMPORTS_PER_SOL
  );
  await conn.confirmTransaction(signature);
  const accountInfo = await conn.getAccountInfo(publicKey);
  if (accountInfo) {
    console.log(accountInfo?.lamports / LAMPORTS_PER_SOL);
  } else {
    console.log("Account info is null");
  }
}

airdrop(publicKey, 2);
