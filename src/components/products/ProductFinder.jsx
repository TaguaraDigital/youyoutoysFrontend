import { InputSearch, SearchContainer, SearchForm } from "./Products.Styles"

const ProductFinder = () => {
    return (
        <SearchContainer>

        <h1 className="section-title section-title--search">You You Toys</h1>
        <SearchForm className="search-form" id="search-form">
           <div className="form-control-search">
              <label htmlFor="brand" className="search-label">Marca</label>
              <InputSearch name="brand" placeholder="Marca" className="input-search" id="search-brand" />
           </div>

           <div className="form-control-search">
              <label htmlFor="category" className="search-label">Categoria</label>
              <InputSearch name="category" placeholder="categoria" className="input-search" id="search-category" />
           </div>

           <div div className="form-control-search">
              <label htmlFor="description" className="search-label">Descripcion</label>
              <InputSearch name="description" placeholder="Descripcion" className="input-search" id="search-description" />
           </div>
           <button >Buscar</button>
           {/* <div className="msg-error" id="msg-error"></div> */}
        </SearchForm>
     </SearchContainer>
    )
}

export default ProductFinder
