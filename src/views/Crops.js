import React from "react";
import { Container, Button } from "shards-react";
import { variables } from "../utils/varables";

const Crops = () => (
    <Container fluid className="main-content-container px-4 pb-4">

        <button type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={()=>this.addClick()}>
            Add Crops
        </button>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Crop Name</th>
                    <th>Quanity</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table><br/>

        <Button pill>&larr; Go Back</Button>
        
    </Container>
  );
  
  export default Crops;
  