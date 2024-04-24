import { createAsyncThunk } from "@reduxjs/toolkit";

// Создание асинхронного thunk для выполнения запроса
export const searchProducts = createAsyncThunk(
    "products/search",
    async (searchQuery: string) => {
        try {
            const response = await fetch(
                `http://drmarket.master.et9.ru:10580/qs?q=${searchQuery}`,
            );

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            return {
                totalCount: data.tot,
                categories: data.cats.map(
                    (item: { name: string; path: string }) => {
                        return {
                            title: item.name,
                            path: item.path,
                        };
                    },
                ),
                products: data.items.map(
                    (item: { name: string; path: string }) => {
                        return {
                            title: item.name,
                            path: item.path,
                        };
                    },
                ),
            };
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error; // Перебрасываем ошибку дальше для обработки в компонентах или других местах
        }
    },
);
