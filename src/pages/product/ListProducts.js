import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll} from "../../redux/service/productService";
import {Link} from "react-router-dom";

export function ListProducts() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list
    })
    useEffect(() => {
        dispatch(getAll())
    },[])
    return (
        <>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                               <td>
                                   <Link to={"/products/" + product.id}>
                                       <button>Sửa</button></Link>
                               </td>
                                <td>
                                    <button>Xóa</button>
                                </td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )

}