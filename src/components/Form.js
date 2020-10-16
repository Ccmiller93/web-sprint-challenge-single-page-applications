import React from "react";

export default function Form(props) {
    return (
        <div className="build-pizza">
            <form onSubmit={props.submit}>
                
                <h1>Build Your Pizza</h1>
                
                <section>
                    <div className="form-heading">
                        <h2>Enter Your Name</h2>
                    </div>
                    <label htmlFor="name">Name: </label>
                    <input value={props.pizzaOrder.name} onChange={props.onInputChange} id="name" name="name" type="text" />
                </section>

                <section>
                    <div className="form-heading">
                        <h2>Select a Size</h2>
                    </div>
                    <label htmlFor="size">Size: </label>
                    <select onChange={props.onInputChange} id="size" name="size">
                        <option defaultValue value="">Select Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </section>

                <section>
                    <div className="form-heading">
                        <h2>Toppings</h2>
                    </div>
                    <label htmlFor="pepperoni">
                        Pepperoni <input checked={props.pizzaOrder.pepperoni} onChange={props.onInputChange} name="pepperoni" id="pepperoni" type="checkbox" />
                    </label>
                    <label htmlFor="bacon">
                        Bacon <input checked={props.pizzaOrder.bacon} onChange={props.onInputChange} name="bacon" id="bacon" type="checkbox" />
                    </label>
                    <label htmlFor="ham">
                        Ham <input checked={props.pizzaOrder.ham} onChange={props.onInputChange} name="ham" id="ham" type="checkbox" />
                    </label>
                    <label htmlFor="chicken">
                        Chicken <input checked={props.pizzaOrder.chicken} onChange={props.onInputChange} name="chicken" id="chicken" type="checkbox" />
                    </label>
                </section>
                
                <section>
                    <div className="form-heading">
                        <h2>Anything Else?</h2>
                    </div>
                    <label htmlFor="specialInstructions">Special instructions: </label>
                    <input value={props.pizzaOrder.specialInstructions} onChange={props.onInputChange} name="specialInstructions" id="specialInstructions" type="text" />
                </section>
                <div className="errors">
                    {props.errors.name}
                </div>
                <button>Add to Order</button>
            </form>
        </div>
    )
}