import { useState } from "react";
import axios from "axios";
import Navigation from "@/components/admin-nav"

export default function AddFood() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [file, setFile] = useState()
    const [ingredients, setIngredients] = useState("")
    const [description, setDescription] = useState("");

    function submitForm() {
        console.log(name, price, ingredients, description)

        const formData = new FormData()
        formData.append("image", file)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("ingredients", ingredients)
        formData.append("price", price)

        axios.post('http://localhost:8000/api/food', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(function (response) {
                console.log(response);
                setName("")
                setPrice("")
                setDescription("")
                setIngredients("")
                setFile("")
            })
    }

    return (
        <>
            <Navigation />

            <h2>Add Product</h2>
            <form action="#" method="post">

                {/* reference :- https://dev.to/heyjoshlee/using-the-usestate-hook-and-working-with-forms-in-react-js-m6b */}
                <label for="name">Name:</label><br />
                <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} /><br /><br />

                <label for="price">Price:</label><br />
                <input type="text" id="price" name="price" value={price} onChange={(event) => setPrice(event.target.value)} /><br /><br />

                <label for="description">Description:</label><br />
                <textarea id="description" name="description" rows="4" cols="50" value={description} onChange={(event) => setDescription(event.target.value)}></textarea><br /><br />

                <label for="ingredients">Ingredients:</label><br />
                <textarea id="ingredients" name="ingredients" rows="4" cols="50" value={ingredients} onChange={(event) => setIngredients(event.target.value)}></textarea><br /><br />

                <input
                    filename={file}
                    onChange={e => setFile(e.target.files[0])}
                    type="file"
                    accept="image/*"
                ></input>

                <input type="button" value="Submit" class="btn btn-danger" onClick={submitForm} />

            </form>

        </>

    )
}