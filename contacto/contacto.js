function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="contacto">
    <div class="content">
    <h2 class="content__title">Contacto</h2>
</div>
    <div class="contacto__form">
        <form action="" method="get">
          <div class="fieldset">
            <label for="nombre" class="label">Nombre</label>
            <input type="text" id="nombre" class="input-name">
          </div>
          <div class="fieldset">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" class="input-email">
          </div>
          <div class="fieldset">
            <label for="mensaje" class="label">Mensaje</label>
            <textarea name="" id="mensaje" class="textarea" ></textarea>
          </div>
          <div class="btn">
            <button type="submit" class="button">Enviar</button>
          </div>
        </form>
    </div>
</section>`;

  const form = componentEl.querySelector(".contacto__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("el form se envio");
  });

  el.appendChild(componentEl);
}
