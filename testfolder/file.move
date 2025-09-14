module MyCoin::Coin {

    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::coin::{Coin, CoinStore};

    /// Struct representing our custom coin
    struct MyCoin has store, key {}

    /// Initialize the coin
    public entry fun init_module(account: &signer) {
        coin::register<MyCoin>(account);
    }

    /// Mint new coins into the signer’s account
    public entry fun mint(account: &signer, amount: u64) {
        let mint_cap = coin::initialize<MyCoin>(
            account,
            b"My Coin",   // coin name
            b"MYC",       // symbol
            6,            // decimals
            true          // monitor_supply
        );
        coin::mint<MyCoin>(amount, mint_cap, account);
    }

    /// Transfer coins from the caller to another address
    public entry fun transfer(sender: &signer, recipient: address, amount: u64) acquires CoinStore {
        coin::transfer<MyCoin>(sender, recipient, amount);
    }
}
