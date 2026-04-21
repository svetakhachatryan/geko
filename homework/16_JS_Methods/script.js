const transactions = [
    { id: "T001", info: "  apple.com/bill  ", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T002", info: "Sberbank Transfer", amount: "5000.00 RUB", date: "2023-10-01" },
    { id: "T003", info: "APPLE.COM/BILL", amount: "1200.50 USD", date: "2023-10-01" }, // Կրկնօրինակ!
    { id: "T004", info: " Netflix Subscription ", amount: "15.99 USD", date: "2023-10-02" },
    { id: "T005", info: "Amazon Web Services", amount: "450.00 USD", date: "2023-10-03" },
    { id: "T006", info: "Apple.com/bill", amount: "30.00 USD", date: "2023-10-04" }
];


const cleanedTransactions = transactions.map((transaction) => {
    const parts = transaction.amount.split(" ")

    return{
    id: transaction.id,
    info: transaction.info.toLowerCase().trim(),

    amount: {
        value: parts[1] === "RUB"
        ? parseFloat(parts[0]) / 100
        : parseFloat(parts[0]),
        currency: "USD"
    },
  
    date: transaction.date
}

});

    console.log(cleanedTransactions)


const finalTransactions = cleanedTransactions.filter((transaction, index, self) => {
    const firstIndex = self.findIndex((t) => (
        t.info === transaction.info &&
        t.amount.value === transaction.amount.value &&
        t.amount.currency === transaction.amount.currency &&
        t.date === transaction.date
    ));

    return index === firstIndex;
});

console.log("վերջնական տեսք", finalTransactions)


const totalUSD = finalTransactions
.filter(t =>  t.amount.currency === "USD")
.reduce((sum, t) => sum + t.amount.value, 0);

console.log("ընդհանուր ծախսը USd-ով", totalUSD)