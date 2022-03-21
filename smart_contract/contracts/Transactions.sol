// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionsCount;

    event Transfer(address from, address receiver, uint amount, string message, string keyowrd, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        string keyowrd;
        uint256 timestamp;
    }

    TransferStruct[] transactions;
    
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionsCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, keyword, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, keyword, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionsCount;
    }
}