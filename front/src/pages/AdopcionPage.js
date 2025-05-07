import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdopcionItem from '../components/adopcion/AdopcionItem';
import './../styles/components/pages/AdopcionPage.css';



const AdopcionPage = (props) => {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState('');

  const handlePreguntarClick = (nombre) => {
    setMascotaSeleccionada(nombre);
    setFormularioVisible(true);
  };

  const cerrarModal = () => {
    setFormularioVisible(false);
    setMascotaSeleccionada('');
  };

  const [loading, setLoading] = useState(false);
  const [adopcion, setAdopcion] = useState([]);

  useEffect(() => {
    const cargarAdopcion = async() => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/adopcion');
      setAdopcion(response.data);
      setLoading(false);
    };

    cargarAdopcion();
  }, []);

  return (
    <main className="holder">
      <div>
        <h2>Aviso importante:</h2>
        <p>Antes de continuar, se recomienda leer los <strong>REQUISITOS DE ADOPCIÓN</strong> y las 
          <strong> PREGUNTAS FRECUENTES</strong> para verificar que podrá adoptar a un nuevo amigo!. Recuerde
          siempre que un animal nuevo en la familia es un peso importante, y que merece los cuidados, atención y
          tiempo necesarios.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea harum sint quas quibusdam autem itaque
          nisi, similique delectus pariatur neque deleniti nesciunt cupiditate ipsam totam magni libero molestiae!
          Cumque?</p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          
          { loading ? (
            <p>Cargando...</p>
          ) : (
            adopcion.map(item => <AdopcionItem key={item.id} title={item.nombre} description={item.descripcion} imagen={item.imagen} onPreguntar={handlePreguntarClick} />)
          )
        }

        </div>
      </div>

      {/* Modal */}
      {formularioVisible && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <h3>Pre-Formulario de adopción</h3>
            <p>Estás interesado en adoptar a: <strong>{mascotaSeleccionada}</strong></p>
            <form>
              <div className="mb-2">
                <label>Nombre:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Correo:</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Dirección:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Télefono:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>¿Estás de acuerdo con la firma de un contrato de adopción?</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>¿Estás dispuesto/a a asumir los gastos veterinarios y de manutención?</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>¿Quienes convivirán con el animal?</label>
                <textarea className="form-control" rows="3" />
              </div>
              <button type="submit" className="btn btn-success">Enviar consulta</button>
              <button type="button" className="btn btn-secondary" onClick={cerrarModal} style={{ marginLeft: '10px' }}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdopcionPage;
