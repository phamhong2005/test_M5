import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import {Update, updateForm} from "../../redux/service/productService";

export default function UpdateProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        return products.productEdit
    })
    const {id} = useParams();
    useEffect(() => {
        dispatch(updateForm(id))
    }, [])
    const Edit = (value) => {
        dispatch(Update(value)).then(() => {
            navigate("/products/list")
        })

    }

    return (
        <>
            <Formik initialValues={product}
                    onSubmit={Edit}
                    enableReinitialize={true}>
                <Form>
                    <Field name={"id"}></Field>
                    <Field name={"title"}></Field>
                    <Field name={"price"}></Field>
                    <Field name={"description"}></Field>
                    <button type={"submit"}>Sửa</button>
                </Form>
            </Formik>
        </>

    )

}
