import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Time "mo:base/Time"; 
import Array "mo:base/Array"; // ✅ Import Array module

actor TransactionBackend {
    
    type Transaction = {
        id: Nat;
        sender: Text;
        receiver: Text;
        amount: Nat;
        timestamp: Int;
    };

    stable var transactionStore: [Transaction] = [];

    public func createTransaction(sender: Text, receiver: Text, amount: Nat) : async Text {
        let tx = {
            id = transactionStore.size(); // ✅ Use size() directly as Nat
            sender = sender;
            receiver = receiver;
            amount = amount;
            timestamp = Time.now(); // ✅ Use Time.now() for timestamp
        };
        transactionStore := Array.append(transactionStore, [tx]); // ✅ Fix unbound Array error
        return "Transaction successfully created!";
    };

    public query func getTransactions() : async [Transaction] {
        return transactionStore;
    };
}
