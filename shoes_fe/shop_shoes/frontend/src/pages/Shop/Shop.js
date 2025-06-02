import '../../index.css'; // Đảm bảo bạn đã import file CSS
import React, { useEffect, useState } from "react";
import AxiosClient from "../../networks/AxiosClient";
import { TRANSFER_PRICE, URL_IMAGE } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Divider, Slider } from "antd";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";

const Shop = () => {
    const navigate = useNavigate();
    const [lstProducts, setLstProducts] = useState([]);
    const [lstFilterRaw, setFilterRaw] = useState({});
    const [filterParams, setFilterParams] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [showFilters, setShowFilters] = useState(false);

    const goToProductDetails = (product) => {
        navigate(`/product/${product?.code}`);
    };
    
    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12); // Số lượng sản phẩm mỗi trang

    useEffect(() => {
        const fetchProducts = async () => {
            setIsFetching(true);
            try {
                const response = await AxiosClient.post(
                    "/products/lst-products",
                    {
                        ...filterParams,
                        minPrice: priceRange[0],
                        maxPrice: priceRange[1],
                        page: currentPage,
                        size: pageSize
                    }
                );
                setLstProducts(response?.data || []);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchProducts();
    }, [filterParams, priceRange, currentPage, pageSize]);

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const [brands, styles, sizes, origins, materials] = await Promise.all([
                    AxiosClient.post("/brands"),
                    AxiosClient.post("/styles"),
                    AxiosClient.post("/sizes"),
                    AxiosClient.post("/origins"),
                    AxiosClient.post("/materials"),
                ]);
                setFilterRaw({
                    brands: brands?.data || [],
                    styles: styles?.data || [],
                    sizes: sizes?.data || [],
                    origins: origins?.data || [],
                    materials: materials?.data || [],
                });
            } catch (error) {
                console.error("Failed to fetch filter data", error);
            }
        };
        fetchFilters();
    }, []);

    const handleFilter = (type, id) => {
        setFilterParams(prev => {
            if (prev[type] === id) {
                const { [type]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [type]: id };
        });
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };
    
    const formatter = (value) => {
        return value ? value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '0 đ';
    };

    const resetFilters = () => {
        setFilterParams({});
        setPriceRange([0, 10000000]);
        setShowFilters(false);
    };

    return (
        <div className="bg-primaryBg text-primaryText">
            <div className="container mx-auto py-8">
                <div className="flex flex-col lg:flex-row gap-6 px-4">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Sản phẩm</h2>
                        <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className="px-4 py-2 bg-secondaryBg rounded-md flex items-center gap-2"
                        >
                            {showFilters ? <CloseOutlined /> : <FilterOutlined />}
                            <span>{showFilters ? "Đóng bộ lọc" : "Lọc sản phẩm"}</span>
                        </button>
                    </div>

                    {/* Filter Panel */}
                    <div className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-[280px] bg-secondaryBg p-4 rounded-lg sticky top-24 self-start`}>
                        <h2 className="text-lg font-bold mb-4 hidden lg:block">Bộ lọc sản phẩm</h2>
                        
                        {/* Phần lọc giá */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Lọc theo giá</h3>
                            <Slider
                                range
                                min={0}
                                max={10000000}
                                value={priceRange}
                                onChange={handlePriceChange}
                                tooltip={{ formatter }}
                            />
                            <div className="flex justify-between mt-2 text-sm">
                                <span>{formatter(priceRange[0])}</span>
                                <span>{formatter(priceRange[1])}</span>
                            </div>
                        </div>

                        <Divider className="my-4 border-gray-700" />

                        {/* Lọc theo thương hiệu */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Thương hiệu</h3>
                            <div className="flex flex-wrap gap-2">
                                {lstFilterRaw?.brands?.map(brand => (
                                    <div
                                        key={brand.brandId}
                                        onClick={() => handleFilter("brandId", brand.brandId)}
                                        className={`px-3 py-1 text-xs rounded-full border border-gray-700 cursor-pointer transition-colors ${filterParams.brandId === brand.brandId ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {brand.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Divider className="my-4 border-gray-700" />

                        {/* Lọc theo xuất xứ */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Xuất xứ</h3>
                            <div className="flex flex-wrap gap-2">
                                {lstFilterRaw?.origins?.map(origin => (
                                    <div
                                        key={origin.originId}
                                        onClick={() => handleFilter("originId", origin.originId)}
                                        className={`px-3 py-1 text-xs rounded-full border border-gray-700 cursor-pointer transition-colors ${filterParams.originId === origin.originId ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {origin.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Divider className="my-4 border-gray-700" />

                        {/* Lọc theo chất liệu */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Chất liệu</h3>
                            <div className="flex flex-wrap gap-2">
                                {lstFilterRaw?.materials?.map(material => (
                                    <div
                                        key={material.materialId}
                                        onClick={() => handleFilter("materialId", material.materialId)}
                                        className={`px-3 py-1 text-xs rounded-full border border-gray-700 cursor-pointer transition-colors ${filterParams.materialId === material.materialId ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {material.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Divider className="my-4 border-gray-700" />

                        {/* Lọc theo kiểu dáng */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Kiểu dáng</h3>
                            <div className="flex flex-wrap gap-2">
                                {lstFilterRaw?.styles?.map(style => (
                                    <div
                                        key={style.styleId}
                                        onClick={() => handleFilter("styleId", style.styleId)}
                                        className={`px-3 py-1 text-xs rounded-full border border-gray-700 cursor-pointer transition-colors ${filterParams.styleId === style.styleId ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {style.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={resetFilters}
                            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Làm mới bộ lọc
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 min-h-[50vh]">
                        <h2 className="text-xl font-bold mb-6 hidden lg:block">Sản phẩm</h2>
                        
                        {isFetching ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {Array.from(new Array(8)).map((_, index) => (
                                    <ProductBoxSkeleton key={index} />
                                ))}
                            </div>
                        ) : lstProducts.length ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {lstProducts.map(product => (
                                    <div
                                        key={product?.code}
                                        onClick={() => goToProductDetails(product)}
                                        className="product-card transition-transform hover:scale-[1.02]"
                                    >
                                        <div className="w-full aspect-square bg-gray-100">
                                            <img
                                                className="w-full h-full object-contain"
                                                src={URL_IMAGE(product?.gallery?.[0]?.path)}
                                                alt={product?.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <h3 className="text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                                                {product?.name}
                                            </h3>
                                            <p className="font-bold text-base md:text-lg">
                                                {TRANSFER_PRICE(parseFloat(product?.price))}
                                            </p>
                                            <div className="mt-2 text-xs text-secondaryText">
                                                <p className="mb-1">{product?.brand?.name}</p>
                                                <p>Mã: {product?.code}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center justify-center py-12">
                                <iframe
                                    width={300}
                                    height={300}
                                    src="https://lottie.host/embed/623b28ef-ba6d-470d-b396-9cdbc970bfcf/D3Torrrrb4.json"
                                    title="No Products"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium text-secondaryText">
                                    Không tìm thấy sản phẩm
                                </h3>
                                <button 
                                    onClick={resetFilters}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Xóa bộ lọc
                                </button>
                            </div>
                        )}

                        {/* Pagination could be added here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductBoxSkeleton = () => (
    <div className="product-card overflow-hidden">
        <div className="w-full aspect-square box-skeleton"></div>
        <div className="p-3">
            <div className="mb-2 h-[2.5rem] box-skeleton rounded-md"></div>
            <div className="mb-2 h-6 w-2/3 box-skeleton rounded-md"></div>
            <div className="mb-1 h-4 w-1/2 box-skeleton rounded-md"></div>
            <div className="h-4 w-1/3 box-skeleton rounded-md"></div>
        </div>
    </div>
);

export default Shop;

