import { useSearchParams } from 'react-router-dom';
 
function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") || 1;
   
    const nextPage = () => {
        setSearchParams({ page: Number(page) + 1 });
    };
 
    return (
        <div>
            <h1>Products Page</h1>
            <p>Currently viewing page: {page}</p>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
}
 
export default Products;