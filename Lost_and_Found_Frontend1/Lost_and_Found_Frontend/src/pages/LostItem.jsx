import { useState } from "react";
import axios from "axios";
import "./LostItem.css";

function LostItem() {

    const [item, setItem] = useState({
        itemName: "",
        category: "",
        description: "",
        location: "",
        lostDate: "",
        contactNumber: ""
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setItem({
            ...item,
            [name]: value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            return;
        }


        try {

            const response = await axios.post(
                "http://localhost:8080/lostitem",
                item,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );


            console.log(response.data);

            alert("Lost Item Added Successfully");


            // Clear form after submission
            setItem({
                itemName: "",
                category: "",
                description: "",
                location: "",
                lostDate: "",
                contactNumber: ""
            });


        } catch (error) {

            console.log(error.response);

            alert("Failed to Add Lost Item");

        }

    };


    return (

        <div className="lost-container">

            <h2>Add Lost Item</h2>


            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={item.itemName}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={item.category}
                    onChange={handleChange}
                    required
                />


                <textarea
                    name="description"
                    placeholder="Description"
                    value={item.description}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="location"
                    placeholder="Lost Location"
                    value={item.location}
                    onChange={handleChange}
                    required
                />


                <input
                    type="date"
                    name="lostDate"
                    value={item.lostDate}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={item.contactNumber}
                    onChange={handleChange}
                    required
                />


                <button type="submit">
                    Add Lost Item
                </button>


            </form>

        </div>

    );

}

export default LostItem;