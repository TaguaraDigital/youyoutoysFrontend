import { InputSearch, SearchContainer, SearchForm } from "./Order.Style"

const OrderFinder = () => {
    return (
        <SearchContainer>

        <h1 className="section-title section-title--search">You You Toys</h1>
        <SearchForm className="search-form" id="search-form">
           <div className="form-control-search">
              <label htmlFor="customer" className="search-label">Cliente</label>
              <InputSearch name="brand" placeholder="Cliente" className="input-search" id="search-brand" />
           </div>

           <div className="form-control-search">
              <label htmlFor="status" className="search-label">Status</label>
              <InputSearch name="category" placeholder="Status" className="input-search" id="search-status" />
           </div>

           <div div className="form-control-search">
              <label htmlFor="fecha" className="search-label">Fecha</label>
              <InputSearch name="fecha" placeholder="Fecha" className="input-search" id="search-fecha" />
           </div>
           <button >Buscar</button>
           {/* <div className="msg-error" id="msg-error"></div> */}
        </SearchForm>
     </SearchContainer>
    )
}

export default OrderFinder
