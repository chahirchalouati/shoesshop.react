import {Heading, Stack, Text, Image, Grid, Box} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import {Product} from "./Common/Domain/common_domain";
import ProductCard from "./Components/ProductCard";
import Pagination from "@choc-ui/paginator"
import {ResponsePageable} from "./Common/Domain/Pageable";

function App() {
    const [responseProducts, setResponseProducts] = useState<ResponsePageable<Product> | null>(null);
    const [size, setSize] = useState<number>(0);
    const getProducts = async (size: number = 0) => await axios.get("http://localhost:8080/products?size="+size);

    useEffect(() => {
        getProducts(0).then(res => setResponseProducts(res.data as ResponsePageable<Product>))
            .catch(err => console.log(err));
    }, [])

    return (
        <Stack width={"full"} position={"relative"}>
            <NavBar/>
            <Box d={"flex"}
                 flexDirection={"column"}
                 justifyContent={"flex-start"}
                 alignItems={"center"}>

                <Heading py={"40"}
                         justifyContent={"center"}
                         alignItems={"center"}>Clear overview for efficient tracking</Heading>

                <Grid justifyContent={"center"}
                      alignItems={"center"}
                      py={"10"}
                      justifySelf={"center"}
                      width={"container.xl"}
                      templateColumns='repeat(4, 1fr)'
                      gap={4}>
                    {responseProducts?.content.map(product => <ProductCard product={product} key={product.code}/>)}
                </Grid>

            </Box>
            {responseProducts && <Box d={"flex"} py={10}
                                      flexDirection={"column"}
                                      justifyContent={"flex-start"}
                                      alignItems={"center"}>
                <Pagination
                    current={responseProducts?.number}
                    total={responseProducts?.totalPages}
                    paginationProps={{display: "flex"}}
                    colorScheme="red"
                    rounded="full"
                    onChange={(currentPage) => {
                        getProducts(currentPage as number + 1).then(res => setResponseProducts(res.data as ResponsePageable<Product>))
                            .catch(err => console.log(err));
                    }}
                />

            </Box>}
        </Stack>)
}

export default App;
