import React from "react";
import IconClothes from "../../assets/icon-clothes";
import IconCredit from "../../assets/icon-credit";
import IconEntertainment from "../../assets/icon-entertainment";
import IconFood from "../../assets/icon-food";
import IconHouse from "../../assets/icon-house";
import IconTransport from "../../assets/icon-transport";
import IconVacation from "../../assets/icon-vacation";

export const ExpenseTypeEnum: {
    [key: string]: { text: string; icon: React.ReactNode };
} = {
    CLOTHES: {
        text: "Clothes",
        icon: <IconClothes />,
    },
    CREDIT: {
        text: "Credit",
        icon: <IconCredit />,
    },
    ENTERTAINMENT: {
        text: "Entertainment",
        icon: <IconEntertainment />,
    },
    FOOD: {
        text: "Food",
        icon: <IconFood />,
    },
    HOUSE: {
        text: "House",
        icon: <IconHouse />,
    },
    TRANSPORT: {
        text: "Transport",
        icon: <IconTransport />,
    },
    VACATION: {
        text: "Vacation",
        icon: <IconVacation />,
    },
};
