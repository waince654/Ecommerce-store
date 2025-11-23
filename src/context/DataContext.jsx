import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=150");
      console.log("API Response:", res.data);

      // FakeStore returns an array directly
      setData(res.data);

      setLoading(false);
    } catch (error) {
      console.log("API Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Get unique categories
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        fetchAllProducts,
        categoryOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
