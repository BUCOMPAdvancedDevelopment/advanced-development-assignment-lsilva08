import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { ProductListContext, ProductListContextProps } from '../../../../../contexts/products/list';

// import { Container } from './styles';

export interface UpsertDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const UpsertDialog: React.FC<UpsertDialogProps> = ({ isOpen, onClose }) => {

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const { selectedProduct } = useContext<ProductListContextProps>(ProductListContext);

    useEffect(() => {
        (selectedProduct
            ? (() => {
                setName(selectedProduct.name)
                setPrice(selectedProduct.price)
            })
            : (() => {
                setName('')
                setPrice(0)
            })
        )()
    }, [selectedProduct])


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedProduct ? `Editing product ${selectedProduct.id}` : 'Creating new product'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" placeholder='Price' />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpsertDialog;