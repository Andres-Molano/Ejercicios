<template>
  <section class="home">
    <aside class="home-menu">
      <div class="home-menu-contenedor" id="temario">
        <h3 class="home-menu-titulo">Ejercicios</h3>
        <ul class="home-menu-lista">
          <li
            class="home-menu-lista-item"
            :class="{ activo: index === 0 }"
            v-for="(ejercicio, index) in this.ejercicios"
            :key="index"
            @click="show('Ejercicio' + index)"
            :ref="'Ejercicio' + index"
          >
            <a class="home-menu-lista-link" :href="`#${index + 1}`">
              {{ ejercicio.nombre }}
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <main class="home-main">
      <div
        class="home-main-card"
        v-for="(ejercicio, index) in this.ejercicios"
        :key="index"
        :id="index + 1"
        @click="goTo('Ejercicio' + (index + 1))"
      >
        <h1 class="home-main-titulo">{{ ejercicio.nombre }}</h1>
        <p
          :class="{
            noDisponible: ejercicio.contenido === 'Ejercicio no disponible',
          }"
        >
          {{ ejercicio.contenido }}
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ejercicios: [
        {
          nombre: "1. Text Effect",
          contenido: "Ejercicio en el cual de trabaja con una animacion",
        },
        {
          nombre: "2. Todo List",
          contenido:
            "Ejercicio donde se hace una todo list, donde se checkean y eliminan tareas",
        },
        {
          nombre: "3. Menú vertical por puntos",
          contenido:
            "Ejercicio en el cual se ve desarrolla un menu vertical con un temario, esta vista es un ejemplo de dicho ejercicio.",
        },
        {
          nombre: "4. Tab Bar Navigation",
          contenido: "Ejercicio donde trabajamos con una barra de navegacion",
        },
        {
          nombre: "5. Banner de Cookies",
          contenido: "Ejercicio no disponible",
        },
        {
          nombre: "6. Buld a Step Progress Bar",
          contenido: "Ejercicio donde se trabaja una barra progresiva",
        },
        {
          nombre: "7. Página de Netflix",
          contenido: "Ejercicio donde se crea una vista similar a la de la plataforma de Netflix.",
        },
        {
          nombre: "8. Testimonials Slider",
          contenido: "Ejercicio no disponible",
        },
        {
          nombre: "9. Página Responsive",
          contenido: "Ejercicio no disponible",
        },
        {
          nombre: "10. CSS Card Hover Effects",
          contenido: "Ejercicio no disponible",
        },
        {
          nombre: "11. Product Card Desing",
          contenido: "Ejercicio no disponible",
        },
        {
          nombre: "12. Landing Page Animada",
          contenido: "Ejercicio no disponible",
        },
      ],
    };
  },
  methods: {
    show(referencia) {
      document.querySelector("#temario .activo").classList.remove("activo");
      this.$refs[referencia][0].classList.add("activo");
    },
    goTo(index) {
      this.$router.push(index);
    },
  },
  
};
</script>

<style lang="scss">
body {
  background: $catskillWhite;
  font-family: "Open Sans", sans-serif;
}

.home {
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% auto;
  &-menu {
    padding: 0 15px;
    &-contenedor {
      padding-top: 20px;
      position: sticky;
      overflow-y: auto;
      max-height: calc(100vh - 80px);
      top: 0;
    }
    &-titulo {
      margin-bottom: 10px;
    }
    &-lista {
      list-style: none;
      border-left: 2px solid $silver;
      padding-left: 10px;
      margin-left: 10px;
      &-item {
        position: relative;

        &.activo a,
        & a:hover {
          color: #000;
        }
        &::before {
          content: "";
          display: block;
          height: 12px;
          width: 12px;
          background: $catskillWhite;
          border: 2px solid $silver;
          position: absolute;
          left: -19px;
          top: calc(50% - 6px);
          transform: rotate(45deg);
          transition: 0.3s ease all;
        }
        &.activo::before {
          background: $flushOrange;
          border: 2px solid $flushOrange;
        }
        &:hover::before {
          border: 2px solid $flushOrange;
        }
      }
      &-link {
        display: block;
        color: #5a5a5a;
        padding: 15px 10px;
        text-decoration: none;
        transition: 0.3s ease all;
      }
    }
  }

  &-main {
    min-height: 2000px;
    &-card {
      cursor: pointer;
      margin: 20px 0;
      padding: 40px;
      background: #fff;
      border-radius: 7px;
    }
    &-titulo {
      margin-bottom: 5px;
    }
  }
}

@media screen and (max-width: 700px) {
  .home {
    grid-template-columns: 1fr;
    &-menu {
      margin-bottom: 10px;
    }
  }
}
</style>
