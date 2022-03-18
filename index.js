@@ -115,7 +115,7 @@ export class Transaction {
   * sum(spends) - sum(outputs) - intended_transaction_fee - change = 0
   * aka: self.transaction_fee - intended_transaction_fee - change = 0
   */
  post(spenderHexKey: string, changeGoesTo?: string | undefined | null, intendedTransactionFee: bigint): TransactionPosted
  post(spenderHexKey: string, changeGoesTo: string | undefined | null, intendedTransactionFee: bigint): TransactionPosted
  setExpirationSequence(expirationSequence: number): void
}
export type NativeSimpleTransaction = SimpleTransaction
