import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Field, Formik, Form} from "formik";
import {useNavigate} from "react-router-dom";
import {add} from "../../redux/service/productService";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const Create = (value)=>{
      dispatch(add(value))
      navigate('/products/list')
  }

    return (
        <>
            <h1> ADD </h1>
            <Formik initialValues={{
                id: '',
                title:'',
                price:'',
                description:''
            }}

                    onSubmit={Create}
            >
                <Form>
                    <Field name={"id"} placeholder={"Id"}/>
                    <Field name={"title"} placeholder={"Title"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <Field name={"price"} placeholder={"price"}/>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddProduct;