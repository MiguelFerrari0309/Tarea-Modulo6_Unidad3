import React from 'react';
import './../../styles/components/pages/AdopcionItem.css'

const AdopcionItem = (props) => {
    const { title, imagen, description, onPreguntar } = props;


    return (
        <div className="adopcion">
            <div className="col">
                <div className="card">
                    <img src={imagen} width={100} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
                        <button type="button" className="btn btn-warning" onClick={() => onPreguntar(title)}>
                            Preguntar por mí
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdopcionItem;