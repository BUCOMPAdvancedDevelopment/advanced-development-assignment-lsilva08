import React, { createContext, useState } from "react";
import { Order, OrderTracking } from "../../../typings";
import { findOrderById } from "../../../services/orders.service";
import { findTracking } from "../../../services/tracking.service";
import { useDisclosure } from "@chakra-ui/hooks";

export interface OrderDetailsContextProps {
    order?: Order;
    orderTracking?: OrderTracking;
    loadingOrder: boolean;
    loadedOrder: boolean;
    loadOrder: (id: number) => Promise<void>;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const OrderDetailsContext = createContext<OrderDetailsContextProps>({
    loadingOrder: false,
    loadedOrder: false,
    loadOrder: async () => { },
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
});

const OrderDetailsContextProvider: React.FC = ({ children }) => {

    const [order, setOrder] = useState<Order>();
    const [orderTracking, setOrderTracking] = useState<OrderTracking>();
    const [loadingOrder, setLoadingOrder] = useState<boolean>(false);
    const [loadedOrder, setLoadedOrder] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const loadOrder = async (id: number) => {
        setLoadingOrder(true)
        setLoadedOrder(false)
        try {
            const foundOrder = await findOrderById(id);
            setOrder(foundOrder);
            if (foundOrder) {
                setLoadedOrder(true)
            }
            const tracking = await findTracking(Number(foundOrder.id));
            setOrderTracking(tracking);
        } catch (err) {
            setOrder(undefined);
            setLoadedOrder(false)
        } finally {
            setLoadingOrder(false)
            setLoadedOrder(true)
        }
    }

    return <OrderDetailsContext.Provider value={{
        order,
        orderTracking,
        loadingOrder,
        loadOrder,
        loadedOrder,
        isOpen,
        onOpen,
        onClose
    }}>
        {children}
    </OrderDetailsContext.Provider>;
}

export default OrderDetailsContextProvider;