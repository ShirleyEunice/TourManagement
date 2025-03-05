import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTour, updateTour, deleteTour } from "../../redux/tourSlice";

function AddInternationalTourPackages() {
  const [packageName, setPackageName] = useState("");
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setImage(reader.result);
    }
  };

  const handleSave = () => {
    if (!packageName || !image) {
      alert("Please enter both name and image");
      return;
    }

    const packageData = {
      name: packageName,
      image,
      link: `/international/${packageName.toLowerCase().replace(/\s+/g, "")}`,
    };

    if (editMode) {
      dispatch(updateTour(packageData));
    } else {
      dispatch(addTour(packageData));
    }

    setPackageName("");
    setImage(null);
    setEditMode(false);
  };

  const handleEdit = (pkg) => {
    setPackageName(pkg.name);
    setImage(pkg.image);
    setEditMode(true);
  };

  return (
    <div>
      <h1 className="m-2" style={{textAlign:'center'}}>International Tour Packages</h1>
      <h5>Package Image:</h5>
      <Form.Control type="file" onChange={handleImageUpload} />
      <h5>Package Name:</h5>
      <InputGroup className="mb-3">
        <FormControl placeholder="Type Here" value={packageName} onChange={(e) => setPackageName(e.target.value)} />
      </InputGroup>
      <Button onClick={handleSave} variant="primary">{editMode ? "Update Package" : "Save Package"}</Button>

      <h4 className="mt-4">Added Packages</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((pkg, index) => (
            <tr key={index}>
              <td><img src={pkg.image} alt={pkg.name} width="100" height="70" /></td>
              <td>{pkg.name}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(pkg)}>Edit</Button>{" "}
                <Button variant="danger" size="sm" onClick={() => dispatch(deleteTour(pkg.name))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AddInternationalTourPackages;
