import { useState } from 'react';
import './TableWithSearch.css';

export const TableWithSearch = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showError, setShowError] = useState(false);
    const data = [
        { id: 1, name: 'Alberto Rodriguez'},
        { id: 2, name: 'Andrea Cosio'},
        { id: 3, name: 'Enrique Hernandez'},
        { id: 4, name: 'Eva Morales'},
        { id: 5, name: 'Julian Monterrosa'},
        { id: 6, name: 'Rubi Escalante'},
        { id: 7, name: 'Luis Fernando Del oso'},
        { id: 8, name: 'Elsa Guiterrez'},
        { id: 9, name: 'Erik Zuñiga'},
        { id: 10, name: 'Sandra Bosques'}
    ];

    const filterData = (searchTerm) => {
        return data.filter(
          (item) =>
            item.id === parseInt(searchTerm) || // Búsqueda por ID
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Búsqueda por Nombre
        );
      };
    
      const handleSearch = () => {
        if (searchTerm) {
            const result = filterData(searchTerm);
            setSearchResult(result);
            setShowError(result.length === 0)   
        }
      };

      return (
        <div className='search-container'>
            <div className="serch-input-container">
            <input className='search-input'
               type = "text"
               placeholder = "Buscar..."
               value = {searchTerm}
               onChange = {(e) => setSearchTerm(e.target.value)} 
            />
            <button className='TWS-button' onClick = {handleSearch}>Buscar</button>
            </div>
            {showError && (
                <p className='p'>No Existe ese campo</p>
            )}
            <table>
                <thead>
                    <tr>
                        <th className='id'>ID</th>
                        <th className='nombre'>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((item) => (
                        <tr key = {item.id}>
                            <td className='td'>{item.id}</td>
                            <td className='td'>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
}