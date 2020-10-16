import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    size: "",
    pepperoni: false,
    bacon: false,
    ham: false,
    chicken: false,
    specialInstructions: "",
  })

  const [errors, setErrors] = useState({})

  const onInputChange = evt =>{
    evt.persist();
    let value = evt.target.value;
    Yup.reach(formSchema, evt.target.name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [evt.target.name]: ""
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [evt.target.name]: err.errors[0]
      })
    })
    if(evt.target.type === "checkbox") value = evt.target.checked
    setPizzaOrder({
      ...pizzaOrder,
      [evt.target.name]: value
    })
  }

  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at two characters or longer"),
    pepperoni: Yup
      .bool(),
    bacon: Yup
      .bool(),
    ham: Yup
      .bool(),
    chicken: Yup
      .bool(),
    size: Yup
      .string()
      .required("Size is required"),
    specialInstructions: Yup
      .string()
  })

  const submitOrder = evt => {
    evt.preventDefault();
    axios.post("https://reqres.in/api/pizza", pizzaOrder).then(data=>{
      console.log("App -> data", data);
      setPizzaOrder({
        name: "",
        size: "small",
        pepperoni: false,
        bacon: false,
        ham: false,
        chicken: false,
        specialInstructions: "",
      })
    }).catch(err=>{
    console.log("App -> err", err)
    })
  }
  return (
    <>
      <Header/>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/pizza">
            <Form errors={errors} submit={submitOrder} pizzaOrder={pizzaOrder} onInputChange={onInputChange}/>
          </Route>
      </Router>
      </>
    )
  }
export default App