import { useState } from "react";
import axios from "axios";
import "./FoundItem.css";

function FoundItem() {

    const [item, setItem] = useState({
        itemName: "",
        category: "",
        description: "",
        location: "",
        foundDate: "",
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
                "http://localhost:8080/founditem",
                item,
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"application/json"
                    }
                }
            );


            console.log(response.data);

            alert("Found Item Added Successfully");


            setItem({
                itemName:"",
                category:"",
                description:"",
                location:"",
                foundDate:"",
                contactNumber:""
            });


        } catch(error){

            console.log(error.response);

            alert("Failed to Add Found Item");

        }

    };


    return (

        <div className="found-container">


            <h2>Add Found Item</h2>


            <form className="found-form" onSubmit={handleSubmit}>


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
                    placeholder="Found Location"
                    value={item.location}
                    onChange={handleChange}
                    required
                />


                <input
                    type="date"
                    name="foundDate"
                    value={item.foundDate}
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


                <button className="found-submit-btn" type="submit">
                    Add Found Item
                </button>


            </form>


        </div>

    );

}

export default FoundItem;