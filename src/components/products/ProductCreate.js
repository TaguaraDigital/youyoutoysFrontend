import { useState, useContext } from "react";

import ProductFinder from "../../services/apis/ProductsFinder";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";
import {
  ButtonUpload,
  Container,
  Form,
  FormGroup,
  ImgSelected,
  Input,
  InputFile,
  Select
} from "./Products.Styles";

const Product = () => {

  const { addProducts } = useContext(ProductsContext);
  
  const [code, setCode] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState(0);
  const [price, setPrice] = useState(0);
  const [pack, setPack] = useState(0);
  const [fileInput, setFileInput] = useState('');
  const [previewSource, setPreviewSource] = useState();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const uploadImage = async (base64EncodedImage) => {
    const URL = "http://localhost:3500//api/v1/images/"
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: { 'Content-Type': 'application/json' }
      })
      // await response.json()
      console.log( await response.json())
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!previewSource) return;
    // uploadImage(previewSource);
  }

  const previewFile = (file) => {

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await ProductFinder.create({
  //       code,
  //       brand,
  //       category,
  //       description,
  //       inventory,
  //       price,
  //       pack
  //     });
  //     const newProduct = { id: response.data.insertId, code, brand, category, description, inventory, price, pack }
  //     addProducts(newProduct);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <h1>Crear Productos</h1>
      <Form>
          <div>
            <FormGroup>
              <label>Codigo: </label>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                className="form-control"
                placeholder="code"
            />
            </FormGroup>
            <FormGroup>
            <label>Marca: </label>
            <Input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="form-control"
              type="text"
              placeholder="brand"
            />
          </FormGroup>
            <FormGroup>
            <label>Categoria: </label>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="custom-select my-1 mr-sm-2 form-control"
            >
              <option disabled>Categoria</option>
              <option value="1">Infantes</option>
              <option value="2">Boys</option>
              <option value="3">Girls</option>
              <option value="4">Otros</option>
            </Select>
          </FormGroup>
            <FormGroup>
            <label>Descripcion:</label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              type="text"
              placeholder="description"
            />
          </FormGroup>
            <FormGroup>
            <label>Stock: </label>
            <Input
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
              className="form-control"
              type="number"
              placeholder="inventario"
            />
          </FormGroup>
            <FormGroup>
            <label>Precio: </label>
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              type="text"
              placeholder="precio"
            />
          </FormGroup>
            <FormGroup>
            <label>U X B</label>
            <Input
              value={pack}
              onChange={(e) => setPack(e.target.value)}
              className="form-control"
              type="number"
              placeholder="U X B"
            />
          </FormGroup>
          </div>
          <div>
            <InputFile
              type="file"
              name="image"
              onChange={handleFileInput}
              value={fileInput}
            />
            <ButtonUpload
                type="submit"
            >
                Subir
            </ButtonUpload>

            {previewSource && (
                  <ImgSelected src={previewSource} alt="" srcset=""/>
              )}
          </div>
          {/* <button
          onClick={handleSubmit}
            type="submit"
            className="col btn btn-primary"
          >
            Add
          </button> */}
      </Form>            
    </Container>
  )
}

export default Product;