import './../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (

    <main className="holder">
        <div className="nosotros">
            <h2>NUESTRA HISTORIA</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab
                quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab
                quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt ab quae esse autem,
                doloribus omnis qui beatae voluptatem dolor perspiciatis quod vitae. Nobis ut veniam iste eveniet
                doloremque tempore.</p>
        </div>

        <div class="container">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://fakeimg.pl/900x400" class="d-block w-100" alt="Imagen 1"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Foto N°1 del refugio</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://fakeimg.pl/900x400" class="d-block w-100" alt="Imagen 2"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Foto N°2 del refugio</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://fakeimg.pl/900x400" class="d-block w-100" alt="Imagen 3"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Foto N°3 del refugio</h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>

        <div class="equipo">
            <h2>Gente del Refugio</h2>
        </div>
        <div class="personas">
            <div class="persona">
                <img src="images/nosotros/nosotros1.jpg" width={100} alt="Miguel Ferrari"/>
                <h3>Miguel Ferrari</h3>
                <h4>Fundador</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.
                    uia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.</p>
            </div>
            <div class="persona">
                <img src="images/nosotros/nosotros2.jpg" width={100} alt="Lucia Arispe"/>
                <h3>Lucia Arispe</h3>
                <h4>Co-Fundadora</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.
                    uia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.</p>
            </div>
            <div class="persona">
                <img src="images/nosotros/nosotros3.jpg" width={100} alt="Sebastian Figueroa"/>
                <h3>Sebastian Figueroa</h3>
                <h4>Ayudante</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.
                    uia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.</p>
            </div>
            <div class="persona">
                <img src="images/nosotros/nosotros4.jpg" width={100} alt="Federico Gimenez"/>
                <h3>Federico Gimenez</h3>
                <h4>Rescatista</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.
                    uia velit nisi, fugit excepturi, fuga nihil
                    inventore nulla eum sint enim dolor laborum et. Assumenda placeat ratione ut repellendus suscipit
                    molestias.</p>
            </div>
        </div>

    </main>
    );
}

export default NosotrosPage;