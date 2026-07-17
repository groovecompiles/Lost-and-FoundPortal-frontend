import { useEffect, useState } from "react";
import axios from "axios";
import "./FoundItems.css";

function FoundItems() {

    const [foundItems, setFoundItems] = useState([]);

    useEffect(() => {
        fetchFoundItems();
    }, []);

    const fetchFoundItems = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await axios.get(
                "http://localhost:8080/founditems",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setFoundItems(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to fetch Found Items");

        }

    };


    const deleteItem = async (id) => {

        const token = localStorage.getItem("token");

        try {

            await axios.delete(
                `http://localhost:8080/founditem/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Found Item Deleted Successfully");

            fetchFoundItems();

        } catch (error) {

            console.log(error);
            alert("Delete Failed");

        }

    };


    return (

        <div className="items-container">

            <h2>Found Items</h2>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Found Date</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>

                </thead>


                <tbody>

                    {foundItems.length > 0 ? (

                        foundItems.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.location}</td>
                                <td>{item.foundDate}</td>
                                <td>{item.contactNumber}</td>


                                <td>

                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this item?")) {
                                                deleteItem(item.id);
                                            }
                                        }}
                                    >
                                        Delete
                                    </button>

                                </td>


                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="8">
                                No Found Items Found
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default FoundItems;