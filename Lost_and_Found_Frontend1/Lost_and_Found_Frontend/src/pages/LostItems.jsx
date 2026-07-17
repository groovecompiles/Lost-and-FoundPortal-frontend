import { useEffect, useState } from "react";
import axios from "axios";
import "./LostItems.css";

function LostItems() {

    const [lostItems, setLostItems] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        fetchLostItems();
    }, []);

    // Fetch All Lost Items
    const fetchLostItems = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await axios.get(
                "http://localhost:8080/lostitems",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setLostItems(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to fetch Lost Items");

        }

    };

    // Search Lost Items
    const searchLostItems = async () => {

        const token = localStorage.getItem("token");

        try {

            if (searchItem.trim() === "") {
                fetchLostItems();
                return;
            }

            const response = await axios.get(
                `http://localhost:8080/lostitems/search?itemName=${searchItem}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setLostItems(response.data);

        } catch (error) {

            console.log(error);
            alert("Search Failed");

        }

    };

    // Delete Lost Item
    const deleteItem = async (id) => {

        const token = localStorage.getItem("token");

        try {

            await axios.delete(
                `http://localhost:8080/lostitem/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Lost Item Deleted Successfully");

            fetchLostItems();

        } catch (error) {

            console.log(error);
            alert("Delete Failed");

        }

    };

    return (

        <div className="items-container">

            <h2>Lost Items</h2>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search by Item Name"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />

                <button
                    className="search-btn"
                    onClick={searchLostItems}
                >
                    Search
                </button>

                <button
                    className="show-btn"
                    onClick={() => {
                        setSearchItem("");
                        fetchLostItems();
                    }}
                >
                    Show All
                </button>

            </div>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Lost Date</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {lostItems.length > 0 ? (

                        lostItems.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.location}</td>
                                <td>{item.lostDate}</td>
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
                                No Lost Items Found
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default LostItems;